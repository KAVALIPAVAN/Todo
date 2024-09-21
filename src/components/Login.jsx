import React from "react";

const Login = () => {
  return <div className=" flex h-screen w-full bg-gradient-to-r from-[#727c8a] via-[#2b2dd7] to-[#0080ff]">
    <div className=" bg-zinc-600 w-[50%] h-[50%] m-auto p-2">
      <form className=" flex ">
      <input type="text" className="w-full rounded-md px-2 py-1 outline-none " placeholder=" enter name" required/>
      <button type="submit"> submit</button>
      </form>
      
    </div>
    
  </div>;
};

export default Login;
 