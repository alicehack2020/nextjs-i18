import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex w-full justify-between px-4">
      <div className="p-2 bg-gray-400 rounded-md text-black">
        <Link href="/">HOME</Link>
      </div>
      <div className="p-2 bg-gray-400 rounded-md">
        <Link href="/post" className="">
          POST
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
