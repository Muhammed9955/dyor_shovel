import shovel from "../../assets/shovel.png";
import Mainbutton from "../../components/MainButton/MainButton.component";
import Mint from "../../components/Mint/Mint";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className="home_header">
      <div className="">
        <p className="home_title">
          <span style={{ color: "#6EE8B1" }}>Mint</span> Your Shovel <br /> to
          access <br /> the
          <span className="dao">DAO</span>
        </p>
        <Mint />
      </div>
      <img src={shovel} alt="shovel" className="home_headerImg" />
    </div>
  );
};

export default Header;
