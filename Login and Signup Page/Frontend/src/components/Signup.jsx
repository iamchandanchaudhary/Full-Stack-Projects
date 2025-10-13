import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
    const onSubmit = (data) => console.log(data);

    return (
        <>
            <section className="flex justify-center items-center w-full h-screen">
                <div className="modal-box px-8 py-10 w-max bg-[#fff] relative border border-[#111]/30 rounded-md drop-shadow-md">
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-4 top-2 hover:bg-slate-300 px-2 py-[3px] rounded-full">✕</Link>
                        <h3 className="font-bold text-2xl text-blue-600">Signup</h3>
                    
                        {/* Fullname */}
                        <div className="flex flex-col gap-1 relative">
                            <label htmlFor="name">Name: </label>
                            <input type="text" id="name"
                                className="outline-1 outline-blue-600/40 px-1 border border-gray-400/50 rounded-sm"
                                placeholder="Enter your fullname..."
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-xs text-red-600 absolute -bottom-5">This field is required</span>}
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1 relative">
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email"
                                className="outline-1 outline-blue-600/40 px-1 border border-gray-400/50 rounded-sm"
                                placeholder="Enter your email..."
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-xs text-red-600 absolute -bottom-5">This field is required</span>}
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1 relative">
                            <label htmlFor="password">Password: </label>
                            <input type="password" id="password"
                                className="outline-1 outline-blue-600/40 px-1 border border-gray-400/50 rounded-sm"
                                placeholder="Enter your password..."
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-xs text-red-600 absolute -bottom-5">This field is required</span>}
                        </div>

                        {/* Signup Button */}
                        <div className="flex gap-5 justify-center items-center mt-3">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-400 px-4 py-1 text-[#fff] rounded-md">Signup</button>

                            <span>Already registerd? 
                                <button 
                                    onClick={()=>document.getElementById('my_modal_3').showModal()}
                                    className="text-blue-500 underline cursor-pointer ml-1">
                                        Login
                                </button>
                                <Login />
                                
                            </span>
                        </div>
                    </form>

                </div>

            </section>
        </>
    );
}

export default Signup;