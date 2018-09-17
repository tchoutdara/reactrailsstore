import React from 'react'
import axios from 'axios'
import Form from './Form'

class Product extends React.Component {
  state = { product: {}, edit: false }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/products/${id}`)
      .then( res => this.setState({ product: res.data }) )
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  submit = (product) => {
    const { id } = this.props.match.params
    axios.put(`/api/products/${id}`, { product })
      .then( res => {
        this.setState({
          product: res.data,
          edit: false
        })
      })
  }

  show() {
    const { product: { name, description, price, department }} = this.state
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>${price}</h3>
        <h3>{department}</h3>
      </div>
    )
  }

  form() {
    return <Form {...this.state.product} submit={this.submit} />
  }

  render() {
    const { edit } = this.state
    return (
      <div>
        { edit ? this.edit() : this.show() }
        <button onClick={this.toggleEdit}>
          { edit ? 'Cancel' : 'Edit' }
        </button>
      </div>
    )
  }
}

export default Product