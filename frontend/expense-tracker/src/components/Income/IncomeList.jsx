import React from "react";
import { LuDownload } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";

const IncomeList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Income Sources</h5>
        <button className="card-btn" onClick={onDownload}>
          <LuDownload className="text-base" /> Download
        </button>
      </div>
      <div className="">
        {transactions?.map((income) => (
          <TransactionInfoCard
            key={income.id}
            title={income.source}
            icon={income.icon}
          />
        ))}
      </div>
      ;
    </div>
  );
};

export default IncomeList;
