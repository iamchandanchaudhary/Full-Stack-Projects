import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
    const onSubmit = (data) => console.log(data);

    return (
        <>
            {/* <button className="btn hover:bg-[#fff] hover:text-[#111] px-4 py-1 rounded-md drop-shadow-md" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button> */}

            <dialog id="my_modal_3" className="modal rounded-md drop-shadow-md">
                <div className="modal-box px-8 py-10">
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-2 hover:bg-slate-300 px-2 py-[3px] rounded-full">✕</button> */}
                        <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-4 top-2 hover:bg-slate-300 px-2 py-[3px] rounded-full" onClick={()=>document.getElementById('my_modal_3').closeModal()}>✕</Link>

                        <h3 className="font-bold text-2xl text-blue-600">Login</h3>

                        {/* Email */}
                        <div className="flex flex-col gap-1 relative">
                            <label htmlFor="">Email: </label>
                            <input type="email" 
                                className="outline-1 outline-blue-600/40 px-1 border border-gray-400/50 rounded-sm"
                                placeholder="Enter your email..."
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-xs text-red-600 absolute -bottom-5">This field is required</span>}
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1 relative">
                            <label htmlFor="">Password: </label>
                            <input type="password" 
                                className="outline-1 outline-blue-600/40 px-1 border border-gray-400/50 rounded-sm"
                                placeholder="Enter your password..."
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-xs text-red-600 absolute -bottom-5">This field is required</span>}
                        </div>

                        {/* Login Button */}
                        <div className="flex gap-5 justify-center items-center mt-3">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-400 px-4 py-1 text-[#fff] rounded-md">Login</button>

                            <span>Not registerd? 
                                <Link to={"/signup"} className="text-blue-500 underline cursor-pointer ml-1">Signup</Link>
                            </span>
                        </div>
                    </form>

                </div>
            </dialog>
        </>
    );
}

export default Login;