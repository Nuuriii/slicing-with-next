"use client";
import IconBrand from "../../../public/icon.svg";
import { Wrapper, Icon, FormContainer, Greeting } from "./Login.styled";
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
         </FormContainer>
      </Wrapper>
   );
}
