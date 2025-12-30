import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function withAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    
  let token = localStorage.getItem("token");
    

    if(token){
      return <><Outlet /></>
    }else{
      return <Navigate to={"/login"} replace/>
    }
    
  
}

const ProtectedDashboard = withAuth;
export default ProtectedDashboard



  