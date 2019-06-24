import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

const VALIDATION_RULES = {
    name: [
        text => text.length >= 3,
        text => text.length <= 30,
        text => !/[^a-zA-Z]/.test(text)
    ],
    email: [],
    phone: [],
    blogURL: [],
};

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            blogURL: '',
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        };
    }

    validateForm = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });

        switch(name) {
            case 'name':
                const isNameValid = VALIDATION_RULES.name.every(test => test(value));
                this.setState({ isNameValid });
                break;
            case 'email':

                break;
            case 'phone':

                break;
            case 'blogURL':

                break;
            default:
                break;
        }

    };

    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                />
                <h3>Email:</h3>
                <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                />
                <h3>Phone:</h3>
                <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                />
                <h3>Blog URL:</h3>
                <input
                    type="text"
                    name="blogURL"
                    placeholder="Enter your blog URL"
                    value={this.state.blogURL}
                    onChange={this.handleInputChange}
                />
                <div className="small-6 small-centered text-center columns">
                    <button
                        className="button success expand round text-center"
                        onClick={this.validateForm}>
                        Verify
                    </button>
                </div>
            </form>
        </div>);
    }
}

export default Form;
