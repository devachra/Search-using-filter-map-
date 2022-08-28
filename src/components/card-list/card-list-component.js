import Card from "./card";
import "./card-list.css";

const Cardlist = ({ filterData }) => {
  return (
    <div className="card-list">
      {filterData.map((user) => {
        return <Card user={user} key={user.id} />;
      })}
    </div>
  );
};

export default Cardlist;
