type Props = {
  editMode: boolean;
};

const EditLabel = ({ editMode }: Props) => {
  const color = editMode ? "rgb(21 128 61)" : "rgb(63 63 70)";
  return (
    <div className={`py-1 rounded-lg w-[35%] inline-block`} style={{ backgroundColor: color }}>
      <span>{editMode ? "Click outside the table to save" : "Click on the table to edit"}</span>
    </div>
  );
};

export default EditLabel;
