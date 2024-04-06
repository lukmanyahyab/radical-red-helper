import locations from "./data/itemLocations";

const Items = () => {
  return (
    <>
      {locations.map((location) => (
        <table className="m-auto mb-4 w-full rounded-b-lg overflow-hidden" key={location.name}>
          <caption className="text-xl font-bold rounded-t-lg">
            <span className="">{location.name}</span>
          </caption>
          <thead className="text-sm text-left">
            <tr className="uppercase bg-zinc-800">
              <th className="px-3 py-1 w-[26ch] rounded-tl-lg">Name</th>
              <th className="px-3 py-1 rounded-tr-lg">Detail</th>
            </tr>
          </thead>
          <tbody>
            {location.items.map((item) => (
              <tr className="bg-zinc-200 text-zinc-950 border-b border-zinc-800">
                <td className="px-3 py-1 font-semibold border-r border-zinc-800">{item.name}</td>
                <td className="px-3 py-1">{item.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </>
  );
};

export default Items;
