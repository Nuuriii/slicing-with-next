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
