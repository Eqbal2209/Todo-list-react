import React from 'react'
import { useEffect, useState } from "react";


export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");
    const Submit =(e)=>{
        e.preventDefault();
        if(!title || !Desc){
            alert("Title or Description cannot be blanked");
        }
        else{
            addTodo(title,Desc); ;
            setTitle("")
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3 className="text-start">Add a Todo...very excited!!!..to complete this work</h3>
            <form onSubmit={Submit}>
                <div className="mb-3 ">
                    <label htmlFor="title" className="form-horizontal control-label float-left" style={{"textAlign": "left"}}>Todo title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label text-start">Todo describtion</label>
                    <input type="text" value={Desc} onChange={(x)=>setDesc(x.target.value)} className="form-control" id="Desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success btn-lg float-right">Add Todo</button>
            </form>
        </div>
    )
}
