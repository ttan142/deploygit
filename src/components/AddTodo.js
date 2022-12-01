import React from "react";

class AddTodo extends React.Component {
  state = {
    title: "",
    completed: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.completed === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addTodoHandler(this.state);
    this.setState({ title: "", completed: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Activity</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.name}
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
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
