import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { term: '' };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSearchChange(this.state.term)
        this.setState({ term: '' });
    }

    render() {
        return (
            <div className='search-bar'>
                <form onSubmit={this.onFormSubmit} className='input-group' >
                    <input
                        className='form-control'
                        value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value)}
                    />
                    <span className='input-group-btn'>
                        <button type='submit' className='btn btn-secondary' >Search</button>
                    </span>
                </form>
            </div>

        );
    }
    onInputChange(term) {
        this.setState({ term });
    }

}

export default SearchBar;