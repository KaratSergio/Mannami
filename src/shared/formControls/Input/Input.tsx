interface InputProps {
  style?: string;
}

const Input = ({ style }: InputProps) => {
  return <input className={`${style}`}></input>;
};

export default Input;
