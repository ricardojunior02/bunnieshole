
import {Container, Logo, Main} from './styles';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="Bunnies Hole" />
      <Main>
        <h1>Bunny video browser</h1>
        <h5>Encontre os melhores videos aqui</h5>
      </Main>
    </Container>
  )
}


export default Header;