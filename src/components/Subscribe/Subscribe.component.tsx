import Mainbutton from "../MainButton/MainButton.component";

interface Props {}

const Subscribe: React.FC<Props> = (props) => {
  return (
    <div
      style={{
        background: "#B64ECD",
        textAlign: "center",
        padding: "2rem",
        textTransform: "uppercase",
      }}
    >
      <h1 style={{ fontWeight: "inherit" }}>
        subscribe to get lattest update <br /> of news and offer
      </h1>
      <br />
      <Mainbutton text="Join Now" />
    </div>
  );
};

export default Subscribe;
