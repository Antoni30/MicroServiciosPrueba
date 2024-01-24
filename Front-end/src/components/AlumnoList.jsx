import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../App.css'
import { EditableText } from "@blueprintjs/core";

const AlumnoList = () => {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:2024/api/alumnos');
                const jsonData = await response.json();
                setAlumnos(jsonData);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
        const socket = io('http://localhost:2024');
        socket.on('alumno', (data) => {
            setAlumnos([...alumnos, data]);
        });
    }, []);
    return (
        <table className="table-auto border-separate border-spacing-4 border">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {alumnos.map((alumno) => (
                    <tr key={alumno._id}>
                        <td>{alumno._id}</td>
                        <td>
                            <EditableText
                                multiline={false}
                                placeholder="Enter your name..."
                                value={alumno.name}
                                onChange={(value) => console.log(value)}
                            />
                        </td>
                        <td>
                            <EditableText
                                multiline={false}
                                placeholder="Enter your last name..."
                                value={alumno.apellido}
                                onChange={(value) => console.log(value)}
                            />
                        </td>
                        <td>
                            <EditableText
                                multiline={false}
                                placeholder="Enter your age..."
                                value={alumno.edad}
                                onChange={(value) => console.log(value)}
                            />
                        </td>
                        <td>
                            <button className="text-blue-500 hover:underline cursor-pointer" onClick={() => { }}>Update</button>
                            <button className="text-red-500 hover:underline cursor-pointer" onClick={() => { }}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody> 
        </table>
    );
};
export default AlumnoList;