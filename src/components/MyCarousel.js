import Carousel from 'react-bootstrap/Carousel';

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="../images/herd.jpg" alt="Herd of cows"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="../images/blackandwhitecow.jpg" alt="Single cow"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="../images/cowfield.jpg" alt="Cows in a field"/>
      </Carousel.Item>
    </Carousel>
  );
}


export default MyCarousel;
