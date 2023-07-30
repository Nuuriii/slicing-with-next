"use client";
import IconBrand from "../../../public/icon.svg";
import { Wrapper, Icon } from "./Login.styled";
import Image from "next/image";

export default function Login() {
   return (
      <Wrapper>
         <Icon>
            <Image src={IconBrand} alt='ikon' />
            <p>ProductName</p>
         </Icon>
      </Wrapper>
   );
}
