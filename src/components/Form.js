import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { VALIDATION_RULES, checkForError, setOrRemoveError } from '../validation';

class Form extends Component {
    static propTypes = {
        isFormValid: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: '',
                email: '',
                phone: '',
                blogURL: '',
            },
            errors: {},
            touched: {},
        };
    }

    notifyParent = (isValid) => {
        typeof this.props.isFormValid === 'function' && this.props.isFormValid(isValid);
    }

    validateForm = () => {
        const errors = Object.keys(VALIDATION_RULES).reduce((errs, key) => {
            const error = checkForError(key, this.state.fields[key]);
            return setOrRemoveError(errs, key, error);
        }, {});
        const touched = Object.keys(this.state.fields).reduce((acc, cur) => ({ ...acc, [cur]: true }), {});
        this.setState({ errors, touched });
        const isFormValid = !Object.keys(errors).length;
        this.notifyParent(isFormValid);
    };

    handleInputChange = (event) => {
        const { name: key, value } = event.target;
        const error = checkForError(key, value);

        this.setState(state => {
            const errors = setOrRemoveError(state.errors, key, error);
            return { fields: { ...state.fields, [key]: value }, errors };
        });
    };

    handleBlur = (event) => {
        const { name: key } = event.target;
        this.setState(state => ({
            touched: { ...state.touched, [key]: true },
        }));
    };

    render() {
        const { fields, errors, touched } = this.state;
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form onSubmit={ e => e.preventDefault() } noValidate>
                <h3>Name:</h3>
                <input
                    type="text"
                    name="name"
                    className="name"
                    placeholder="Enter your name"
                    value={fields.name}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur}
                    required
                />
                { (errors.name && touched.name) &&
                    <span className="field-validation-error">{errors.name}</span>
                }
                <h3>Email:</h3>
                <input
                    type="email"
                    name="email"
                    className="email"
                    placeholder="Enter your email"
                    value={fields.email}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur}
                    required
                />
                { (errors.email && touched.email) &&
                    <span className="field-validation-error">{errors.email}</span>
                }
                <h3>Phone:</h3>
                <input
                    type="tel"
                    name="phone"
                    className="phone"
                    placeholder="Enter your phone number"
                    value={fields.phone}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur}
                    required
                />
                { (errors.phone && touched.phone) &&
                    <span className="field-validation-error">{errors.phone}</span>
                }
                <h3>Blog URL:</h3>
                <input
                    type="url"
                    name="blogURL"
                    className="url"
                    placeholder="Enter your blog URL"
                    value={fields.blogURL}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur}
                    required
                />
                { (errors.blogURL && touched.blogURL) &&
                    <span className="field-validation-error">{errors.blogURL}</span>
                }
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
