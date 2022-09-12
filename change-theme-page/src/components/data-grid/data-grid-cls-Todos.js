import React from "react";

// class component ile todo
export class DataGridClsTodos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(response => {
                this.setState({ todos: response })
            })
    }

    renderBody = () => {
        return (
            <React.Fragment>
                {this.state.todos.slice(0,20).map((todo, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{todo.id}</th>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? "Tamamlandı" : "Yapılacak"}</td>
                        </tr>
                    )

                })}
            </React.Fragment>
        )
    }



    render() {
        return (
            <React.Fragment>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tittle</th>
                            <th scope="col">Durum</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {this.renderBody()}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}