import "./App.scss";

import { Navbar, Footer } from "./components";

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
