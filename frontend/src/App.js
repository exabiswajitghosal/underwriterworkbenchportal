import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import DashboardLayoutDesign from './SidebarComponents/DashboardLayout';
import AuditTrailLayoutDesign from './SidebarComponents/AuditTrailLayout';
import AccountLayoutDesign from './SidebarComponents/AccountInfoLayout';
import LayoutDesign from './components/Layout';
import SubmissionLayoutDesign from './SidebarComponents/SubmissionLayout';
import DocumentScreen from './SidebarComponents/DocumentScreen';
import ClearanceScreen from './SidebarComponents/ClearanceScreen';

const App = () => {
 
  return(
    <Router>
      <Routes>
        {/* Set LayoutDesign as the main layout */}
        <Route
            exact
            path="/"
            element={
              <>
                <LayoutDesign/>
              </>
            }
          />

          {/* Define other routes for different screens */}
          <Route path="dashboard" element={<DashboardLayoutDesign/>} />
          <Route path="submission" element={<SubmissionLayoutDesign />} />
          <Route path="audit-trail" element={<AuditTrailLayoutDesign/>} />
          <Route path="accountinfo" element={<AccountLayoutDesign/>} />
          <Route path="documentscreen" element={<DocumentScreen/>} />
          <Route path="clearancescreen" element={<ClearanceScreen/>} />
          
          
          
       
      </Routes>
    </Router>
    
   
  );
};
export default App;