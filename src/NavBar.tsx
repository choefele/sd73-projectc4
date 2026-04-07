import { CircleUser } from "lucide-react";
import { NavLink } from "react-router";

function NavBar() {
  function displayActive({ isActive }: { isActive: boolean }): string {
    return isActive
      ? "text-base border-b border-transparent font-bold cursor-default"
      : "text-base border-b border-transparent hover:border-body";
  }

  return (
    <nav className="grid grid-cols-[1fr_auto_1fr] items-center">
      <p className="font-headline text-2xl font-extrabold tracking-tight text-primary">
        CineLight
      </p>
      <li className="flex gap-10">
        <ul>
          <NavLink to="/" className={displayActive}>
            Discover
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/favourites" className={displayActive}>
            My Favourites
          </NavLink>
        </ul>
      </li>
      <CircleUser className="justify-self-end" />
    </nav>
  );
}

export default NavBar;
