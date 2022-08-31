import styled from "styled-components/macro";

const StyledLogoutButton = styled.button`
  top: 800px;
  background-color: #faf9f6;
  color: black;
  border-radius: 30px;
  font-weight: 700;
  font-size: var(--fz-lg);
  padding: 40px;
  width: 400px;
  margin: auto;
  margin-bottom: 50px;
  &:hover,
  &:focus {
    text-decoration: none;
    filter: brightness(1.1);
  }
`;

export default StyledLogoutButton;
