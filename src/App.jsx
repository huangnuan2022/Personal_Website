import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>

      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="About">
        Parallax
      </section>
      <section>
        About
      </section>

      <section id="Experience">
        Parallax
      </section>
      <section>
        Experience
      </section>

      <section id="Project">
        Parallax
      </section>
      <section>
        Project
      </section>
      <section id="Contact">
        Contact
      </section>
      
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
