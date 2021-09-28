import "./home.css";
import Navbar from "../../components/Navbar/Navbar.component";
import Header from "./Header";
import Description from "../../components/Description/Description.component";
import {
  rightImg_description,
  leftImg_description,
  customerTest,
} from "../../data";
import Customer from "../../components/Customer_Testimonial/Customer_Testimonial.component";
import Crew from "../../components/Crew/Crew.component";
import Subscribe from "../../components/Subscribe/Subscribe.component";
import Footer from "../../components/Footer/Footer.component";

const Home = () => {
  const { paragraph, img } = rightImg_description;
  const { paragraph2, img2 } = leftImg_description;
  const rightTitle = (
    <h1 style={{ fontSize: "3rem", fontWeight: "normal" }}>
      About <span style={{ color: "#6EE8B1" }}>DYOR Shovel DAO</span>{" "}
    </h1>
  );
  const leftTitle = (
    <h1 style={{ fontSize: "3rem", fontWeight: "normal" }}>
      Our <span style={{ color: "#6EE8B1" }}>Store Policies</span>{" "}
    </h1>
  );
  return (
    <div className="">
      <div className="home_top">
        <div className="home_Top__body">
          <Navbar />
          <Header />
        </div>
      </div>
      <div className="home_bottom">
        <div className="home_bottom_body">
          <Description
            title={rightTitle}
            paragraph={paragraph}
            img={img}
            rightImg={false}
          />
          <div style={{ margin: "10vh" }} />
          <Description
            title={leftTitle}
            paragraph={paragraph2}
            img={img2}
            rightImg={true}
          />
          <Customer
            title={true}
            img={customerTest.imgs[0]}
            name={customerTest.names[0]}
            msg={customerTest.msg}
          />
          <Crew />
        </div>
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
