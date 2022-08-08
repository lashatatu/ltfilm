import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";

const Profile = () => {
  const { user } = useSelector(userSelector);
  return (
    <div>
      <p>{user.username}</p>
    </div>
  );
};

export default Profile;
