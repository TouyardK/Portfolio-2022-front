import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export const CardProjects = styled.div`
height: 200px;
width: 200px;
`;

export const BodyProjects = styled.h1`
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

const titleproject = styled.h1``


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
            <CardProjects>
                {listProject.map((listing) => (
                <BodyProjects>
                {listing.title}
                </BodyProjects>
                ))}
            </CardProjects>
      );
}