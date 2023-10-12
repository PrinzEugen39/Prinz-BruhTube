import { Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import Button from "../components/Button";

export default function PageHeader() {
  return (
    <div className="flex justify-between gap-10 pt-2 mx-4 mb-6 lg:gap-20">
      <div className="flex items-center flex-shrink-0 gap-4">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <p className="p-1 font-semibold bg-red-700 rounded-full text-slate-100">PrinzYT</p>
        </a>
      </div>
      <form className="justify-center flex-grow hidden gap-4 md:flex">
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="w-full px-4 py-1 text-lg border rounded-l-full shadow-inner outline-none shadow-secondary border-secondary-border focus:border-blue-500"
          />
          <Button className="flex-shrink-0 px-4 py-2 border border-l-0 rounded-r-full border-secondary-border">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div className="flex flex-shrink-0 md:gap-2">
        <Button size="icon" variant="ghost" className="md:hidden">
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}
