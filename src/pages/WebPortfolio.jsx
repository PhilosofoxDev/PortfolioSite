import NLDev from "../assets/images/NLDev.png";
import ItemTemplate from "./PortfolioItemDescription";
export default function WebPortfolio() {
  return (
    <div className="overscroll-x-none flex flex-col min-h-screen max-w-screen bg-stone-800">
      {/* Video here in future ^^^ */}
      <div className="flex flex-col gap-y-30 ml-65 mt-40 mb-15">
        <div className="flex items-start gap-x-20">
          <ItemTemplate
            ItemImage={NLDev}
            ItemDesc="Apart from this website, the only project I've made for the internet has been a fun, more personal website under the url nathanlomnicky.dev. This site was meant to be my portfolio webstite, but after considering accesiblity, I opted to create a new, more professional one for general use. I am still incredibly proud of that project, and it was a great way to learn the basics of the React framework, and how web development works."
          />
        </div>
      </div>
    </div>
  );
}
