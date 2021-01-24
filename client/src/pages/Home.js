import { useSelector } from "react-redux";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import { userInfo } from "../store/slices/user";

const Home = () => {
  const user = useSelector(userInfo);

  return (
    <Section bgcolor="#f7f7f7" color="#333">
      <Container>
        <h2>
          {user ? `Welcome back, ${user.name}!` : "Welcome to the website"}
        </h2>
        <p>{user && user.email}</p>
      </Container>
    </Section>
  );
};

export default Home;
