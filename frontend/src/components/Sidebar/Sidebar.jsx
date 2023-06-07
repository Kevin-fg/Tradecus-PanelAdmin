// Sidebar.jsx
import React from 'react';
import './sidebar.css'; // Importar los estilos

function Sidebar() {
    return (
        <div className="sidebar">
            <h3 className="sidebar__title">Menú</h3>
            <ul className="sidebar__links">
                <li className="sidebar__item"><a href="/dashboard">Dashboard</a></li>
                <li className="sidebar__item"><a href="/manage_tours">Tours</a></li>
                <li className="sidebar__item"><a href="/manage_users">Users</a></li>
                <li className="sidebar__item"><a href="/manage_reviews">Reviews</a></li>
                <li className="sidebar__item"><a href="/manage_bookings">Bookings</a></li>
                <li className="sidebar__item"><a href="/manage_subscribes">Subscribes</a></li>
                <li className="sidebar__item"><a href="/manage_contacts">Contacts</a></li>
                <li className="sidebar__item"><a href="/settings">Configuración</a></li>
                {/* Agrega más enlaces según sea necesario */}
            </ul>
        </div>
    );
}

export default Sidebar;
