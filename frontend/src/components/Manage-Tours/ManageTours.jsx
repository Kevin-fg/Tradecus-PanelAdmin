import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils/config';
import './manageTours.css';

const ManageTours = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                console.log('Realizando la solicitud GET...');

                const res = await axios.get(`${BASE_URL}/tours`);

                console.log('Respuesta recibida:', res.data); // Imprime los datos recibidos en la respuesta

                setTours(res.data.data); // Modificar esta línea

                setLoading(false);
            } catch (error) {
                console.log('Error al realizar la solicitud GET:', error); // Imprime el error en caso de que ocurra

                setError(error.message);
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!Array.isArray(tours)) {
        return <p>No tours available</p>;
    }

    return (
        <div>
            <h2>Gestionar Tours</h2>
            {tours.length === 0 ? (
                <p>No hay tours disponibles</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Ciudad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tours.map((tour) => (
                            <tr key={tour._id}>
                                <td>{tour.title}</td>
                                <td>{tour.city}</td>
                                <td>
                                    <Link to={`/edit_tour/${tour._id}`} className="btn secondary__btn">
                                        Editar
                                    </Link>
                                    <Link to={`/delete_tour/${tour._id}`} className="btn secondary__btn">
                                        Eliminar
                                    </Link>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <button className="btn secondary__btn">
                <Link to="/create_tour">Crear nuevo tour</Link>
            </button>
        </div>
    );
}
export default ManageTours;
