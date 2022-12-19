import { Index } from "./pages/Index";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./styles/index.scss";
import { Navbar } from "./Components/Navbar/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Index />;
    </>
  );
};

export default App;
