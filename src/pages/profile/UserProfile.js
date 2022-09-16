import ChangePassword from "../auth/forgotPassword/ChangePassword";
import classes from "./UserProfile.module.css";
import DashboardNav from "../../layout/DashBoardNav/DashboardNav";

const UserProfile = () => {
  return (
    <section>
      <DashboardNav />
      <div className={classes.profile}>
        <h1>Your User Profile</h1>
        <ChangePassword />
      </div>
    </section>
  );
};

export default UserProfile;
