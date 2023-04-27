import {
  StyledDiv,
  StyledLabel,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledImage,
  StyledDivContainer,
} from "./style-form";
import useUserValidation from "../../helpers/useUserValidation";
import ImageSource from "../../assets/images/Rick-and-Morty.png";
import { useEffect } from "react";

const Form = ({ login }) => {
  const [userData, errors, handleInputChange, handleSubmit] =
    useUserValidation();

  useEffect(() => {
    alert(
      "Esta aplicación continua en desarrollo, para logearte utiliza estos datos:\n\nUsuario: admin  | Contraseña: 1password\n\nMuchas Gracias!"
    );
  }, []);

  return (
    <StyledDivContainer portatil>
      <StyledForm portatil tablet phone action="">
        <StyledDiv>
          <StyledLabel htmlFor="">Username:</StyledLabel>
          <StyledInput
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          <span>{errors.username}</span>
        </StyledDiv>
        <StyledDiv>
          <StyledLabel htmlFor="">Contraseña:</StyledLabel>
          <StyledInput
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <span>{errors.password}</span>
        </StyledDiv>
        <StyledDiv>
          <StyledButton onClick={(event) => handleSubmit(event, login)}>
            Login
          </StyledButton>
        </StyledDiv>
      </StyledForm>
      <StyledImage portatil tablet src={ImageSource} alt="image" />
    </StyledDivContainer>
  );
};

export default Form;
