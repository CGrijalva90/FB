import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import { useSelector } from "react-redux";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";
import "./styles.css";
import CreatePost from "../../components/createPost";
import SendVerification from "../../components/home/sendVerification";

const Home = () => {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className="home">
      <Header />
      <LeftHome user={user} />
      <div className="home_middle">
        <Stories />
        {user.verified === false && <SendVerification user={user} />}

        <CreatePost user={user} />
      </div>
      <RightHome user={user} />
    </div>
  );
};

export default Home;
