import styled from "styled-components";

export const Wrapper = styled.div`
   import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: Lexend, sans;
   justify-content: center;
   height: 100vh;
`;

export const Icon = styled.div`
   display: flex;
   margin: 0 0 1rem 0;
   flex-direction: column;
   align-items: center;
   p {
      padding: 0;
      margin: 0;
      font-weight: 900;
      color: #f22f46;
   }
`;

export const FormContainer = styled.div`
   box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
   padding: 0.6rem 0.9rem 1.5rem 0.9rem;
   border-radius: 0.365rem;
   width: 20rem;
`;

export const Greeting = styled.div`
   display: flex;
   padding: 0.9rem 1rem;
   gap: 0.2rem;
   flex-direction: column;
   align-items: center;
   p {
      padding: 0;
      margin: 0;
   }
   h1 {
      padding: 0;
      font-size: 1rem;
      margin: 0;
      text-align: center;
   }
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 0.8rem;
`;

export const UserName = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.2rem;
   input {
      border-radius: 0.26rem;
      border: 1px solid #dedede;
      padding: 0.5rem 0.4rem;
   }
   input:placeholder {
      color: #red;
   }
   input:focus {
      outline: solid;
      outline-width: 2px;
      outline-color: black;
   }
`;

export const Password = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.2rem;
   input {
      border-radius: 0.26rem;
      border: 1px solid #dedede;
      padding: 0.5rem 0.4rem;
   }
   input:placeholder {
      color: #red;
   }
   input:focus {
      outline: solid;
      outline-width: 2px;
      outline-color: black;
   }
`;

export const LoginContainer = styled.div`
   width: 100%;
   button {
      border-radius: 0.2rem;
      width: 100%;
      border: none;
      background-color: #0024de;
      color: white;
      padding: 0.5rem 0;
      font-weight: 400;
      font-family: Lexend, sans;
   }
`;

export const Hr = styled.div`
   width: 100%;
   text-align: center;
   border-bottom: 1px solid rgb(190, 185, 185);
   line-height: 0.1em;
   margin: 10px 0 10px;
   span {
      background: #fff;
      padding: 0 10px;
      color: #393537;
   }
`;

export const Google = styled.div`
   width: 100%;
   button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      border-radius: 0.2rem;
      width: 100%;
      border: none;
      background-color: #fff;
      color: #393537;
      padding: 0.5rem 0;
      font-weight: 400;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      font-family: Lexend, sans;
   }
`;

//
