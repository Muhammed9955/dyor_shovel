// import { leftImg_description } from "../../data";
import Footer from "../../components/Footer/Footer.component";
import Page from "../../components/Page/Page.component";
import Customer from "../../components/Customer_Testimonial/Customer_Testimonial.component";
import { customerTest } from "../../data";
interface Props {}

const Testimonials: React.FC<Props> = () => {
  // const { paragraph2, img2 } = leftImg_description;
  // const leftTitle = (
  //   <h1 style={{ fontSize: "3rem", fontWeight: "normal" }}>
  //     Our <span style={{ color: "#6EE8B1" }}>Store Policies</span>{" "}
  //   </h1>
  // );
  return (
    <Page>
      <div style={{ width: "80%", margin: "auto" }}>
        <h1
          style={{
            fontWeight: "normal",
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          Customer <span style={{ color: "#6EE8B1" }}>Testimonial</span>{" "}
        </h1>
        <Customer
          img={customerTest.imgs[0]}
          name={customerTest.names[0]}
          msg={customerTest.msg}
        />
        <Customer
          img={customerTest.imgs[1]}
          name={customerTest.names[1]}
          msg={customerTest.msg}
        />
        <Customer
          img={customerTest.imgs[2]}
          name={customerTest.names[2]}
          msg={customerTest.msg}
        />
      </div>
      <Footer />
    </Page>
  );
};

export default Testimonials;
