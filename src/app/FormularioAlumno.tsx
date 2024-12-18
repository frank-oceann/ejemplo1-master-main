'use client'
import React, { useState } from 'react'

export const FormularioAlumno = () => {
    const [nombre, setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [edad, setEdad] = useState(0)
    const [correo, setCorreo] = useState("")
  return (
    <>
    <h1>Formulario inicial</h1>
    <p>Nombre:{nombre}</p>
    <p>Apellido:{apellido}</p>
    <p>Edad:{edad}</p>
    <p>Correo:{correo}</p>
    <form>
        <label>Nombre</label><br></br>
        <input type='text' placeholder='Ingrese nombre'
        onClick={(e)=>{setNombre(e.currentTarget.value)}}/><br/>
        <label>Apellido</label><br></br>
        <input type='text' placeholder='Ingrese Apellido'
        onClick={(e)=>{setApellido(e.currentTarget.value)}}/><br/>
        <label>Edad</label><br></br>
        <input type='number' placeholder='Ingrese Edad'
        onClick={(e)=>{setEdad(e.currentTarget.valueAsNumber)}}/><br/>
        <label>Correo</label><br/>
        <input type='email' placeholder='Ingrese correo'
        onClick={(e)=>{setCorreo(e.currentTarget.value)}}/><br/>
        <button type='button'>Registrar</button>
    </form>
    </>
  )
}
export default FormularioAlumno