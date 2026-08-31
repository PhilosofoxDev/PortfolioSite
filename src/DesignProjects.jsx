import ProjectCardTemplate from "./Templates/ProjectCardTemplate";

export default function DesignProjects() {
  return (
    <div className="flex flex-col bg-linear-to-l to-warmWhite from-mainWhite">
      <ProjectCardTemplate
        ProjectTitle="BLINK Festival 2026"
        ProjectImageSrc={"#"}
        ProjectDescription={`Solo Development
            
            5 Working Months

            Endless Final Stand Horror Game`}
        ProjectToolsUsed={`Unity, Blender`}
        ProjectNotes={`- My First Game Project to Learn Development
          
          - Designed a progressive aggro system to challenge players
          
          - Implemented a simple control scheme for low barrier of entry
          
          - Created unique 3D models to meet vision`}
        ProjectOverviewPath={`/blink`}
        ProjectPublishedPlatform={`Info`}
        ProjectPlatformLink="#"
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
