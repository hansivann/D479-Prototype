import { NavLink } from '@remix-run/react';

export default function Navbar() {
  const NAVSTYLE = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-amber-500' : '';
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 p-20">
        <p className="text-6xl">
          <NavLink to="/" className={NAVSTYLE}>
            T A N I T I
          </NavLink>
        </p>
        <ul className="flex gap-10 text-xl">
          <li>
            <NavLink to="/about" className={NAVSTYLE}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/places-to-stay" className={NAVSTYLE}>
              Places to Stay
            </NavLink>
          </li>
          <li>
            <NavLink to="/things-to-do" className={NAVSTYLE}>
              Things to Do
            </NavLink>
          </li>
          <li>
            <NavLink to="/getting-here" className={NAVSTYLE}>
              Getting Here
            </NavLink>
          </li>
          <li>
            <NavLink to="/plan-trip" className={NAVSTYLE}>
              PLAN TRIP
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
