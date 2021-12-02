import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-carousel-minimal';
import fiiver1 from '../../Assets/fiiver1.png';
import fiiver2 from '../../Assets/fiiver2.png';
import fiiver3 from '../../Assets/fiiver3.png';
import mac from '../../Assets/mac.svg'

const MacImg = styled.img`
position: absolute;
@media only screen and (max-width: 425px){
width: 32vh;
height: 46vh;
}
@media screen and (min-width: 426px) and (max-width: 768px){
height: 49vh;
width: 40vh;
}
@media only screen and (min-width: 768px){
height: 50vh;
width: 60vh;
}
`;

const CarouselAdjust = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 36vh;
width: 80vh;
@media only screen and (max-width: 425px){
width: 30vh;
height: 15vh;
padding-top: 9vh;
}
@media screen and (min-width: 426px) and (max-width: 768px){
height: 5vh;
width: 38vh;
padding-top: 15vh;
}
@media only screen and (min-width: 768px){
height: 36vh;
width: 80vh;
}
`;

const ContainerMacAndCarousel = styled.div`
display: flex;
justify-content: center;
height: 60vh;
width: 85vh;
@media only screen and (max-width: 425px){
width: 45vh;
height: 45vh;
}
@media screen and (min-width: 426px) and (max-width: 768px){
height: 50vh;
width: 40vh;
}
@media only screen and (min-width: 768px){
height: 60vh;
width: 85vh;
}
`;

export default function CarouselFiiver() {
 const data = [
    {
      image: `${fiiver1}`,
      caption: ""
    },
    {
      image: `${fiiver2}`,
      caption: ""
    },
    {
      image: `${fiiver3}`,
      caption: ""
    }
  ];


  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 0px"
        }}>
          <ContainerMacAndCarousel>
          <MacImg src={mac} alt="mac" />
          <CarouselAdjust>
          <Carousel
            data={data}
            time={2000}
            width="470px"
            height="270px"
            radius="10px"
            automatic={true}
            dots={true}
            thumbnails={false}
          />
          </CarouselAdjust>
          </ContainerMacAndCarousel>
        </div>
      </div>
    </div>
  );
}
