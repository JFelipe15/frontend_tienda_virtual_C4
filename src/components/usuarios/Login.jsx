import LogoLogin from "../../img/LoginImagenes/Login Desayunos.png"

function LoginView(){
    return (
    <div className="w-25 mx-auto p-3">
        <body class="text-center">
            
            <main class="form-signin w-100 m-auto">
            <form>
                <img 
                    class="mb-4"
                    align = "center" 
                    src = {LogoLogin} 
                    alt="" 
                    width="300" 
                    height="200"/>
            <div className="container border-3px">

                <h1 class="h3 mb-3 fw-normal">Login</h1>
            
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>
            
                <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                </label>
                </div>
                <div className="p-3">
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
                </div>
                <div className="p-3">
                    <button class="w-100 btn btn-lg btn-secondary" type="submit">Registrarse</button>
                </div>
                </div>
            </form>
            </main>
        </body>
    </div>
    );
};

export default LoginView;