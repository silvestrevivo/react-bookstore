import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from './gallery';

class Global extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    render() {
        return (
            <div className="container global">
                <h1 className="text-center">BookStore</h1>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            //placeholder="Search for a book"
                            defaultValue="Harry Potter"
                            inputRef={input => (this.input = input)}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search();
                                }
                            }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search" />
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <Gallery datafetch={this.state.items} />
            </div>
        );
    }

    search() {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URL}${this.input.value}`, { method: 'GET' })
            .then(response => response.json())
            .then(json => {
                let { items } = json;
                this.setState({ items });
            });
    }
}

export default Global;
