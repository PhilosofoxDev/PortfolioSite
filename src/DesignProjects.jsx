import ProjectCardTemplate from "./Templates/ProjectCardTemplate";

import BlinkEyeDemo from "./assets/images/eyeTest_BLINK26.gif";

export default function DesignProjects() {
  return (
    <div className="flex flex-col bg-linear-to-l to-warmWhite from-mainWhite">
      <ProjectCardTemplate
        ProjectTitle="BLINK Festival 2026"
        ProjectImageSrc={BlinkEyeDemo}
        ProjectDescription={`Collaborative Interdisciplinary Project
            
            1 Month Sprint

            Interactive Art Installation for 2 Million+ Visitors`}
        ProjectToolsUsed={`Blender, TouchDesigner`}
        ProjectNotes={`- My First Game Project to Learn Development
          
          - Designed a progressive aggro system to challenge players
          
          - Implemented a simple control scheme for low barrier of entry
          
          - Created unique 3D models to meet vision`}
        ProjectOverviewPath={`/blink`}
        ProjectPlatformTitle={`BLINK Festival`}
        ProjectPlatformLink="https://www.blinkcincinnati.com/"
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
