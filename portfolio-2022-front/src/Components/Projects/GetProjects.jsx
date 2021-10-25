import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


export const BodyProjects = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: white;
border: solid 1px;
border-radius: 35px;
background-color: black;
height: 250px;
width: 1000px;
`;

const TitleProjects = styled.h2``;


export default function GetProjects () {
    const [listProject, setListProject] = useState([]);

    const RequestProject = async () => {
        await axios
          .get('http://localhost:8080/api/projects')
          .then((res) => res.data)
          .then((data) => {
            setListProject(data);
            console.log(data);
          });
      };
      useEffect(() => {
        RequestProject();
      }, []);



      return(
            <>
                {listProject.map((listing) => (
                <BodyProjects>
                  <TitleProjects>
                    {listing.title}
                  </TitleProjects>
                </BodyProjects>
                ))}
            </>
      );
}