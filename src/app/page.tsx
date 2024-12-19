import Image from "next/image";
import styles from "./page.module.css";
import FormularioAlumno from "./FormularioAlumno";
import FormularioAlumnoFinal from './FormularioAlumnoFinal';
import { TablaAlumnos } from './TablaAlumnos';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <FormularioAlumnoFinal/>
      <TablaAlumnos/>
    </>
  );
}
