import React from 'react';
import SupportList from './SupportList/SupportList';
import { Route } from 'react-router';
import ProcessingPage from './ProcessingPage';

const ServicePage: React.FC = () => {
    return (
        <>
            {/* Navigation Bar */}
            <Route exact path="/service" component={SupportList} />
            <Route exact path="/service/:id" component={ProcessingPage} />
        </>
    );
}
export default ServicePage;