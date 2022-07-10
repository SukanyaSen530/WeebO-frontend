import "./App.scss";

import { Navbar, Footer } from "./components";

import AllRoutes from "./Routes/AllRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useScrollToTop from "./hooks/useScrollToTop";

const App = () => {
  return (
    <main>
      <Navbar />
      <section className="main-section">
        <ToastContainer
          position="bottom-center"
          autoClose={1200}
          hideProgressBar
          closeOnClick
          theme="colored"
        />
        <AllRoutes />
      </section>
      <Footer />
    </main>
  );
};

export default App;
