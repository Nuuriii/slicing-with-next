"use client";
import IconBrand from "../../../public/icon.svg";
import {
   Wrapper,
   Icon,
   FormContainer,
   Greeting,
   Form,
   UserName,
   Password,
} from "./Login.styled";
import Image from "next/image";

export default function Login() {
   return (
      <Wrapper>
         <Icon>
            <Image src={IconBrand} alt='ikon' />
            <p>ProductName</p>
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
            </Form>
         </FormContainer>
      </Wrapper>
   );
}
