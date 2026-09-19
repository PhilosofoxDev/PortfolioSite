import ProjectCardTemplate from "./Templates/ProjectCardTemplate.jsx";

import BedmimeImage from "./assets/images/BedmimeTitle.png";
import ProjectOVERDRAFT from "./assets/images/ProjectOverdraftPitchSlide.png";

// Add tools used to page that further describes project
export default function GameProjects() {
  return (
    <div className="flex flex-col bg-linear-to-l to-warmWhite from-mainWhite">
      <ProjectCardTemplate
        ProjectTitle="Project OVERDRAFT"
        ProjectImageSrc={ProjectOVERDRAFT}
        ProjectDescription={`Producer, Lead Systems Developer
            
            4 Month Indie Development (Aug - Dec 2026)
            
            Fast-Paced Strategy-Based FPS`}
        ProjectToolsUsed={`Godot, Trello`}
        ProjectNotes={`- Constructed core backend architecture for stylized doom-like environments
          
          - Developed intelligent and procedural enemy AI systems
          
          - Implemented a variety of interesting and game-defining mechanics
          
          - Lead and organized team with vastly different creative approaches on a common project`}
        ProjectOverviewPath={`/games/overdraft`}
        ProjectPlatformTitle={``}
        ProjectPlatformLink={`#`}
      />
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
        ProjectOverviewPath={`/games/bedmime`}
        ProjectPlatformTitle={`Itch.io`}
        ProjectPlatformLink="https://philosofox.itch.io/bedmime"
      />
    </div>
  );
}
