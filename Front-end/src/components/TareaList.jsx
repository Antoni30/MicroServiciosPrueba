import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../App.css'
import { EditableText } from "@blueprintjs/core";

const TareaList = () => {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:2000/api/tareas');
                const jsonData = await response.json();
                setTareas(jsonData);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
        const socket = io('http://localhost:2000');
        socket.on('tarea', (data) => {
            setTareas([...tareas, data]);
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
                {tareas.map((tarea) => (
                    <tr key={tarea._id}>
                        <td>{tarea._id}</td>
                        <td>
                            <EditableText
                                multiline={false}
                                placeholder="Enter your name..."
                                value={tarea.name}
                                onChange={(value) => console.log(value)}
                            />
                        </td>
                        <td>
                            <EditableText
                                multiline={false}
                                placeholder="Enter description..."
                                value={tarea.description}
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

export default TareaList;