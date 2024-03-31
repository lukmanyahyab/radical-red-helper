const InputErrorMessage = ({ message }: { message: string }): JSX.Element => {
  return <small className="text-red-500 absolute left-1/2 -translate-x-1/2 mt-1">{message}</small>;
};

export default InputErrorMessage;
