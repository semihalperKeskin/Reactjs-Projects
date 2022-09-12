import React, { useEffect, useState } from 'react'


// function component ile todo
export function DataGridFnTodos() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        loadData()
    }, [])



    const loadData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(Response => Response.json())
            .then(Response => {
                setTodos(Response)
            })
    }

    const renderBody = () => {
        return (
            <>
                {todos.slice(0,20).map((todo, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{todo.id}</th>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? "Tamamlandı" : "Yapılacak"}</td>
                        </tr>
                    )

                })}
            </>
        )
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tittle</th>
                        <th scope="col">Durum</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}
