import ProjectCardTemplate from "./Templates/ProjectCardTemplate.jsx";

import BedmimeImage from "./assets/images/BedmimeTitle.png";

export default function GameProjects() {
  return (
    <div className="flex flex-col bg-linear-to-l to-warmWhite from-mainWhite">
      <ProjectCardTemplate
        ProjectTitle="BEDMIME"
        ProjectImageSrc={BedmimeImage}
        ProjectDescription={`Solo Developer
            
            2`}
      />
      <ProjectCardTemplate
        ProjectTitle="BEDMIME"
        ProjectImageSrc={BedmimeImage}
        ProjectDescription={`Solo Developer
            
            2`}
      />
      <ProjectCardTemplate
        ProjectTitle="BEDMIME"
        ProjectImageSrc={BedmimeImage}
        ProjectDescription={`Solo Developer`}
      />
    </div>
  );
}
