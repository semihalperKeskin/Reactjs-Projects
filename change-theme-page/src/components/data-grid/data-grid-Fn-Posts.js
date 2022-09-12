import React, { useEffect, useState } from 'react'


// function component ile post
export function DataGridFnPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(Response => Response.json())
            .then(Response => {
                setPosts(Response)
            })
    }


    const renderBody = () => {
        return (
            <>
                {posts.slice(0,20).map((post, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{post.id}</th>
                            <td>{post.title}</td>
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
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}


