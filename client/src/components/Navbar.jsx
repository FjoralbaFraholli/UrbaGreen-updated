import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className="bg-green-500 bg-opacity-90 p-6 w-full font-serif">
      <div className="flex items-center justify-around">
        <Link to="/"><span className="text-3xl font-bold text-white">UrbaGreen</span></Link>
        <div className="flex gap-3 text-lg">
          <Link to="/blog"><button className="bg-white px-4 py-1 rounded-sm hover:bg-gray-50">Blog</button></Link>
          <Link to="/contact-us"><button className="bg-white px-4 py-1 rounded-sm hover:bg-gray-50">Contact</button></Link>
          <Link to="/info"><button className="bg-white px-4 py-1 rounded-sm hover:bg-gray-50">Info</button></Link>
        </div>
        <div className='flex gap-2'>
          <input type="text" placeholder="We are the world" className="px-4 py-1 rounded-sm text-lg" />
          <button onClick={handleLogout} className="bg-white px-4 py-1 rounded-sm hover:bg-gray-50">
            <Link to="/" className="hover:no-underline">
              <p className="text-black">
                Logout
              </p>
            </Link>
          </button>

          {/* {token ? (
            <>
              <button onClick={handleLogout} className="bg-white px-4 py-1 rounded-sm hover:bg-gray-50">
                <Link to="/" className="hover:no-underline">
                  <p className="text-black">
                    Logout
                  </p>
                </Link>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-btn">Login</Link>
            </>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
