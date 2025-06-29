import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // controls rendering
  const boxRef = useRef(null);

  // Open animation when showMenu is true
  useEffect(() => {
    if (showMenu && boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { x: 400, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [showMenu]);

  const handleMenuClick = () => {
    if (!menuOpen) {
      // Opening
      setShowMenu(true);
      setMenuOpen(true);
    } else {
      // Closing animation
      if (boxRef.current) {
        gsap.to(boxRef.current, {
          x: 400,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            setShowMenu(false);
            setMenuOpen(false);
          },
        });
      }
    }
  };

  return (
    <div>
      {/* MOBILE NAVBAR */}
      <div className="flex flex-col justify-end items-center px-20 py-6 font-light md:hidden">
        <button
          onClick={handleMenuClick}
          className="text-2xl p-3 rounded-full absolute right-4 top-4 z-50"
        >
          {menuOpen ? <IoMdClose /> : <CiMenuFries />}
        </button>

        {/* Menu with animation */}
        {showMenu && (
          <div
            ref={boxRef}
            className="fixed top-0 left-0 bg-white h-screen w-screen z-40"
          >
            <ul className="flex flex-col items-center gap-4 mt-20 px-10 text-lg">
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>SERVICES</li>
              <li>GALLERY</li>
              <li>CONTACT US</li>
              <Link to="/bookthevenue">
                <li className="bg-green-950 text-white px-8 py-3 rounded-full">
                  Book the Venue
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>

      {/* DESKTOP NAVBAR */}
      <div className="md:flex justify-between items-center mx-40 pt-4 hidden text-md">
        <ul className="md:flex gap-8">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SERVICES</li>
          <li>GALLERY</li>
        </ul>
        <h1 className="text-3xl">ClassyPictures</h1>
        <ul className="flex gap-8 items-center">
          <li>PACKAGES</li>
          <li>CONTACT US</li>
          <Link to="/bookthevenue">
            <li className="bg-green-950 text-white px-8 py-3 rounded-full">
              Book the Venue
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
