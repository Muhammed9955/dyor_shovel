import "./footer.css";
import shovel from "../../assets/shovel.png";
import linkedin from "../../assets/in.svg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import telegram from "../../assets/telegram.svg";
import discord from "../../assets/discord.svg";
import earth from "../../assets/earth.svg";
interface Props {}

const Footer: React.FC<Props> = (props) => {
  return (
    <div className="footer">
      <div className="footer_top">
        <img src={shovel} alt="shovel" className="footer_img" />
        <p>©2021 by DYOR Shovel DAO.</p>
        <br />
        <div className="flex">
          <img src={fb} alt="fb" />
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
          <img src={telegram} alt="telegram" />
          <img src={discord} alt="discord" />
        </div>
        <br />
        <div className="flex">
          <p className="mr-xlg footer_item">Help Center</p>
          <p className=" footer_item">Blog</p>
        </div>
      </div>
      <div className="footer_bottom">
        <div style={{ display: "flex" }}>
          <p style={{ marginRight: "3rem" }}>Terms of Service</p>
          <p>Privacy policy</p>
        </div>
        <br />{" "}
        <div style={{ display: "flex" }}>
          <img src={earth} alt="earth" className="mr-lg" />
          <p>EN</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
