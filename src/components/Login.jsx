import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="login-main">
      <div className="login-left">
        <img src={"https://i.imgur.com/esKP4yV.png"} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
          </div>
          <div className="login-center">
            <h2>Bienvenido</h2>
            <p>Ingresa tus datos</p>
            <form>
              <input type="email" placeholder="Usuario" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Contraseña" />
                {showPassword ? <FaEyeSlash onClick={() => { setShowPassword(!showPassword) }} /> : <FaEye onClick={() => { setShowPassword(!showPassword) }} />}

              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Recordar por 30 dias
                  </label>
                </div>
                <a href="/" className="forgot-pass-link">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="login-center-buttons">
               <Link to="/home">
               <button type="button">Iniciar Sesión</button>
               </Link>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            ¿Aún no tienes una cuenta? <Link to="/register">Registrate Aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
