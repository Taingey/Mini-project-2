import React from "react";
import UserTables from "../tables/UserTables";

const Dashboard: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <h1 className="font-bold text-center mt-6 mb-6 text-[25px]">User Data</h1>

      <UserTables
        id={1}
        name="taingey"
        email="taingey@gmail.com"
        image="cat.jpg"
        price={0}
        desc= "null"
      />
    </div>
  );
};

export default Dashboard;
