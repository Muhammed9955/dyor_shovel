import "./meetTheTeam.css";
import { leftImg_description } from "../../data";
import Footer from "../../components/Footer/Footer.component";
import Page from "../../components/Page/Page.component";
import CrewDescripiton from "../../components/Crew/CrewDescripiton";
import CrewCard from "../../components/Crew/CrewCard.component";
import user1 from "../../assets/user1.png";
import user3 from "../../assets/user3.png";
interface Props {}

const MeetOurCrew: React.FC<Props> = () => {
  const { paragraph2, img2 } = leftImg_description;
  const leftTitle = (
    <h1 style={{ fontSize: "3rem", fontWeight: "normal" }}>
      Our <span style={{ color: "#6EE8B1" }}>Store Policies</span>{" "}
    </h1>
  );
  return (
    <Page>
      <div style={{ width: "80%", margin: "auto" }}>
        <h1 className="teamTitle">
          Meet <span style={{ color: "#6EE8B1" }}>Our Crew</span>{" "}
        </h1>
        <p style={{ textAlign: "center", margin: 0 }}>
          Online Store Professionals
        </p>
        <div style={{ margin: "10vh 0" }} />
        <CrewDescripiton />
        <div style={{ margin: "20vh" }} />
        <div className="CrewCard_container">
          <CrewCard
            name="Charlie McMann"
            job="Customer Service Representative"
            img={user1}
            width="50%"
          />
          <CrewCard
            name="Ash Marcus"
            job="Quality Assurance Manager"
            img={user3}
            width="50%"
          />
        </div>
        <div style={{ margin: "20vh" }} />
      </div>
      <Footer />
    </Page>
  );
};

export default MeetOurCrew;
