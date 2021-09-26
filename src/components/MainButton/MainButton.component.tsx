import "./mainButton.css";
interface Props {
  text: string;
  onClick?: any;
}

const Mainbutton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button className="mainButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default Mainbutton;
