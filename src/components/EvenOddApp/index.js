// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {num: 0, isEvenOrOdd: 'Even'}

  increment = () => {
    this.setState(prevState => {
      const prevNum = prevState.num
      const randomNumber = Math.floor(Math.random() * 100)
      const changeEvenOrOdd =
        (prevNum + randomNumber) % 2 === 0 ? 'Even' : 'Odd'
      return {num: prevNum + randomNumber, isEvenOrOdd: changeEvenOrOdd}
    })
  }

  render() {
    const {num, isEvenOrOdd} = this.state
    return (
      <div className="container">
        <div className="app-container">
          <h1 className="heading">Count {num}</h1>
          <p className="description">Count is {isEvenOrOdd}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.increment}
          >
            Increment
          </button>
          <p className="increment-description">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
