import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import AlumnoList from './components/AlumnoList';
import MateriaList from './components/MateriaList';
import TareaList from './components/TareaList';
import './App.css'

const ENDPOINT = 'http://localhost:2024';

function App() {
  const [setAlumnos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const AlumnosResponse = await fetch('{ENDPOINT}/api/alumnos');
        const jsonData = await AlumnosResponse.json();
        setAlumnos(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    const socket = io(ENDPOINT);
    socket.on('newAlumno', (newAlumno) => {
      setAlumnos((prevAlumno) => [...prevAlumno, newAlumno]);
    });
  }, []);

  return (
    <div className='grid grid-rows-4 grid-flow-col gap-4'>
      <div className="col">
        <h1>Lista de Alumnos</h1>
        <AlumnoList />        
      </div>
      <div className="col">
        <h1>Lista de Materias</h1>
        <MateriaList />       
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1>Lista de Tareas</h1>
          <TareaList />  
      </div>

    </div>
  )
}

export default App
