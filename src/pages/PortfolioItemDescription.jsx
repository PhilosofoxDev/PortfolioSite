export default function PortfolioItemDescription({ ItemImage, ItemDesc }) {
  return (
    <div className="flex gap-x-15">
      <img
        src={ItemImage}
        alt="Portfolio Item"
        className="max-w-80 md:max-w-110 lg:max-w-150 border-4 border-orange-600 rounded-xl "
      />
      <p className="text-lg font-bold lg:font-normal lg:text-2xl text-white max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-center">
        {ItemDesc}
      </p>
    </div>
  );
}
