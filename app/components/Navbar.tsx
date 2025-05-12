import { Link } from "@remix-run/react"

export default function Navbar() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-20 gap-10">
        <p className="text-6xl">
          <Link to="/">T A N I T I</Link>
        </p>
        <ul className="flex gap-10 text-xl">
            <Link to="/about">About</Link>
            <Link to="/places-to-stay">Places to Stay</Link>
            <Link to="/things-to-do">Things to Do</Link>
            <Link to="/getting-here">Getting Here</Link>
            <Link to="/plan-trip">PLAN TRIP</Link>
        </ul>
      </div>

    </>
  )
}

