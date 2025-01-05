import React from 'react'

const Navbar = () => {
return (
<nav className="w-full px-8 py-4 text-black  shadow-md bg-[ffffff]">
    <div className="flex items-center justify-between h-16 px-8">
        <div className="flex items-center">
            <div className="container flex items-center space-x-2">
                <img src="medlinklogo.png" alt="Logo" />
                <span className="text-xl font-bold Oakes Grotesk">Medlink</span>
            </div>
        </div>

        <div className="hidden space-x-16 text-lg font-normal space Oakes Grotesk md:flex">
            <div>
                <a href="#">Home</a>
            </div>
            <div>Features</div>
            <div>About Us</div>
            <div>Services</div>
            <div>Contact</div>

        </div>

        <div className="flex items-center">
            <button
                className="py-2 font-medium text-white rounded-xl bg-[#0065FB] px-4 Oakes Grotesk hover:bg-blue-700">
                Get Started
            </button>
        </div>
    </div>
</nav>
);
};

export default Navbar;
