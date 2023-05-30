import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../utils/config';
import '../../styles/tour/editTour.css';
import { useNavigate } from "react-router-dom";

const EditTour = () => {

    const { id } = useParams();

    const navigate = useNavigate(); // Hook useNavigate

    const handleBack = () => {
        navigate("/manage_tours");
    };

    const [tourData, setTourData] = useState({
        title: '',
        city: '',
        address: '',
        distance: '',
        photo: '',
        desc: '',
        reviews: [],
        price: '',
        maxGroupSize: '',
        featured: false,
    });

    useEffect(() => {
        const fetchTour = async () => {
            const res = await axios.get(`${BASE_URL}/tours/${id}`);
            console.log(res.data);  // Add this line
            setTourData(res.data.data);  // Here, use res.data.data instead of res.data
        };
        fetchTour();
    }, [id]);
    

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setTourData({
            ...tourData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`${BASE_URL}/tours/${id}`, tourData);
            alert('Tour actualizado exitosamente!');
        } catch (error) {
            alert('Ocurrió un error al actualizar el tour');
        }
    };

    return (
        <div className="EditTour">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={tourData.title}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="city"
                value={tourData.city}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="address"
                value={tourData.address}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="distance"
                value={tourData.distance}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="photo"
                value={tourData.photo}
                onChange={handleChange}
                required
            />
            <textarea
                name="desc"
                value={tourData.desc}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="price"
                value={tourData.price}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="maxGroupSize"
                value={tourData.maxGroupSize}
                onChange={handleChange}
                required
            />
            <label>
                Featured:
                <input
                    name="featured"
                    type="checkbox"
                    checked={tourData.featured}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Actualizar tour" />
        </form>
        <button onClick={handleBack}>Regresar</button>

        </div>

    );
};

export default EditTour;
