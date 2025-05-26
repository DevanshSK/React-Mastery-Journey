
interface ButtonProps{
    label: string;
    onClick: () => void;
    disabled: boolean;
}


const Button = ({ label = "Click Me", onClick, disabled = false } : ButtonProps) => {
  return (
    <div>
        <button disabled={disabled} onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button