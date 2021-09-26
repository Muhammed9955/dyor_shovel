import "./card.css";
interface Props {
  question: string;
  answer: string;
}

const Card: React.SFC<Props> = ({ question, answer }) => {
  return (
    <div className="card">
      <h2>{question} </h2>
      <p>{answer}</p>
    </div>
  );
};
export default Card;
