import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Search extends Component {

    static propTypes = {
        search: PropTypes.func
    }

    render() {
        return (
            <div>
                <h2>Search</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            defaultValue="Harry Potter"
                            inputRef={input => (this.input = input)}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.props.search(this.input.value);
                                }
                            }}
                        />
                        <InputGroup.Addon>
                            <Glyphicon glyph="search" onClick={() => this.props.search(this.input.value)} />
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }
}

export default Search;
