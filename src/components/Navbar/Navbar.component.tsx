import { useState } from "react";
import "./navbar.css";
import shovel from "../../assets/shovel.png";
import { FiShoppingCart } from "react-icons/fi";
import { RiMenu4Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui";
import styled from "styled-components";

interface Props {
  bg?: any;
}
const ConnectWallet = styled(WalletMultiButton)`
  background-color: transparent !important;
  font-weight: 500 !important;
  border: 1px solid gray !important;
  &:hover {
    color: rgb(110, 232, 177);
  }
`;
const Navbar: React.FC<Props> = ({ bg }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div className={bg ? "navBg navbar" : "navbar"}>
        <img src={shovel} alt="shovel" className="nav_img" />
        <ConnectWallet />
        <div className="routes">
          <Link to="/" className="mr-xlg navItem">
            home
          </Link>
          <Link to="/aboutUs" className="mr-xlg  navItem">
            about us
          </Link>
          <Link to="/faq" className="mr-xlg  navItem">
            faq
          </Link>
          <Link to="/stroePolicies" className="mr-xlg  navItem">
            Store Policies
          </Link>
          <Link to="/" className="mr-xlg  navItem">
            contact
          </Link>
          <Link to="/testimonials" className="mr-xlg  navItem">
            Testimonials{" "}
          </Link>
          <Link to="/meetOurCrew" className="mr-xlg  navItem">
            Meet The Team
          </Link>
        </div>
        <FiShoppingCart className="nav_icon" />
      </div>
      <div className="nav_mob">
        <img src={shovel} alt="shovel" className="nav_mob__img" />
        <div className="">
          <FiShoppingCart className="nav_icon" />

          {show ? (
            <IoMdClose className="navMob_icon" onClick={() => setShow(!show)} />
          ) : (
            <RiMenu4Fill
              className="navMob_icon"
              onClick={() => setShow(!show)}
            />
          )}
        </div>
        <div className={show ? "nav_menu active" : "nav_menu"}>
          <div
            style={{
              padding: "1rem 2rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link to="/" className="navMob_item">
              home
            </Link>
            <Link to="/aboutUs" className="navMob_item">
              about us
            </Link>
            <Link to="/faq" className="navMob_item">
              faq
            </Link>
            <Link to="/stroePolicies" className="navMob_item">
              Store Policies
            </Link>
            <Link to="/" className="navMob_item">
              contact
            </Link>
            <Link to="/testimonials" className="navMob_item">
              Testimonials{" "}
            </Link>
            <Link to="/meetOurCrew" className="navMob_item">
              Meet The Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
