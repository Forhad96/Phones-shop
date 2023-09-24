import { NavLink } from "react-router-dom";

const Footer = () => {
    const links = (
        <>
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <NavLink to="/" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-sky-500 font-extrabold text-lg" : ""
      }>
              Home
            </NavLink>
          </li>
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <NavLink to="/favorites" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-sky-500 font-extrabold text-lg" : ""
      }>
              Favorites
            </NavLink>
          </li>
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <NavLink to="/contact" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-sky-500 font-extrabold text-lg" : ""
      }>
              Contact
            </NavLink>
          </li>
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <NavLink to="/login" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-sky-500 font-extrabold text-lg" : ""
      }>
              Login
            </NavLink>
          </li>
        </>
      );

  return (
    <div>
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
        <p className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
          © 2023 Material Tailwind
        </p>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            {links}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
