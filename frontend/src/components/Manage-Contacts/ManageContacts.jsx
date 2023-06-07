import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../utils/config';
import 'react-toastify/dist/ReactToastify.css';

const ManageContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/contact`);
        setContacts(res.data);
        setLoading(false);
      } catch (error) {
        toast.error("Error al obtener los contactos");
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!Array.isArray(contacts)) {
    return <p>No hay contactos disponibles</p>;
  }

  return (
    <div>
      <h2>Gestionar Contactos</h2>
      {contacts.length === 0 ? (
        <p>No hay contactos disponibles</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Mensaje</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageContacts;
