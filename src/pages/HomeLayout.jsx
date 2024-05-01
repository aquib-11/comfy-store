import { Outlet, useNavigation } from "react-router-dom"
import { Header, LoadingAnimation, Navbar } from "../components";


const HomeLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  return (
    <div>
      <Header />
      <Navbar />
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </div>
  );
}

export default HomeLayout