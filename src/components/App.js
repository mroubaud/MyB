import React from "react";
import GeneralStyle from "../css/general.css";
import Style from "../css/style.css";
import Queries from "../css/queries.css";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import Cta from "./cta/Cta";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";
import Header from "./header/Header";

// const App = () => {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <Services />
//       <Projects />
//       <Cta />
//       <Footer />
//     </>
//   );
// };

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Services />
        <Projects />
        <Cta />
        <Footer />
      </div>
    );
  }
}

export default App;
