import styled from "styled-components/macro";


export const StyledLoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;

  .textBg {
    background-color: #00008B;
    border-radius: 180px;
    padding: 60px;
    display: flex;
    flex-direction: row;
    text-align: auto;
    margin-bottom: 100px;
  }

  .bannerContainer {
    border-radius: 20px;
    flex-grow: 1;
    position: relative;

    .bannerBackground {
      height: 10%;
      width: 20%;
      object-fit: cover;
      border-radius: 20px;
    }

    .ticket {
      margin-top: 130px;
    }
  }
`;


export const StyledLoginButton = styled.a`
  display: inline-block;
  margin-top: 40px;
  margin-bottom: 50px;

  background-color: var(--green);
  color: var(--white);
  border-radius: var(--border-radius-pill);
  font-weight: 700;
  font-family: Montserrat;
  font-size: var(--fz-lg);
  padding: var(--spacing-sm) var(--spacing-xl);

  &:hover,
  &:focus {
    text-decoration: none;
    filter: brightness(1.1);
  }
`;



