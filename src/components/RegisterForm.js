import "../styles/RegisterFormStyles.css"

function RegisterForm(){
    return(
        <div className="from-container">
            <h1>Register Now !!</h1>
            <form>
                <input type="text" placeholder="Name"/>
                <select id="Art" name="Art">
                <option value="" selected disabled>Select Art field</option>
                <option value="Painting">Painting</option>
                <option value="Origami">Origami</option>
                <option value="Sculpture">Sculpture</option>
                <option value="Pottery">Pottery</option>
                </select>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default RegisterForm