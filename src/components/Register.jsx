import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Register = () => {
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
            <p>Registrate Aqui</p>
            <form>
              <input type="user" placeholder="Usuario" />
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Contraseña" />
                {showPassword ? <FaEyeSlash onClick={() => { setShowPassword(!showPassword) }} /> : <FaEye onClick={() => { setShowPassword(!showPassword) }} />}
              </div>

              <div className="login-center-options">
              </div>
              <div className="login-center-buttons">
                <button type="button">Registrarte</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            ¿Ya tienes una cuenta? <Link to="/">Ingresa Aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
