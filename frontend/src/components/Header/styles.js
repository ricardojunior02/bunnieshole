import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 290px;

  display: flex;
  justify-content: center;

  background: #ca1240;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  position: relative;
`;

export const Logo = styled.img`
  position: absolute;
  left: 10px;
  top: 10px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #FFF;

  h1 {
    font-size: 64px;
    font-weight: 500;
    line-height: 75px;
  }
  h5 {
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
  }
`;
