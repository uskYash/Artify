import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AssetsImg from "../assets/a3.jpg"
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";

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
        <RegisterForm/>
        <Footer/>
        </>
    )
}

export default Register;