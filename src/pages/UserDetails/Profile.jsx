import { useEffect, useState } from "react";

import { getUserDetails } from "../../services";
import { useAuthContext } from "../../context";
import { Loader } from "../../components";
import userLogo from ".././../assets/user.png";

import "./profile.scss";

const Profile = () => {
  const [loading, setLoading] = useState(false);

  const {
    authState: {
      user: { details },
    },
    authDispatch,
  } = useAuthContext();

  useEffect(() => {
    if (!details) getUserDetails(authDispatch, setLoading);
  }, [details]);

  if (loading) {
    return <Loader size="sm" />;
  }

  return (
    <div className="profile-section">
      <div className="center-aligned b-margin-sm">
        <img src={userLogo} className="profile-section__img" />
      </div>
      <p className="profile-section__info">
        <span>Full Name </span> <span>: {details?.fullName}</span>
      </p>
      <p className="profile-section__info">
        <span>User Name </span> <span>: {details?.userName} </span>
      </p>
      <p className="profile-section__info">
        <span>Email </span>
        <span>: {details?.email}</span>
      </p>
    </div>
  );
};

export default Profile;
