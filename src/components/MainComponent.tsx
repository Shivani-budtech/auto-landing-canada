import "../style.css";
import "../font.css";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Home from "./Home.tsx";

function MainComponent() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default MainComponent;
