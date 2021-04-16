import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;

    padding: 0 15px;

    display: flex;
    flex-direction: column;
    position: relative;
`;

export const Search = styled.div`
  height: 120px;
  margin-top: -60px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  z-index: 2;

  position: absolute;
  left: 0;
  right: 0;
`;

export const InputDiv = styled.form`
  width: 503px;
  height: 66px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  background: #FFF;
  

  input {
    border: none;
    width: 70%;
    height: 50%;

    font-size: 18px;
    font-weight: 500;
    color: #A1A1A1;
  }

  input::placeholder {
    padding: 5px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
  }

  button {
    border: none;
    background: transparent;
  }
`;

export const SelectDiv = styled.div`
  padding: 0 15px;
  label, select, option {
    color: #CA1240;
  }

  label {
    padding: 5px;
  }

  select {
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    background: transparent;
    padding: 3px;
    margin-left: 5px;
  }

  option {
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }

  position: absolute;
  right: 0;
  bottom: 0;
`;

export const Main = styled.main`
  margin-top: 100px;

  ul {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
  }
`;


