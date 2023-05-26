import React from "react";
import {useState} from "react"
import { json } from "react-router-dom";
// import Usestate from "./usestate";

function getLocalStorageData(){
    const data = localStorage.getItem("data");


if(data){
    return JSON.parse(localStorage.getItem("data"));
}else{
    return[];
}
}
function Formhandle() {

    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[tabledata,setTableData]=useState(getLocalStorageData());
    const[isedit,setIsEdit]=useState(false)
    const[editId,setEditId]=useState(null)

    function handleSubmit(e){
        e.preventDefault();
        const formvalue={
            id:new Date().getTime(),
            firstName:firstName,
            lastName:lastName,
            email:email,
        };
        setTableData([...tabledata,formvalue])
        localStorage.setItem("data", JSON.stringify([...tabledata, formvalue]))
        setFirstName("");
        setLastName("");
        setEmail("");
        }

        function handledelete(id){
            const updatedData = tabledata.filter((item) => item.id !== id);
            localStorage.setItem("data", json.stringify(updatedData))
            setTableData(updatedData);
        }

        function addToEditStage(item){
            const { firstName , lastName , email ,id} = item;
            setFirstName(firstName)
            setLastName(lastName)
            setEmail(email)
            setIsEdit(true)
            setEditId(id)
        }

        function handleEdit(e) {
            e.preventDefault();
            const editTableData = tabledata.map((item)=>{
                if(item.id === editId){
                    return {...item , firstName , lastName , email}
                }else{
                    return item;
                }
            });
        

        setTableData(editTableData);
        setFirstName("");
        setLastName("");
        setEmail("");
        setIsEdit(false)
        setEditId(null)
    }

       return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 p-3 mt-5 offset-md-4 shadow bg-info">
            <h5>Sign Up</h5>
           { firstName && <h6 className="text-center">Welcome{firstName}</h6>}
            <form action="">
                <div className="mb-3">
                    <label htmlFor="firstName">FirstName</label>
                    <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    className="form-control" />
                </div>

                {/* --------------------last Name------------------ */}

                <div className="mb-3">
                    <label htmlFor="lastName">LastName</label>
                    <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    className="form-control" />
                </div>
                
                

                 {/* ------------------------Email------------------- */}

                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="form-control" />
                </div>

                {/* ---------------submit button--------------- */}
                {isedit ? (
                    <button className="btn btn-warning mt-3 w-100"
                    onClick={handleEdit}>Update</button>
                ) : (
                <button className="btn btn-light mt-3 w-100" onClick={handleSubmit}>Submit</button>
                )}

                </form>
        </div>

        {/* -----------------------------Table Form------------------- */}

        <div className="col-md-6 w-100 mt-5" style={{marginBottom:"100px"}}>
            <table className="table table-info">
                <thead>
                    <tr>
                        <th>Sr No:</th>
                        <th>Id:</th>
                        <th>First Name:</th>
                        <th>Last Name:</th>
                        <th>Email:</th>
                        <th>Action:</th>
                    </tr>
                </thead>
                <tbody>
                    {tabledata.map((item,index) => {
                        const {id, firstName, lastName, email}=item;
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{id}</td>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{email}</td>

                                <td>
                                    <button className="btn btn-danger" onClick={()=>handledelete(id)}>Delete</button>

                                    {/* ---------------edit------------ */}

                                    <button className="btn btn-warning" onClick={()=>addToEditStage(item)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
      </div>
    </div>
  );
}                            


export default Formhandle 
