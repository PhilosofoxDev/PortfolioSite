import ProjectCardTemplate from "./Templates/ProjectCardTemplate";

import BlinkEyeDemo from "./assets/images/eyeTest_BLINK26.gif";
import LDIGroupPhoto from "./assets/images/FinalLondonGroupPhoto.JPG";

export default function DesignProjects() {
  return (
    <div className="flex flex-col bg-linear-to-l to-warmWhite from-mainWhite">
      <ProjectCardTemplate
        ProjectTitle="BLINK Festival 2026"
        ProjectImageSrc={BlinkEyeDemo}
        ProjectDescription={`Collaborative Interdisciplinary Project
            
            1 Month Sprint (Sep 2026)

            Interactive Art Installation for 2 Million+ Visitors`}
        ProjectToolsUsed={`Blender, TouchDesigner`}
        ProjectNotes={`- Worked with team of 20+ designers and creatives
          
          - Lead focused team of 7 for all digital rendering project needs
          
          - Worked w/ Blender to create stylized 3D assets for installation
          
          - Took consistent and active feedback on a highly iterative project`}
        ProjectOverviewPath={`/design/blink`}
        ProjectPlatformLink="https://www.blinkcincinnati.com/"
      />
      <ProjectCardTemplate
        ProjectTitle="London Interactive"
        ProjectImageSrc={LDIGroupPhoto}
        ProjectDescription={`Interdisplinary Ethical Design Project
            
            1 Month Study Abroad (Jul - Aug 2026)
            
            Design Affordable and Gameified Rehab Technologies`}
        ProjectToolsUsed={`Arduino, Godot`}
        ProjectNotes={`- Client work with Neuro-Rehab clinic in Richmond, England
          
          - Researched and developed affordable rehab methods to keep patients engaged
          
          - Worked with specialized team of 4 to aid in patient's balance recovery
          
          - Explored international cultures and the principles of ethical design`}
        ProjectOverviewPath={`/design/ldi`}
        ProjectPlatformTitle={``}
        ProjectPlatformLink={`#`}
      />
    </div>
  );
}
