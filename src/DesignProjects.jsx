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
        ProjectNotes={`- Worked with team of 20+ designers and creatives
          
          - Lead focused team of 7 for all digital rendering project needs
          
          - Personally worked in Blender to create stylized 3D assets for installation
          
          - Took consistent and active feedback on a highly iterative project`}
        ProjectOverviewPath={`/blink`}
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
