import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard.jsx';
import CreateTour from '../pages/Tours/CreateTour.jsx';
import EditTour from '../pages/Tours/EditTour.jsx';
import DeleteTour from '../pages/Tours/DeleteTour.jsx';
import ManageTours from '../components/Manage-Tours/ManageTours.jsx';
import ManageUsers from '../components/Manage-Users/ManageUsers.jsx';
import ManageReviews from '../components/Manage-Reviews/ManageReviews.jsx';
import ManageBookings from '../components/Manage-Bookings/ManageBookings.jsx';
import Settings from '../pages/Settings.jsx'

const Routers = () => {
    return (
        <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/manage_tours' element={<ManageTours />} />
            <Route path='/create_tour' element={<CreateTour />} />
            <Route path='/edit_tour/:id' element={<EditTour />} />
            <Route path='/delete_tour/:id' element={<DeleteTour />} />
            <Route path='/manage_users' element={<ManageUsers />} />



            <Route path='/manage_reviews' element={<ManageReviews />} />



            <Route path='/manage_bookings' element={<ManageBookings />} />



            <Route path='/settings' element={<Settings />} />
        </Routes>
    );
};

export default Routers;
