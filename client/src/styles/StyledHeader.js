import styled from "styled-components";

const StyledHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
font-family: 'Montserrat';
font-style: normal;


.welcome{
  font-weight: 600;
  font-size: 36px;
  letter-spacing: -0.02em;
  color: #FFFF;
  tex-align: center;
  margin-bottom: 100px;
  margin-top: 100px;


}


.header__img{
  
  border-radius: 50%;
  margin-right: 30px;
  margin-left: 5%;
}

.header__img_playlist{
  margin-bottom: 20px;
  margin-top: 40px;
}
.profileHeader{
  background-color: #00008B;
  border-radius: 180px;
  padding: 80px;
  display: flex;
  flex-direction: row;
  text-align: auto;
  margin-bottom: 100px;
  width: 100%;
  width: fit-content;
  

}




.tabList {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;


  space-between: flex-start;
  grid-gap: 12px;
  margin-bottom: 80px;

  .tabItem {
    background: #ffffff;
    border: 1px solid #ffffff;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 200px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    color: #667085;
    cursor: pointer;
    padding: 8px 24px;

    &.active {
      border: 1px solid #101828;
      filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
      border-radius: 200px;
      color: #101828;

    }
  }
}



}
`;

export default StyledHeader;
