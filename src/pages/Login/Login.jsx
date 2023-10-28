import React, { useState } from 'react';
import styled from 'styled-components';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';
import Lottie from 'lottie-react';
import animationData from "../../../public/login.json"


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>

        <Container>
        <ImageContainer>
            <Lottie animationData={animationData}></Lottie>
        </ImageContainer>
        <LoginForm>
            <h2>Login</h2>
            <Form>
            <FormGroup>
                <InputLabel>Username</InputLabel>
                <InputField type="text" id="username" />
            </FormGroup>
            <FormGroup>
                <InputLabel>Password</InputLabel>
                <PasswordInputContainer>
                <PasswordInput
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                />
                <ShowPasswordIcon onClick={togglePasswordVisibility}>
                    {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                </ShowPasswordIcon>
                </PasswordInputContainer>
                <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
            </FormGroup>
            <SubmitButton type="submit">Login</SubmitButton>
            </Form>
        </LoginForm>
        </Container>
    </div>
  );
};
const Title = styled.h1`
  margin-bottom: 20px;
  
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(to right, #3494e6, #ec6ead);
  /* Modify the background to your preference */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex: 0;
    height: 40vh;
    padding-top: 50px;
  }
`;

const LoginForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    flex: 0;
    padding: 40px 20px;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
`;

const InputField = styled.input`
  width: calc(100% - 30px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const PasswordInputContainer = styled.div`
  position: relative;
`;

const PasswordInput = styled(InputField)``;

const ShowPasswordIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666;
  pointer-events: none; /* Disable pointer events to prevent typing in the icon area */
`;

const ForgotPasswordLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 14px;
  display: block;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

export default LoginPage;
