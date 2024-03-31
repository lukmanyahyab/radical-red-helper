import { Datum } from "@/app/abilities/types";

type Props = {
  id: string;
  data: Datum[];
};

const Datalist = ({ id, data }: Props): JSX.Element => {
  return (
    <datalist id={id}>
      {data.map((datum, index) => (
        <option value={datum.name} key={index} />
      ))}
    </datalist>
  );
};

export default Datalist;
