import React, { Component } from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isValid: false,
      };
    }

    render() {
        return (<div>
            <Form></Form>
            <Message isValid={this.state.isValid}></Message>
        </div>);
    }
}

export default App;
