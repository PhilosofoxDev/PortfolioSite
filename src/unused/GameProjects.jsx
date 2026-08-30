import ProjectCardTemplate from "../Templates/ProjectCardTemplate.jsx";

import BedmimeImage from "../assets/images/BedmimeTitle.png";

// Add tools used to page that further describes project
export default function GameProjects() {
  return (
    <div className="flex flex-col bg-linear-to-l to-warmWhite from-mainWhite">
      <ProjectCardTemplate
        ProjectTitle="BEDMIME"
        ProjectImageSrc={BedmimeImage}
        ProjectDescription={`Solo Development
            
            5 Working Months

            Endless Final Stand Horror Game`}
        ProjectToolsUsed={`Unity, Blender`}
        ProjectNotes={`- My First Game Project to Learn Development
          
          - Designed a progressive aggro system to challenge players
          
          - Implemented a simple control scheme for low barrier of entry
          
          - Created unique 3D models to meet vision`}
        ProjectOverviewPath={`/bedmime`}
        ProjectPublishedPlatform={`Itch.io`}
        ProjectPlatformLink="https://philosofox.itch.io/bedmime"
      />
      <ProjectCardTemplate
        ProjectTitle="Placeholder"
        ProjectImageSrc="#"
        ProjectDescription={`Solo Developer
            
            2`}
        ProjectToolsUsed={`NaN`}
        ProjectNotes={`Lorem Ipsum`}
        ProjectPublishedPlatform={`Store`}
      />
    </div>
  );
}
