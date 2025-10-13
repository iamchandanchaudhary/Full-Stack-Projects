import Login from "./Login";
import { useForm } from "react-hook-form";

function Navbar() {
    return (
        <section className="flex justify-between items-center w-full h-16 px-10 bg-blue-500 text-[#fff]">

            <ul className="flex justify-center items-center gap-5">
                <li><a className="hover:bg-[#fff] hover:text-[#000] px-3 py-1 rounded-md hover:drop-shadow-md transition-all duration-300 ease-in-out">Home</a></li>
                <li><a className="hover:bg-[#fff] hover:text-[#000] px-3 py-1 rounded-md hover:drop-shadow-md transition-all duration-300 ease-in-out">Contacts</a></li>
                <li><a className="hover:bg-[#fff] hover:text-[#000] px-3 py-1 rounded-md hover:drop-shadow-md transition-all duration-300 ease-in-out">Services</a></li>
                <li><a className="hover:bg-[#fff] hover:text-[#000] px-3 py-1 rounded-md hover:drop-shadow-md transition-all duration-300 ease-in-out">About</a></li>
                <li><a className="hover:bg-[#fff] hover:text-[#000] px-3 py-1 rounded-md hover:drop-shadow-md transition-all duration-300 ease-in-out">Profile</a></li>
            </ul>

            <button className="btn hover:bg-[#fff] hover:text-[#111] px-4 py-1 rounded-md drop-shadow-md" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button>
            <Login />
        </section>
    );
}

export default Navbar;