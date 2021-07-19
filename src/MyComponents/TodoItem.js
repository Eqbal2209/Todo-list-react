import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <div className="text-start">
            {/* <h4 >{todo.title}</h4>
            <p >{todo.desc}</p> */}
            <figure className="text-start">
                <blockquote className="blockquote">
                    <p className="h3">{ todo.title}</p>
                </blockquote>
                <figcaption className="blockquote-footer h4 text-info">
                {todo.desc}</figcaption>
            </figure>
            <button className="btn btn-sm btn-danger " onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
