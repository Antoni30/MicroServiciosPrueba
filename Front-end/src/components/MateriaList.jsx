import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../App.css'
import { EditableText } from "@blueprintjs/core";

const MateriaList = () => {
    const [materias, setMaterias] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/materias');
                const jsonData = await response.json();
                setMaterias(jsonData);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
        const socket = io('http://localhost:3000');
        socket.on('materia', (data) => {
            setMaterias([...materias, data]);
        });
    }, []);
    return (
        <table className="table-auto border-separate border-spacing-4 border">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Subject</th>
                    <th>Description</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {materias.map((materia) => (
                    <tr key={materia._id}>
                        <td>{materia._id}</td>
                        <td>
                            <EditableText
                                multiline={false}
                                placeholder="Enter your name..."
                                value={materia.nameSubject}
                                onChange={(value) => console.log(value)}
                            />
                        </td>
                        <td>
                            <EditableText
                                multiline={false}
                                placeholder="Enter your last name..."
                                value={materia.descriptionSubject}
                                onChange={(value) => console.log(value)}
                            />
                        </td>
                        <td>
                            <button className="text-blue-500 hover:underline cursor-pointer">Update</button>
                            <button className="text-red-500 hover:underline cursor-pointer">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MateriaList;