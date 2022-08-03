import ChangePassword from "../components/ChangePassword";
import classes from "./UserProfile.module.css";
import Nav from "../layout/Navigation/Nav";

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <Nav />
      <h1>Your User Profile</h1>
      <ChangePassword />
    </section>
  );
};

export default UserProfile;
