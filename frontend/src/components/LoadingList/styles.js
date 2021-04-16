import styled from 'styled-components';

export const Container = styled.li`
  width: 376px;
  height: 258px;
  background: linear-gradient(90deg, #CA1240 0%,  #E5E5E5E5 100%);
  opacity: 0.2;

  margin: 10px 0;
  border-radius: 10px;

  list-style: none;

  animation: shimmer 1.5s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 0.8;
    }
  }
`;

export const Thumbnail = styled.div`
  width: 376px;
  height: 178px;
  border-bottom: 1px solid rgba(202, 18, 64, 0.3);

`;

export const Type = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(90deg, #CA1240 0%,  #E5E5E5E5 100%);

  box-shadow: 0px 4px 4px #CA1240;
  border-radius: 50%;

  margin-top: -25px;
  margin-left: calc(258px  / 2 + 25px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.div`
  padding: 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    

    > strong {
      width: 80px;
      height: 15px;
      background: linear-gradient(90deg, #CA1240 0%,  #E5E5E5E5 100%);
      border-radius: 10px;
    }

    span {
      width: 40px;
      height: 10px;
      background: linear-gradient(90deg, #CA1240 0%,  #E5E5E5E5 100%);
      margin-top: 5px;
      border-radius: 10px;
    }
  }

  > strong {
    width: 60px;
    height: 20px;
    background: linear-gradient(90deg, #CA1240 0%,  #E5E5E5E5 100%);
    border-radius: 10px;
  }
`;


