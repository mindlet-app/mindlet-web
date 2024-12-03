import ChallengeList from "@/components/ChallengeList";
import ProfileHeader from "@/components/ProfileHeader";
import ActivityChart from "@/components/charts/activityChart";
import Announcement from "@/components/Announcement";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  return (
    <div className="p-2">
      <div className="grid grid-cols-10 gap-4 p-2">
        <div className="col-span-7">
          <Announcement />
          <CourseCard />
        </div>
        <div className="col-span-3 p-2  rounded-lg bg-neutral-100 flex flex-col gap-2">
          <ProfileHeader />
          <ActivityChart />
          <ChallengeList />
        </div>
      </div>
    </div>
  );
}
