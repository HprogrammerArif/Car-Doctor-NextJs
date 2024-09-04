"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const page = () => {

  const handleLogin = async (e) => {
    e.preventDefault();
  }

  return (
    <div className="container mx-auto px-24 py-24">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            width={540}
            height={540}
            alt="login image"
          />
        </div>
        <div className="border-2 p-12">
          <h3 className="text-3xl text-primary text-center mb-12">Sign In</h3>
          <form onSubmit={handleLogin} action="">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="text"
              name="password"
              placeholder="Your Password"
              className="input input-bordered w-full"
            />
            <br />
            <button type="submit" className="btn btn-primary mt-5 w-full">
              Sign In
            </button>
          </form>
          <div className="my-8 text-center">
            <h6>or sign in with</h6>
            <div className="flex gap-3 justify-center items-center mt-8">
              <button className="btn  items-center text-green-700 flex justify-center">
                <FaGoogle />
              </button>
              <button className="btn  items-center text-primary flex justify-center">
                <FaGithub />
              </button>
              <button className="btn  items-center text-primary flex justify-center">
                <FaFacebook />
              </button>
            </div>
            <h6 className="text-center mt-8">
              Not have account?{" "}
              <Link className="text-primary font-semibold" href={"/signup"}>
                Sign Up
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
