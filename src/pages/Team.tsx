import TeamHero from "../components/section/TeamHero";
import TeamMembers from "../components/section/TeamMembers";
import Culture from "../components/section/Culture";
import Advisors from "../components/section/Advisors";

export default function Team() {
  return (
    <div>
      <TeamHero />
      <TeamMembers />
      <Culture />
      {/* <Advisors /> */}
    </div>
  );
}
