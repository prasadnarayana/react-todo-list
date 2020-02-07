import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        const {item, handleInputChange, handleSubmit, editItem} = this.props;

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepand">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book py-1" />
                            </div>
                        </div>
                        <input
                            type="text"
                            className="form-control text-capitalize"
                            placeholder="add a todo item"
                            value={item}
                            onChange={handleInputChange}
                        />
                        <button type="submit"
                        className={
                            editItem ?
                            "text-capitalize btn btn-block btn-success mt-3" :
                            "text-capitalize btn btn-block btn-primary mt-3"
                        }>
                            {editItem ? "edit item": "add item"}
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoInput
