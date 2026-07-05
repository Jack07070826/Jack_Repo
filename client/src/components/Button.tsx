import { MouseEvent } from "react";

interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    console.log(event.currentTarget.innerText);
  }

  return (
    <button type="button" className="btn btn-primary" onClick={handleClick}>
      {title}
    </button>
  );
}

export default Button;
