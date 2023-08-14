import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialToDosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleToDos extends Component {
  state = {toDosList: initialToDosList}

  deleteTodo = id => {
    const {toDosList} = this.state
    const updatedToDosList = toDosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      toDosList: updatedToDosList,
    })
  }

  render() {
    const {toDosList} = this.state

    return (
      <li className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todos-list">
            {toDosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </li>
    )
  }
}

export default SimpleToDos
