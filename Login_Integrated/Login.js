import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AssetsImg from "../assets/a3.jpg"
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

function Register(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="heromid"
        heroImg={AssetsImg}
        title=""
        btnClass="hide"
        />
        <LoginForm/>
        <Footer/>
        </>
    )
}

export default Register;