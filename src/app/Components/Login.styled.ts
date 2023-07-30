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
   border: 2px solid black;
   padding: 0.6rem 0.9rem;
   border-radius: 0.365rem;
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
`;

export const LoginContainer = styled.div`
   background-color: green;
   width: 2rem;
`;
