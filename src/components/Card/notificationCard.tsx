import "../Home/style.css";

type Tcard = {
  icon: any;
  about: string;
  isSave: boolean;
};

const NotificationCard = ({ icon, about, isSave }: Tcard) => {
  return (
    <>
      <div className="card">
        <div className="card-top-wrapper">
          {icon}
          {isSave ? (
            <input type="checkbox" className="" checked />
          ) : (
            <p className="mini-text">Save</p>
          )}
        </div>
        <p className="card-heading">{about}</p>
        <input type="text" />
      </div>
    </>
  );
};

export default NotificationCard;
