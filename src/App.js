

import Header from "./component/header/Header";
import About from "./component/about/About";
import Navbar from "./component/navbar/navbar";
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



function App(){
    return (
        <>
        <Header />
        <Navbar />
        <About />
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>

        </>
    );
}
export default App;