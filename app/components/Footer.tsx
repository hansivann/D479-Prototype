import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-10 border-b border-t-2">
        <div className="flex flex-col gap-1">
          <Link to="/about">About</Link>
          <Link to="/places-to-stay">Places to Stay</Link>
          <Link to="things-to-do">Things to Do</Link>
          <Link to="getting-here">Getting Here</Link>
        </div>
        <div className="flex flex-col">
          <Link to="/plan-trip">PLAN TRIP</Link>
          <Link to="/">Contact Us</Link>
        </div>
          <div>
            Social media icons here
          </div>
      </div>
      <div className="text-center p-2 text-gray-400">©{new Date().getFullYear()} TANITIGOV</div>

    </>
  )
}
