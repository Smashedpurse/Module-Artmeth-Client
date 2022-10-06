import "../App.css";
import Footer from "../components/Footer";
import Body from "../components/Body"
import About from "../components/About";

function HomePage() {
  return (
    <div className="App">
       <Body/>
       <About/>
       <Footer/>
    </div>
  );
}

export default HomePage;
