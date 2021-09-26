import "./description.css";
interface Props {
  title: any;
  paragraph: string;
  img: any;
  rightImg: boolean;
}

const Description: React.FC<Props> = ({ title, paragraph, img, rightImg }) => {
  return (
    <div className="">
      {rightImg ? (
        <div className="description">
          <div className="description_content">
            {title}
            <p>{paragraph}</p>
          </div>
          <img src={img} alt="trading" className="description_img" />
        </div>
      ) : (
        <div className="description">
          <img src={img} alt="trading" className="description_img" />
          <div className="description_content">
            {title}
            <p>{paragraph}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
