import React, { useContext, useState } from "react";
import ProfilePhotoSelector from "./Inputs/ProfilePhotoSelector";
import Input from "./Inputs/Input";
import toast from "react-hot-toast";
import { UserContext } from "../context/UserContext";
import uploadImage from "../utils/uploadImage";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPath";

const UpdateUserForm = ({ onClose }) => {
  const { user, updateUser } = useContext(UserContext);
  const [profilePic, setProfilePic] = useState(user?.profileImageUrl || null);
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!fullName.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    setLoading(true);
    try {
      let profileImageUrl = user?.profileImageUrl;
      if (typeof profilePic === "object" && profilePic !== null) {
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl;
      }
      const response = await axiosInstance.put(API_PATHS.AUTH.UPDATE_USER, {
        fullName,
        profileImageUrl,
      });
      if (response.data && response.data.user) {
        updateUser(response.data.user);
        toast.success("Profile Updated Successfully");
        onClose();
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
        <div className="grid grid-col-1">
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Full Name"
            placeholder="First Name Last Name"
            type="text"
          />
        </div>
        <button
          className="btn-primary mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleUpdate}
          disabled={loading}
        >
          {loading ? "Updating..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
