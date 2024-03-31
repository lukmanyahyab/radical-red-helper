type Props = { disabled: boolean };

const SubmitButton = ({ disabled }: Props): JSX.Element => {
  return (
    <button
      type="submit"
      className="bg-zinc-700 px-2 py-1 self-end rounded-lg font-medium enabled:hover:bg-zinc-800 transition disabled:opacity-70"
      disabled={disabled}>
      Add
    </button>
  );
};

export default SubmitButton;
