import React, { Component } from 'react'

const iconHoverStyle = {
    cursor: "pointer"
};

class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between align-items-center">
                <div>{ title }</div>
                <div className="todo-icons">
                    <span className="mx-2 text-success" onClick={handleEdit} style={iconHoverStyle}>
                        <i className="fa fa-edit" />
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete} style={iconHoverStyle}>
                        <i className="fa fa-trash" />
                    </span>
                </div>
            </li>
        )
    }
}

export default TodoItem
