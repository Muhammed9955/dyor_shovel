import "./Customer_Testimonial.css";
import customer from "../../assets/customer.png";
import icon from "../../assets/icon.svg";

interface Props {
  title?: boolean;
  img: any;
  name: string;
  msg: string;
}

const Customer_Testimonial: React.FC<Props> = ({ title, img, name, msg }) => {
  return (
    <div className="Customer_Testimonial">
      {title && (
        <h1 style={{ fontWeight: "normal", fontSize: "3rem" }}>
          Customer <span style={{ color: "#6EE8B1" }}>Testimonial</span>{" "}
        </h1>
      )}
      <div className="customer_content">
        <img src={img} alt="customer" className="customerImg" />
        <div className="customer_msg">
          <p>{msg}</p>
          <p>
            <strong>{name} </strong>
          </p>
        </div>
      </div>
      <img src={icon} alt="icon" className="customer_icon" />
    </div>
  );
};

export default Customer_Testimonial;
