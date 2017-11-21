import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const APIURL = '/api/todos'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }

  componentWillMount(){
    this.loadTodos()
  }

  loadTodos(){
    fetch(APIURL)
    .then(res => {
      if(!res.ok) {
        if(res.status >= 400 && res.status < 500) {
          return res.json().then(data => {
            let err = {errorMessage: data.message}
            throw err
          })
        } else {
          let err = {errorMessage: 'Please try again later, server is not responding.'}
          throw err
        }
      }
      return res.json()
    })
    .then(todos => this.setState({todos}))
  }

  render() {
    return(
      <div>
        <h1>Todo List!</h1>
      </div>
    )
  }
}

export default TodoList
