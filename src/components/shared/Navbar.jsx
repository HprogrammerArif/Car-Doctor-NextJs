import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearch } from "react-icons/io5";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];

  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <Link href={"/"}>
            <Image alt="logo" src="/assets/logo.svg" width={100} height={60} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                className="font-semibold hover:text-primary duration-300"
                href={item.path}
                key={item.path}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex space-x-3 items-center">
          <IoSearch className="text-xl"/>
          <IoCartOutline className="text-xl"/>
          <a className="btn btn-outline btn-primary px-6">Appointment</a>
          <Link href={"/login"} className="btn btn-primary px-4">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
