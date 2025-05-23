import { Link } from "react-router-dom";
import { Home, Heart } from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img src="/logo.png" alt="logo" className="hidden md:block w-32 max-w-full h-auto"/>
          <img src="/mobile-logo.png" alt="mobile-logo" className="block md:hidden w-16 max-w-full h-auto"/>
        </div>
        <nav className="w-full">
          <ul className="flex flex-col gap-6">
            <li>
              <Link to="/" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg">
                <Home size={"24"}/>
                <span className="font-bold hidden md:block">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg">
                <Heart size={"24"}/>
                <span className="font-bold hidden md:block">Favorites</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  return (<div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden">
    <Link to={"/"}><Home size="24" className="cursor-pointer"/></Link>
    <Link to={"/favorites"}><Heart size="24" className="cursor-pointer"/></Link>
  </div>)
};
