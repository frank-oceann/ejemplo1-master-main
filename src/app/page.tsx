import Image from "next/image";
import styles from "./page.module.css";
import FormularioAlumno from "./FormularioAlumno";
import FormularioAlumnoFinal from "./FormularioAlumnoFinal";
import { TablaAlumnos } from './TablaAlumnos';

export default function Home() {
  return (
    <>
      <TablaAlumnos/>
    </>
  );
}
