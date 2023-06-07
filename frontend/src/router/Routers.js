import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard.jsx';
import ManageTours from '../components/Manage-Tours/ManageTours.jsx';
import CreateTour from '../pages/Tours/CreateTour.jsx';
import EditTour from '../pages/Tours/EditTour.jsx';
import DeleteTour from '../pages/Tours/DeleteTour.jsx';
import ManageUsers from '../components/Manage-Users/ManageUsers.jsx';
import CreateUser from '../pages/Users/CreateUser.jsx';
import EditUser from '../pages/Users/EditUser.jsx';
import DeleteUser from '../pages/Users/DeleteUser.jsx';
import ManageReviews from '../components/Manage-Reviews/ManageReviews.jsx';
import ManageBookings from '../components/Manage-Bookings/ManageBookings.jsx';
import ManageSubscribes from '../components/Manage-Subscribes/ManageSuscribes.jsx';
import Settings from '../pages/Settings.jsx'
import ManageContacts from '../components/Manage-Contacts/ManageContacts.jsx';
import DeleteReview from '../pages/Reviews/DeleteReview.jsx';

const Routers = () => {
    return (
        <Routes>
            <Route path='/dashboard' element={<Dashboard />} />

            <Route path='/manage_tours' element={<ManageTours />} />
            <Route path='/create_tour' element={<CreateTour />} />
            <Route path='/edit_tour/:id' element={<EditTour />} />
            <Route path='/delete_tour/:id' element={<DeleteTour />} />

            <Route path='/manage_users' element={<ManageUsers />} />
            <Route path='/create_user' element={<CreateUser />} />
            <Route path='/edit_user/:id' element={<EditUser />} />
            <Route path='/delete_user/:id' element={<DeleteUser />} />

            <Route path='/manage_reviews' element={<ManageReviews />} />
            <Route path='/delete_review/:reviewId' element={<DeleteReview />} />



            <Route path='/manage_bookings' element={<ManageBookings />} />



            <Route path='/manage_subscribes' element={<ManageSubscribes />} />
            <Route path='/manage_contacts' element={<ManageContacts />} />
            <Route path='/settings' element={<Settings />} />
        </Routes>
    );
};

export default Routers;
