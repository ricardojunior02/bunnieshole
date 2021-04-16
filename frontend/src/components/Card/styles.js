import styled from 'styled-components';


export const Container = styled.li`
  width: 376px;
  height: 258px;
  background: #FFF;

  margin: 10px 0;
  border-radius: 10px;

  list-style: none;
`;

export const Thumbnail = styled.div`
  width: 376px;
  height: 178px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Type = styled.div`
  width: 50px;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px ${props => props.shadow};
  border-radius: 50%;

  margin-top: -25px;
  margin-left: calc(258px  / 2 + 25px);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: auto;
  }
`;

export const Footer = styled.div`
  padding: 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }
`;


