import "./faq.css";
import Footer from "../../components/Footer/Footer.component";
import Page from "../../components/Page/Page.component";
import help from "../../assets/help.png";
import Card from "../../components/Card/Card.component";
interface Props {}

const FAQ: React.FC<Props> = () => {
  return (
    <Page marginTop={false}>
      <div className="faq_contianer">
        <h1>Help Center</h1>
        <p>Everything You Need to Know</p>
      </div>
      <div style={{ margin: "10vh 0" }} />
      <div className="cards">
        <Card
          question="What are the payment options?"
          answer="Enter your answer here. Be thoughtful, write clearly and concisely, and consider adding written as well as visual examples. Go over what you’ve written to make sure that if it was the first time you were visiting the site, you’d understand your answer."
        />
        <Card
          question="What is your return policy?"
          answer="Enter your answer here. Be thoughtful, write clearly and concisely, and consider adding written as well as visual examples. Go over what you’ve written to make sure that if it was the first time you were visiting the site, you’d understand your answer."
        />
        <Card
          question="Do you offer gift cards? "
          answer="Enter your answer here. Be thoughtful, write clearly and concisely, and consider adding written as well as visual examples. Go over what you’ve written to make sure that if it was the first time you were visiting the site, you’d understand your answer."
        />
      </div>
      <div style={{ margin: "10vh 0" }} />
      <Footer />
    </Page>
  );
};

export default FAQ;
