import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import regionsud from '../Assets/regionsud.png';
import regionsud2 from '../Assets/regionsud2.png'
import regionsud3 from '../Assets/regionsud3.png'
import fiiver1 from '../Assets/fiiver1.png'
import fiiver2 from '../Assets/fiiver2.png'

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
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: ""
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: ""
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: ""
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
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
            width="1500px"
            height="800px"
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
