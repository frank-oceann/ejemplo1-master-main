'use client'
import { obtenerAlumnos } from '@/Firebase/Promesas'
import { IAlumno } from '@/Interfaces/IAlumno';
import React, { useEffect, useState } from 'react'

export const TablaAlumnos = () => {
    const [lAlumnos, setlAlumnos] = useState<IAlumno[]>([]);
    const handleObtenerTodo = () =>{
        obtenerAlumnos().then( //si funciona then si no catch
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
    <table>
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
                        </tr>
                    )})
                }
        </tbody>
    </table>
    </>
  )
}
