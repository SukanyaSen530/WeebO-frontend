import "./App.scss";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import AllRoutes from "./components/Routes/AllRoutes";

const App = () => {
  return (
    <main>
      <Navbar />
      <section className="main-section">
        <AllRoutes />
      </section>
      <Footer />
    </main>
  );
};

export default App;
