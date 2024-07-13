import React, { useState } from 'react'
import Person from './Person';
import PropTypes from 'prop-types';

const People = ({persons,setPersons}) => {

  const[editingId,setEdetingId] = useState(null);
  const[editedPerson,setEditedPerson]= useState ({
    name:"",
    role:"",
    img:""
  });
  const [isEditing,setEditing]= useState(false);
  const [personToDelete,setPersonToDelate] = useState (null);

  const handleChange= (e)=>{
    e.preventDefault();
    const{name,value} = e.target;

    setEditedPerson (prevState =>({
      ...prevState,
      [name]: value

    }));

  }

  const handleEdit = (id,e)=>{

    setEdetingId(id);
    setEditing(true);

    const personToEdit= persons.find(person => person.id === id );

    setEditedPerson({...personToEdit})
  }

  const handlSave = (e)=>{

    e.preventDefault();
    const updatePerson = isEditing ? persons.map(person => person.id === editingId ? editedPerson : person):[...persons,{id : persons.length+1,...editedPerson}];

    setPersons(updatePerson);
    setEditing(false);
    setEdetingId(null);
    setEditedPerson({name:'',role:'',img:''});
  }

  const handleDelete = (id)=>{

    setPersonToDelate(id);

  }
  const confirmDelete=()=>{
    setPersons(persons.filter(person=>person.id != personToDelete));
    setPersonToDelate(null);
  };

  const cancelDelete = ()=>{

    setPersonToDelate(null);

  }

  return (
    <div>
      <h2 className='text-center my-4'>IT Team</h2>
      <div className='container'>
        <div className='row d-flex flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3'>
          {persons.map((person) => {
            return (
              <div key={person.id}>
                <Person
                  id={person.id}
                  name={person.name}
                  img={person.img}
                  role={person.role}
                  handleEdit={() => handleEdit(person.id)}
                  handleDelete={() => handleDelete(person.id)}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* Renderizar el formulario para crear o editar los datos de una persona */}
      <div className='container mt-4 row p-2'>
        <h2 className='text-center my-4'> {isEditing ? "Editar": "Crear"} Persona</h2>
        <form className='border border-dark rounded p-4'>
          <div className="mb-3">
            <label className="form-label">Nombres</label>
            <input
              type="text"
              name="name"
              value={editedPerson.name}
              className="form-control"
              aria-describedby="nombre"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Cargo</label>
            <input
              type="text"
              name="role"
              value={editedPerson.role}
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Avatar</label>
            <input
              type="text"
              name="img"
              value={editedPerson.img}
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className='btn btn-primary' onClick={handlSave}>{isEditing ? "Editar": "Crear"}</button>
        </form>
      </div>
      <div id="deleteModal" className='modal fade' tabIndex="-1">
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Confirmar Eliminación</h4>
              <button type="button" className='btn-close' data-bs-dismiss="modal" aria-label="Close" onClick={cancelDelete}></button>
            </div>
            <div className='modal-body'>
              <p>¿Estás seguro de eliminar a {persons.find(person => person.id === personToDelete)?.name}</p>
            </div>
            <div className='modal-footer'>
              <button type="button" className='btn btn-secondary' data-bs-dismiss="modal" onClick={cancelDelete}>Cancelar</button>
              <button type="button" className='btn btn-danger' data-bs-dismiss="modal" onClick={confirmDelete}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

People.prototype={

  persons: PropTypes.array,
  setPersons: PropTypes.func
}

export default People
