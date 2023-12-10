import "../Home/style.css";

type TData = {
  name: string;
  designation: string;
  desc: string;
};

const TestimonialCard = ({ desc, designation, name }: TData) => {
  return (
    <>
      <div className="testimonial-card-wrapper">
        <div className="testimonial-card">
          <div className="testimonial-heading-wrapper">
            <p className="subheading">{name}</p>
            <p className="testimonial-sm-text">{designation}</p>
          </div>
          <p className="testimonial-desc">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
