import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import gsap from "gsap";
import Certifcation from "./components/Certifcation";
import Achievement from "./components/Achievement";


var main=document.querySelector("body");
var cursor=document.querySelector("#cursor");


main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duation:1,
        scale:2,
        yoyo:true,
        repeat:-1,
        
        ease:"back.out"
    })
})



function App() {
  return (
    <div>
       <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Resume />
        <Achievement/>
        <Projects />
        <Certifcation/>
        
        
        <Contact/>
      </main>
    </div>
  );
}

export default App;
