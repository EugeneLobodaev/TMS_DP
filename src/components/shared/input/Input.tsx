import { inputProps } from "../../../types/input";

export const Input = (props: inputProps) => {
  return (
    <form action="">
      <input
        type={props.type}
        formAction={props.action}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </form>
  );
};
