import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import regionsud from '../Assets/regionsud.png';
import regionsud2 from '../Assets/regionsud2.png';
import regionsud3 from '../Assets/regionsud3.png';
import fiiver1 from '../Assets/fiiver1.png';
import fiiver2 from '../Assets/fiiver2.png';
import fiiver3 from '../Assets/fiiver3.png';
import oovy1 from '../Assets/Oovy1.png';
import oovy2 from '../Assets/oovy2.png';
import oovy3 from '../Assets/oovy3.png';

export default function ProjectCarousel() {
 const data = [
    {
      image: `${regionsud}`,
      caption: ""
    },
    {
      image: `${regionsud2}`,
      caption: ""
    },
    {
      image: `${regionsud3}`,
      caption: ""
    },
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
    },
    {
      image: `${oovy1}`,
      caption: ""
    },
    {
      image: `${oovy2}`,
      caption: ""
    },
    {
      image: `${oovy3}`,
      caption: ""
    }
  ];


  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="750px"
            height="320px"
            radius="10px"
            automatic={true}
            dots={true}
            pauseIconSize="40px"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
          />
        </div>
      </div>
    </div>
  );
}
