// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogIn: false}

  onClickButton = () => {
    this.setState(oldState => ({isLogIn: !oldState.isLogIn}))
  }

  render() {
    const {isLogIn} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <Message isLogIn={isLogIn} />
          {isLogIn ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
