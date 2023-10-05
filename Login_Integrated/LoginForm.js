import "../styles/RegisterFormStyles.css"

function LoginForm(){
    return(
        <div className="from-container">
            <h1>Login</h1>
            <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm