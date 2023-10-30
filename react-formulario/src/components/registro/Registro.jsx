import React, { useState } from "react";
import Formulario from "../formulario/Formulario";
import Alert from "../alert/Alert.jsx";
import SocialButton from "../SocialButton/SocialButton";
import {
  faLinkedinIn,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Card } from "react-bootstrap";

export const Registro = () => {
  const [errors, setErrors] = useState({ mensaje: "", color: "" });

  return (
    <Card className="w-50">
      <h1>Crea tu cuenta</h1>
      <div className="rrssButtons">
        <SocialButton icon={faFacebook} />
        <SocialButton icon={faGithub} />
        <SocialButton icon={faLinkedinIn} />
      </div>
      <p>O usa tu e-mail para registrarte:</p>
      <Formulario setErrors={setErrors}></Formulario>
      <div className="alertDiv">
        {errors.mensaje != "" && (
          <Alert mensaje={errors.mensaje} color={errors.color}></Alert>
        )}
      </div>
    </Card>
  );
};

export default Registro;
