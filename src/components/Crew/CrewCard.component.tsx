import "./crew.css";
import linkedin from "../../assets/in.svg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import telegram from "../../assets/telegram.svg";
import discord from "../../assets/discord.svg";
interface Props {
  name: string;
  job: string;
  img: any;
  width?: string;
}

const CrewCard: React.FC<Props> = ({ name, job, img, width }) => {
  return (
    <div className="crewCard" style={{ width: width ? width : "" }}>
      <img src={img} alt="user1" className="crewCard_img" />
      <br />
      <p className="crewCard_name">{name} </p>
      <p>{job} </p>
      <br />
      <div className="crewCard_icons">
        <img src={fb} alt="fb" />
        <img src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
        <img src={telegram} alt="telegram" />
        <img src={discord} alt="discord" />
      </div>
    </div>
  );
};

export default CrewCard;
