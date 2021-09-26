import "./storePolicies.css";
import { leftImg_description } from "../../data";
import Description from "../../components/Description/Description.component";
import Footer from "../../components/Footer/Footer.component";
import Subscribe from "../../components/Subscribe/Subscribe.component";
import Page from "../../components/Page/Page.component";
interface Props {}

const StroePolicies: React.FC<Props> = () => {
  const { paragraph2, img2 } = leftImg_description;
  const leftTitle = (
    <h1 style={{ fontSize: "3rem", fontWeight: "normal" }}>
      Our <span style={{ color: "#6EE8B1" }}>Store Policies</span>{" "}
    </h1>
  );
  return (
    <Page>
      <div className="aboutus">
        <div style={{ width: "80%", margin: "auto" }}>
          <Description
            title={leftTitle}
            paragraph={paragraph2}
            img={img2}
            rightImg={true}
          />
          <div style={{ margin: "10vh" }} />
        </div>
        <Subscribe />
        <Footer />
      </div>
    </Page>
  );
};

export default StroePolicies;
