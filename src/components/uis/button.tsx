"use client";
export type ButtonProps = {
  label: string;
  onClick?: () => void;
};
const Button = ({ label, onClick = () => {} }: ButtonProps) => {
  return (
    <button
      className="bg-sky-500 px-5 py-5 rounded-full w-64 text-2xl font-semibold"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
