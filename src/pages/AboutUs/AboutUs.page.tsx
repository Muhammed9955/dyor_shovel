import "./aboutus.css";

import { rightImg_description } from "../../data";
import Description from "../../components/Description/Description.component";
import Crew from "../../components/Crew/Crew.component";
import Footer from "../../components/Footer/Footer.component";
import Page from "../../components/Page/Page.component";
interface Props {}

const AboutUs: React.FC<Props> = () => {
  const { paragraph, img } = rightImg_description;
  const rightTitle = (
    <h1 style={{ fontSize: "3rem", fontWeight: "normal" }}>
      About <span style={{ color: "#6EE8B1" }}>DYOR Shovel DAO</span>{" "}
    </h1>
  );
  return (
    <Page>
      <div className="aboutus">
        <div style={{ width: "80%", margin: "auto" }}>
          <Description
            title={rightTitle}
            paragraph={paragraph}
            img={img}
            rightImg={false}
          />
          <div style={{ margin: "10vh" }} />
          <Crew />
          <div style={{ margin: "10vh" }} />
        </div>
        <Footer />
      </div>
    </Page>
  );
};

export default AboutUs;
