import React, { useState } from "react";

const Todo = () => {

const [data, setdata] = useState([]);
const [inputvalue, setInputvalue] = useState('');
const [toggle, settoggle] = useState(null);



const Handletask=()=>{
  if(inputvalue==='')
    {
      return;
  }else{
  if(toggle!==null){
    const updatedData = data.map((item, index) =>
      index === toggle ? inputvalue : item
    );
    setdata(updatedData);
    settoggle(null);
  } else {
  setdata(prevData=>[...prevData,inputvalue]);
}
setInputvalue("");
}
}
// useEffect(() => {
  
// }, [data]);
const handleedit=(index)=>{
    setInputvalue(data[index]);
    settoggle(index);

}

const Handleask=(e)=>{
  setInputvalue(e.target.value);
}
const handledelete=(index)=>{
  const newData = data.filter((_, i) => i !== index);
    setdata(newData);
}



  return <div className=" bg-gradient-to-r from-blue-100 to-green-100 h-screen overflow-scroll overflow-x-hidden">
  <div className=" relative  h-full  w-full p-4  m-auto  ">
  <div className=" relative m-auto  top-4 w-1/2 mb-3 min-h-32 p-4 bg-gray-300 rounded-md shadow-md">
  <h2 className=" text-4xl font-semibold text-center">ToDo List</h2>
  <div className=" p-4 flex flex-col">
    <div className=" flex flex-wrap gap-3">
    <input type="text" value={inputvalue} placeholder="Enter your task" className=" sm:flex-1 w-[100%] p-1 outline-none rounded-md" onChange={Handleask}/>
    <button className=" bg-indigo-500 p-1 rounded-md" onClick={()=>{Handletask()}}>
    {toggle !== null ? "Update Task" : "Add Task"}</button>
    </div>
    {data.map((num,index)=>(
      <div key={index} className=" flex-wrap mt-4 flex gap-2 justify-between ">
      <div className="flex-1 m-auto">
      <p className=" bg-gray-200 overflow-hidden  rounded-md p-1 ">{num} </p>
      </div>
      <div className=" flex gap-2 px-4 py-2 items-center ">
      <button onClick={()=>{handleedit(index)}}  className=" bg-yellow-200 rounded-md w-10 h-10">Edit</button>
      <button onClick={()=>{handledelete(index)}} className=" inline-block flex-shrink-0 bg-red-400 rounded-md  w-12 h-10">Delete</button>
      </div>
    </div>
    
    ))}
    </div>
  </div>
  </div>
  </div>;
};
 

export default Todo;
