export default function PItemTemplate({ CardName, CardDesc }) {
  return (
    <button className="flex flex-col items-center justify-center min-w-80 min-h-80 rounded-2xl bg-stone-900">
      <h1 className="text-5xl text-center font-bold font-MacondoRegular mb-6 text-orange-500">
        {CardName}
      </h1>
      <div className="max-w-60 text-center">
        <p className="text-2xl text-orange-600 max-w-xl text-center font-MacondoRegular">
          {CardDesc}
        </p>
      </div>
    </button>
  );
}
