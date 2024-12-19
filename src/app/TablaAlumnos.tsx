'use client'
import { obtenerAlumnos } from '@/Firebase/Promesas'
import { IAlumno } from '@/Interfaces/IAlumno';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const TablaAlumnos = () => {
    const [lAlumnos, setlAlumnos] = useState<IAlumno[]>([]);
    const handleObtenerTodo = () =>{
        obtenerAlumnos().then( //si funciona then si no funciona se va a catch
            (alumnos)=>{
                console.log(alumnos)
                setlAlumnos(alumnos)
            }).catch(
                (e)=>{
                    console.log("error")
                })
    }
    useEffect(()=>{
        handleObtenerTodo();
    },[])
  return (
    <>
    <Table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Correo</th>
            </tr>
        </thead>
        <tbody>
                {
                    lAlumnos.map((alumno)=>{return (
                        <tr>
                            <td>{alumno.nombre}</td>
                            <td>{alumno.apellido}</td>
                            <td>{alumno.edad}</td>
                            <td>{alumno.correo}</td>
                            <td>
                                <Button variant='warning'>Actualizar</Button>
                                <Button variant='danger'>Eliminar</Button>
                            </td>
                        </tr>
                    )})
                }
        </tbody>
    </Table>


    {
     lAlumnos.map((alumno)=>{return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>{alumno.nombre} {alumno.apellido}</Card.Title>
            <Card.Text>
                <h6>Datos:</h6>
                <p>Edad: {alumno.edad}</p>
            </Card.Text>
            <Button variant="warning">Actualizar</Button>
            <Button variant='danger'>Eliminar</Button>
            </Card.Body>
        </Card>
     )})
    }
    </>
  )
}
