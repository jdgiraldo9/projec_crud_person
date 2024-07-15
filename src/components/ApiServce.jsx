import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'


const ApiServce = ({setPerson}) => {

    const fetchData =async()=>{

        try {
            const response = await axios.get("https://api.randomuser.me");

            const data = response.data;
            console.log(data)
            const userData ={
                name: data.results[0].name.first,
                role: 'pruebas',
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
