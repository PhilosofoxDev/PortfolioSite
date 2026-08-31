import GreenSection from "./GreenOverviewSection";
import WhiteSection from "./WhiteOverviewSection";

export default function ProjectOverview({
  ProjectImageSrc,
  ProjectTitle,
  ProjectDescription,
  ProjectNotes,
  ProjectOverviewPath,
  ProjectPublishedPlatform,
  ProjectPlatformLink,
}) {
  return (
    <div>
      <WhiteSection />
      <GreenSection />
    </div>
  );
}
