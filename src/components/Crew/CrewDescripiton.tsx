import "./crew.css";
import linkedin from "../../assets/in.svg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import telegram from "../../assets/telegram.svg";
import discord from "../../assets/discord.svg";
import user2 from "../../assets/user2.png";
interface Props {}

const CrewDescripiton: React.FC<Props> = () => {
  return (
    <div className="CrewDescripiton">
      <div className="CrewDescripiton_left ">
        <img src={user2} alt="user1" className="crewCardDesc_img" />
        <br />
        <br />
        <div className="crewCard_icons ">
          <img className="iconItem" src={fb} alt="fb" />
          <img className="iconItem" src={twitter} alt="twitter" />
          <img className="iconItem" src={linkedin} alt="linkedin" />
          <img className="iconItem" src={telegram} alt="telegram" />
          <img className="iconItem" src={discord} alt="discord" />
        </div>
      </div>
      <br />
      <div className="CrewDescripiton_right">
        <p style={{ color: "#8B00CF", fontSize: "1.5rem", margin: 0 }}>
          Ash Marcus{" "}
        </p>
        <p style={{ margin: "0" }}>Quality Assurance Manager </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <p>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua.
        </p>
        <p>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
};

export default CrewDescripiton;
