import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="user-info">
        <h2>Welcome {user?.name}</h2>
        <p>Email: {user?.email}</p>
      </div>
      <div className="dashboard-content">
        <h3>Protected Content</h3>
        <p>This page is only accessible to authenticated users.</p>
      </div>
    </div>
  );
};

export default Dashboard;