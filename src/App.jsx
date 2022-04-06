import "./App.scss";

import { Navbar, Footer } from "./components";

import AllRoutes from "./Routes/AllRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <main>
      <Navbar />
      <section className="main-section">
        <ToastContainer />
        <AllRoutes />
      </section>
      <Footer />
    </main>
  );
};

export default App;
