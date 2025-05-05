import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Auth App</h1>
      <p>A full-stack application with user authentication</p>
      <div className="buttons">
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
        <Link to="/register" className="btn btn-secondary">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;