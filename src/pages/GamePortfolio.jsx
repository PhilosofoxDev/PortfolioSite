import Bedmime from "../assets/images/BedmimeTitle.png";
import GoatSim from "../assets/images/MGS.png";
import HDST from "../assets/images/HDSTTitleScreenShot.png";
import ItemTemplate from "./PortfolioItemDescription";
export default function GamePortfolio() {
  return (
    <div className="overscroll-x-none flex flex-col min-h-screen max-w-screen bg-stone-800">
      {/* Video here in future ^^^ */}
      <div className="flex flex-col gap-y-30 items-center mt-40 mb-15">
        <div className="flex items-start gap-x-20">
          <ItemTemplate
            ItemImage={Bedmime}
            ItemDesc="'Bedmime' was the first major solo project I took on as a game
            developer, and was meant to serve as my introduction to the world of
            game development with Unity.
            The game is a 3D final-stand style game where the player must defend
            themselves from a disturbing mime with nothing but a flashlight. The
            scope for this project was pretty small, but I wanted to make sure I
            had a solid grasp on the fundamentals of game development before I
            took on something more ambitious. I am really proud of how this
            project turned out, and it was a great learning experience for me as
            a developer."
            ItemLink="https://philosofox.itch.io/bedmime"
          />
        </div>
        <div className="flex items-start gap-x-20">
          <ItemTemplate
            ItemImage={GoatSim}
            ItemDesc="'Mountain Goat Simulator' is one of the most recent project I have started, and is acting as my introdction to the Godot game engine. It is a linear 2D experience where the player controls a pixelated goat on a mission up a trecherous mountain. Along the way, the goat will be interrupted by many hazards, causing it to lose its balance. The player must perform one of various QTEs to stop yourself from falling. But be careful! The more QTEs you fail, the harder it will be to hang on."
            ItemLink="https://philosofox.itch.io/mountain-goat-simulator"
          />
        </div>
        <div className="flex items-start gap-x-20">
          <ItemTemplate
            ItemImage={HDST}
            ItemDesc="'HOUSTON: Don't Stop Talking!' is a collaborative 3D Bomb-Defusal style game made in Godot for the 2025 Phil Alexander Game Jam at Miami University. It draws heavy inspiration from the game 'Keep Talking and Nobody Explodes', where players must collaborate across mediums to defuse a digital bomb before time runs out. 
            The theme for the jam was community, so I wanted to do something that forced people to work together, and test their natural leadership skills."
            ItemLink="https://philosofox.itch.io/houston-dont-stop-talking"
          />
        </div>
      </div>
    </div>
  );
}
