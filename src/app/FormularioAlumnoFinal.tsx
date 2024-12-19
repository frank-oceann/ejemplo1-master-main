'use client'
import { registrarAlumno } from '@/Firebase/Promesas'
import { iSAlumno } from '@/InitialStates/ISAlumno'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export const FormularioAlumnoFinal=() => {
    const[alumno,setAlumno] = useState(iSAlumno)
    const handleAlumno = (estado:string,valor:string)=>{
        if(estado=="nombre" || estado=="apellido" || estado=="edad" || estado=="correo"){
        setAlumno({...alumno,[estado]:valor})
        }
    }
    const handleRegistrar = ()=>{
      console.log("Le diste al boton")
      alert("Vas a registrar")
      console.log(alumno)
      registrarAlumno(alumno).then(()=>{
            //then hacer algo si promesa se cumple
      }).catch((e)=>{
            //catch si promesa falla
            alert("algo fallo")
      })
    }

  return (
    <>
    <h1>Formulario Final</h1>
    <p>Nombre:{alumno.nombre}</p>
    <p>Apellido:{alumno.apellido}</p>
    <p>Edad:{alumno.edad}</p>
    <p>Correo:{alumno.correo}</p>

    <Form>
    <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese nombre" 
            name='nombre'
            onChange={(e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}
            />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Apellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingrese Apellido" 
            name='apellido'
            onChange={(e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}
            />
      </Form.Group>  

      <Form.Group className="mb-3" controlId="Correo">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Ingrese Correo" 
            name='correo'
            onChange={(e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}
            />
      </Form.Group>  

      <Form.Group className="mb-3" controlId="Edad">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" placeholder="Ingrese Edad" 
            name='edad'
            onChange={(e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}
            />
      </Form.Group>  
      <Button variant='warning' type='button'
            onClick={handleRegistrar}>Registrar</Button>
    </Form>
    </>
  )
}
export default FormularioAlumnoFinal