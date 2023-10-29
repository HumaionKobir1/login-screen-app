import React, { useState } from 'react';
import styled from 'styled-components';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';
import Lottie from 'lottie-react';
import animationData from "../../../public/login.json"


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleAgreeTerms = () => {
    setAgreeTerms(!agreeTerms);
  };
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
                <InputField type="text" id="username" placeholder="Enter your user"/>
            </FormGroup>
            <FormGroup>
                <InputLabel>Password</InputLabel>
                <PasswordInputContainer>
                <PasswordInput
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Enter your password"
                />
                <ShowPasswordIcon onClick={togglePasswordVisibility}>
                    {showPassword ? <RiEyeCloseLine /> : ""}
                </ShowPasswordIcon>
                </PasswordInputContainer>
            </FormGroup>

            <ForgetInline>
            <FormGroup>
            <CheckboxLabel>
              <RememberMeCheckbox
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMe}
              />
              Remember Me
            </CheckboxLabel>
          </FormGroup>
          <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>

          </ForgetInline>

          <FormGroup>
            <CheckboxLabel>
              <AgreeTermsCheckbox
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={handleAgreeTerms}
              />
              <TermsLink href="#">I agree to the <OrangeLink>Terms and Conditions</OrangeLink></TermsLink>
            </CheckboxLabel>
          </FormGroup>
            <SubmitButton type="submit">Login</SubmitButton>
                <RegisterLink href="#">Don't have an account? <OrangeLink>Register Here</OrangeLink></RegisterLink>
            </Form>
        </LoginForm>
        </Container>
    </div>
  );
};


const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
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
  @media only screen and (min-width: 768px) and (max-width: 1080px){
    flex-direction: column;
   }
`;

const LoginForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  padding: 40px 20px;
  margin-right: 100px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  @media (max-width: 768px) {
    flex: 0;
    height: full;
    margin-right: 0;
    padding: 40px 20px;
    width: 100%;
    box-shadow: none;
  }
  @media only screen and (min-width: 820px) and (max-width: 1080px){
    margin-right: 50px;
   }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;
const ForgetInline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -15px;
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
  pointer-events: none;
`;

const ForgotPasswordLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 14px;
  display: block;
  color: orange;
  margin-top: -40px;
  margin-right: 10px;
`;


const SubmitButton = styled.button`
  width: 70%;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 15%;
  &:hover {
    background-color: #2980b9;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;
const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RememberMeCheckbox = styled.input`
  margin-right: 5px;
`;

const AgreeTermsCheckbox = styled.input`
  margin-right: 5px;
`;
const OrangeLink = styled.span`
  color: orange;
  text-decoration: none;
`;

const TermsLink = styled.a`
  color: #666;
  text-decoration: none;
`;

const RegisterLink = styled.a`
  color: #666;
  text-decoration: none;
  text-align: center;
  margin-top: 10px;
  display: block;
`;
export default LoginPage;
