import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <h1>Gym-Buddy</h1>
        <Link to="/">
          <h1>Workouts</h1>
        </Link>
        <Link to="">
          <h1>Meal Plans</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
