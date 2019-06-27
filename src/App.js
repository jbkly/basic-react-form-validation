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

    isFormValid = (isValid) => {
      this.setState({ isValid });
    };

    render() {
        return (<div>
            <Form isFormValid={this.isFormValid}></Form>
            <Message isValid={this.state.isValid}></Message>
        </div>);
    }
}

export default App;
