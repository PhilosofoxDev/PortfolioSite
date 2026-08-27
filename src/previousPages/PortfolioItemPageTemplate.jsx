export default function PItemTemplate({ CardName, CardDesc }) {
  return (
    <button className="flex flex-col text-center justify-center max-sm:min-w-50 sm:size-30 md:size-40 lg:size-60 xl:size-80 rounded-2xl bg-stone-700">
      <h1 className="text-2xl md:text-3xl lg:text-[2.1rem] xl:text-5xl text-center font-bold font-EmblemaOne md:mb-2 lg:mb-6  text-orange-500">
        {CardName}
      </h1>
      <div className="text-center">
        <p className="hidden md:block text-sm lg:text-lg xl:text-xl text-orange-600 xl:min-w-70 text-center font-EmblemaOne">
          {CardDesc}
        </p>
      </div>
    </button>
  );
}
