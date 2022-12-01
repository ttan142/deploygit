import React from "react";

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    const { id, title, completed } = props.location.state.todo;
    this.state = {
      id,
      title,
      completed,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.completed === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateTodoHandler(this.state);
    this.setState({ title: "", completed: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Todo</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="title"
              placeholder="Name"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Completed ?</label>
            <select
              name="completed"
              value={this.state.value}
              onChange={(e) => this.setState({ completed: e.target.value })}
            >
              <option style={{ display: "none" }} />
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditTodo;
