export default function PortfolioItemDescription({ ItemImage, ItemDesc, ItemLink }) {
  return (
    <div className="not-md:flex-col not-md:gap-y-20 md:flex md:gap-x-15 justify-items-center">
     <a href={ItemLink} target="_blank" rel="noopener noreferrer">
        <img
          src={ItemImage}
          alt="Portfolio Item"
          className="not-md:mb-8 max-h-50 md:max-h-65 lg:max-h-85 max-w-80 md:max-w-110 lg:max-w-150 border-4 border-orange-600 rounded-xl "
        />
      </a>
      <p className="text-lg font-bold lg:font-normal lg:text-2xl text-white max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-center">
        {ItemDesc}
      </p>
    </div>
  );
}
