import { CircleUser } from "lucide-react";

function NavBar() {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center">
      <p className="font-headline">CineLight</p>
      <li className="flex gap-10">
        <ul>Discover 123</ul>
        <ul>My Favourites</ul>
      </li>
      <CircleUser className="justify-self-end" />
    </div>
  );
}

export default NavBar;
