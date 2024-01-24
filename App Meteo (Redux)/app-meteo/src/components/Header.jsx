import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();

  return (
    <div className='d-flex container'>
      
        <div className='col-10 ms-5'>
    <Navbar className="bg-body-transparent">
        <Container>
          <Navbar.Brand href="#home" onClick={() => navigate('/')}>
            <img
              src="https://emojigraph.org/media/apple/sun-behind-small-cloud_1f324-fe0f.png" style={{position:'fixed'}}
              width="45"
              height="45"
              className="d-inline-block align-top ms-5"
              alt="globo"
            /> 
          </Navbar.Brand>
        </Container>
      </Navbar>
      </div>
      <div className='col-2'>
      <Navbar className="bg-body-transparent">
        <Container>
          <Navbar.Brand href="#search" onClick={() => navigate('/SearchBar')} className='text-white'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></Navbar.Brand>
        </Container>
      </Navbar>

      </div>
    

      </div>
  );
}

export default Header;

