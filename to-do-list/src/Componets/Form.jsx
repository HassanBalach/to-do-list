import React, { useState } from "react";




function Form() {
  const [data, setData] = useState([]);
  const [newTask, setNewTask] = useState();

  const addElement = () => {
    if (newTask.trim() !== "") {
      setData([...data, newTask]);
      setNewTask("");
    }
  };
  const removeTask = (index) => {
    const updataTasks = [...data];
    updataTasks.splice(index, 1);
    setData(updataTasks);
  };

const editTask =(index)=>{
 
  const promptValue = prompt("Edit your task" , data[index]);
  
  if(promptValue.trim() !== ''){
    const updateNewData = [...data]
    updateNewData[index] = promptValue;
    setData(updateNewData)
  }else(
    alert("Please! Check the value")
  )


}

  return (
    <div>
      <div className="relative">
        <input
          className=" w-full p-2 my-2 rounded-sm"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add list"
        />
          <button className= "absolute top-2 p-2 right-0 bg-blue-700  text-white rounded-sm border border-black  ml-2 hover:bg-red-400 active:bg-red-800" onClick={addElement}>
          Submit
        </button>
      </div>
       

      <ul>
        {data.map((task, index) => (
          <li className=" relative my-3 " key={index}>
            
            <li className="border border-blue-300 p-2 text-white text-lg rounded text-left">{  task}</li>
            <button
              className="  p-2 absolute top-0.5 right-10 bg-blue-700  text-white rounded-sm border border-black  ml-2 hover:bg-red-400 active:bg-red-800"
             
              onClick={() => removeTask(index)}
            >
              
              Remove
            </button>
            <button className="p-2  absolute top-0.5 right-1   bg-blue-700  text-white rounded-sm border border-black  ml-2 hover:bg-red-400 active:bg-red-800" onClick={() => editTask(index)}>Edit </button>
          </li>
        ))}
      </ul>
    
    </div>
  );
}

export default Form;
