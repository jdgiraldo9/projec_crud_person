import React from 'react'
import PropTypes from 'prop-types';

const Person = ({id,img,name,role,handleEdit,handleDelete}) => {
  return (
    <div className='col'>
      <div className='card' style={{width: "18rem"}}>
        <img className='card-img-top' src={img} alt={name} />
        <div className='card-body'>
          <h4 className='card-title'>{name}</h4>
          <p className='card-text'>{role}</p>
        </div>
        <div className='container mb-4 text-center'>
          <button className='btn btn-success me-2' onClick={handleEdit}>Editar</button>
          <button className='btn btn-danger' onClick={() => handleDelete(id)} data-bs-toggle="modal" data-bs-target="#deleteModal">Eliminar</button>
        </div>
      </div>
    </div>
  )
}

Person.prototype={

  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func
}

export default Person
