import Card from "@/components/Card";
import Chart from "@/components/Chart";
import RightSideBar from "@/components/RightSideBar";
import Transaction from "@/components/Transaction";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex gap-[20px] mt-[20px]">
      <div className="flex-[3] flex flex-col gap-[18px]">
        <div className="flex justify-between gap-[18px]">
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className="flex-[1]">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Dashboard;
