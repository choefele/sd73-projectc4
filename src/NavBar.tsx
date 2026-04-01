import { CircleUser } from "lucide-react";

function NavBar() {
  return (
    <nav className="grid grid-cols-[1fr_auto_1fr] items-center">
      <p className="font-headline text-2xl font-extrabold tracking-tight text-primary">
        CineLight
      </p>
      <li className="flex gap-10">
        <ul className="text-base border-b border-transparent font-bold">
          Discover
        </ul>
        <ul className="text-base border-b border-transparent hover:border-body">
          My Favourites
        </ul>
      </li>
      <CircleUser className="justify-self-end" />
    </nav>
  );
}

export default NavBar;
