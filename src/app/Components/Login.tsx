"use client";
import IconBrand from "../../../public/icon.svg";
import GoogleIcon from "../../../public/Google.svg";
import {
   Wrapper,
   Icon,
   FormContainer,
   Greeting,
   Form,
   UserName,
   Password,
   LoginContainer,
   Hr,
   Google,
} from "./Login.styled";
import Image from "next/image";

export default function Login() {
   return (
      <Wrapper>
         <Icon>
            <div>
               <Image src={IconBrand} alt='ikon' />
            </div>
            <div>
               <p>ProductName</p>
            </div>
         </Icon>
         <FormContainer>
            <Greeting>
               <p>Welcome back! 👋</p>
               <h1>Login to Your account</h1>
            </Greeting>
            <Form>
               <UserName>
                  <label htmlFor='name'>Username</label>
                  <input type='text' placeholder='Enter username' />
               </UserName>
               <Password>
                  <label htmlFor='password'>Password</label>
                  <input type='password' placeholder='Enter password' />
               </Password>
               <LoginContainer>
                  <button>LOGIN</button>
               </LoginContainer>
               <Hr>
                  <span>Or</span>
               </Hr>
               <Google>
                  <button>
                     <Image src={GoogleIcon} alt='Google icon' />
                     <span>Login with Gmail</span>
                  </button>
               </Google>
            </Form>
         </FormContainer>
      </Wrapper>
   );
}
