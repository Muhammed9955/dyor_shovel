import Navbar from "../Navbar/Navbar.component";
import navBg from "../../assets/navBg.png";

interface Props {
  marginTop?: boolean;
}

const Page: React.FC<Props> = ({ children, marginTop = true }) => {
  return (
    <div style={{ background: "#8b00cf" }}>
      <Navbar bg={navBg} />
      {marginTop && <div style={{ margin: "10vh" }} />}
      {children}
    </div>
  );
};

export default Page;
