import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'


const ApiServce = ({setPerson}) => {

    const [jobs]= useState([
        {
            id:1,
            job:"Desarrollador de Software"
        },
        {
            id: 2,
            job: "Ingeniero de Redes"
        },
        {
            id: 3,
            job: "Analista de Datos"
        },
        {
            id: 4,
            job: "Especialista en Ciberseguridad"
        },
        {
            id: 5,
            job: "Administrador de Bases de Datos"
        },
        {
            id: 6,
            job: "Ingeniero DevOps"
        },
        {
            id: 7,
            job: "Arquitecto de Soluciones"
        },
        {
            id: 8,
            job: "Diseñador UX/UI"
        },
        {
            id: 9,
            job: "Especialista en Inteligencia Artificial"
        },
        {
            id: 10,
            job: "Gestor de Proyectos de TI"
        }
    ]);

    function getRandomJob() {
        const randomId = Math.floor(Math.random() * 10) + 1;
        const job = jobs.find(job => job.id === randomId);
        return job;
    }

    const fetchData =async()=>{

        try {
            const response = await axios.get("https://api.randomuser.me");

            const data = response.data;
            console.log(data)
            const userData ={
                name: data.results[0].name.first,
                role: getRandomJob().job,
                img: data.results[0].picture.medium
            };

            setPerson(userData);


        } catch (error) {
            console.error("Error al consultar los dtos de la API: ", error);
        }


    }

  return (
    <div>
       <button type="submit" className='btn btn-secondary my-3 text-center' onClick={fetchData} >Crear Aletorio</button>
    </div>
  )
}

ApiServce.prototype={

    setPerson: PropTypes.func

};


export default ApiServce
