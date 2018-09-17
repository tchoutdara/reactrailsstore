import React from 'react'

class Form extends React.Component {
  defaultValues = { name: '', price: '', description: '', department: '' }
  state = {...this.defaultValues}

  static getDerivedStateFromProps(props, state) {
    if (props.id !== state.id)
      return {...props}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submit(this.state)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { name, price, description, department } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          value={price}
          onChange={this.handleChange}
        />
        <input
          name="department"
          placeholder="Department"
          value={department}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form