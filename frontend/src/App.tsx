import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import golden from './imagenes/img/golden_cachorro.jpg';
import jack from './imagenes/img/jack_russell.jpg';
import poo from './imagenes/img/poodles_blanco.jpg';


function App() {

    return (
        <div>
            <header>
                <h1> Petex</h1>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Inicio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Quienes somos </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Contactanos </Nav.Link>
                    </Nav.Item>


                </Nav>
            </header>
            <body>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={golden}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Golden Retriver </h3>
      <p>Un perro muy actvo</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={jack}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Jack Russel </h3>
      <p>perros que aprenden rapido, su hiperactividad los describe </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={poo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Poodles</h3>
      <p>Perros acompañantes y de mal genio .</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            </body>
            <footer>

            <h3>Contacta</h3>
             <p>Pide tu cita</p>
             <p>Pide tu presupuesto</p>

            </footer>

        </div>
    )
};

export default App;
