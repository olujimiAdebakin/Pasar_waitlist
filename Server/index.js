import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { DB_URI, PORT } from "./env.js";
import sendMail from "./sendEmail.js";

const app = express();
app.use(
  cors({
    origin: ["https://pasar-waitlist.vercel.app/", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

const connectDB = async () => {
  if (!DB_URI) {
    console.error("DB_URI is not defined in environment variables");
    process.exit(1);
  }
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email format validation
  },
  createdAt: { type: Date, default: Date.now },
});
const Email = mongoose.model("Email", emailSchema);

// Waitlist route
app.post("/api/v1/waitlist", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  try {
    const existingEmail = await Email.find({ email });
    if (existingEmail.length > 0) {
      return res
        .status(400)
        .json({ error: "Email already exists in the waitlist." });
    }
    //console.log(`Creating entry for email: ${email}`);
    const entry = await Email.create({ email });
    // console.log(`Entry created for email: ${email}`);

    // console.log("Sending email to:", email);
    // Send email notification
    await sendMail(email);
    // console.log("Email sent successfully");

    res
      .status(201)
      .json({ success: true, message: "Email added and notification sent." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to add email or send notification." });
  }
});
app.get("/api/v1/waitlist", async (req, res) => {
  const emails = await Email.find().sort({ createdAt: -1 });
  res.status(200).json({ data: emails });
});

app.get("/", (req, res) => {
  res.send("Welcome to the Waitlist API!");
});

app.listen(PORT, async () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  await connectDB();
  console.log(`connected`); // Ensure DB connection is established before starting the server
});
