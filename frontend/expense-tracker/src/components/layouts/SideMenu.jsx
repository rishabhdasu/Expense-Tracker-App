import React, { useContext, useState } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../Cards/CharAvatar";
import { LuPencil } from "react-icons/lu";
import { useEffect } from "react";
import Modal from "../Modal";
import UpdateUserForm from "../UpdateUserForm";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [openUserModal, setOpenUserModal] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [user]);

  const navigate = useNavigate();
  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };
  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20">
      <div className="flex items-center justify-center gap-3 mt-3 mb-7">
        <div className="relative w-20 h-20 cursor-pointer group rounded-full">
          <div className="w-full h-full rounded-full overflow-hidden border border-slate-200">
            {user?.profileImageUrl && !imageError ? (
              <img
                src={user?.profileImageUrl || ""}
                alt="Profile Image"
                className="w-20 h-20 bg-slate-400 rounded-full object-cover transition-transform duration-500 hover:scale-110"
                onError={() => {
                  setImageError(true);
                }}
              />
            ) : (
              <CharAvatar
                fullName={user?.fullName}
                width="w-20"
                height="h-20"
                style="text-xl"
              />
            )}
          </div>
          <button
            className="cursor-pointer absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-primary transition-all duration-300"
            onClick={() => setOpenUserModal(true)}
          >
            <LuPencil size={14} />
          </button>
        </div>
      </div>
      <h5 className="text-gray-950 font-medium leading-6 mb-6 text-center">
        {user?.fullName || ""}
      </h5>
      {SIDE_MENU_DATA.map((item, index) => {
        const isHighlighted = hoveredMenu
          ? hoveredMenu === item.label
          : activeMenu === item.label;
        return (
          <button
            key={`menu_${index}`}
            className={`w-full flex items-center gap-4 text-[15px] transition-all duration-700 ease-in-out ${
              isHighlighted
                ? "text-white bg-primary shadow-md"
                : "text-gray-600 hover:bg-gray-50"
            } py-3 px-6 rounded-lg mb-3`}
            onClick={() => {
              handleClick(item.path);
            }}
            onMouseEnter={() => setHoveredMenu(item.label)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <item.icon className="text-xl" />
            {item.label}
          </button>
        );
      })}
      <Modal
        isOpen={openUserModal}
        onClose={() => setOpenUserModal(false)}
        title="Edit Profile"
      >
        <UpdateUserForm onClose={() => setOpenUserModal(false)} />
      </Modal>
    </div>
  );
};

export default SideMenu;
