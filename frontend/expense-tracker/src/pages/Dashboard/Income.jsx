import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import IncomeOverview from "../../components/Income/IncomeOverview";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPath";
import Modal from "../../components/Modal";

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [openDeleteAlert, setOpenDeleteAlert] = useState({
  //   show: false,
  //   data: null,
  // });

  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);

  // Get All Income
  const fetchIncomeDetails = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `${API_PATHS.INCOME.GET_ALL_INCOME}`
      );
      if (response.data) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.log("Somehing went wrong. Please try later", error);
    } finally {
      setLoading(false);
    }
  };

  // // Handle Add Income
  // const handleAddIncome = async (income) => {
  //   const response = await axiosInstance.add();
  // };

  // // Delete Income
  // const deleteIncome = async (id) => {};

  // // Handle Download Income
  // const handleDownloadIncomeDetails = async () => {};

  useEffect(() => {
    fetchIncomeDetails();
    return () => {};
  }, []);

  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1">
          <IncomeOverview
            transactions={incomeData}
            onAddIncome={() => setOpenAddIncomeModal(true)}
          />
        </div>
        <Modal
          isOpen={openAddIncomeModal}
          onClose={setOpenAddIncomeModal}
          title="Add Income"
        ></Modal>
      </div>
    </DashboardLayout>
  );
};

export default Income;
