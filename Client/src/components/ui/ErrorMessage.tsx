export default function ErrorMessage({ message }: { message: string }) {
  if (!message) return null;
  return (
    <div className=" text-white border-2 border-red-600 rounded-md bg-[#ff000059]  px-3 py-2 mt-2 text-sm font-medium rethink-sans">
      {message}
    </div>
  );
}
