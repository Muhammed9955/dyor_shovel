import "./crew.css";
import CrewCard from "./CrewCard.component";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";

interface Props {}

const Crew: React.FC<Props> = () => {
  return (
    <div className="crew">
      <p className="crewTitle">
        Meet <span style={{ color: "#6EE8B1" }}> Our Crew</span>
      </p>
      <p style={{ fontSize: "1.1rem" }}>Online Store Professionals</p>
      <br />
      <div className="crewCard_list">
        <CrewCard
          name="Ash Marcus"
          job="Quality Assurance Manager"
          img={user2}
        />
        <CrewCard
          name="Charlie McMann"
          job="Customer Service Representative"
          img={user1}
        />
        <CrewCard name="Jordan Parker" job="Merchandise Buyer" img={user3}  />
      </div>
    </div>
  );
};

export default Crew;
