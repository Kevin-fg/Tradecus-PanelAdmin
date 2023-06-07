import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../utils/config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteReview = () => {
  const { reviewId } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/manage_reviews');
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASE_URL}/review/${reviewId}`);
      toast.success('Revisión eliminada exitosamente!');
      navigate('/manage_reviews');
    } catch (error) {
      toast.error('Ocurrió un error al eliminar la revisión');
    }
  };

  return (
    <div className="DeleteReview">
      <h2>¿Estás seguro de que quieres eliminar esta revisión?</h2>
      <button onClick={handleDelete}>Eliminar revisión</button>
      <button onClick={handleBack}>Regresar</button>
    </div>
  );
};

export default DeleteReview;
