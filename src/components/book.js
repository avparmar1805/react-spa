import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as bookActions from "../actions/bookActions";

class Book extends Component {
    constructor(props) {
        super(props);
    }

    submitBook(input) {
        this.props.createBook(input);
    }

    render() {
        let titleInput;
        return (
            <div className="row">
                <div className="col-md-6">
                    <h3>Books</h3>
                    <table className="table">
                        <tbody>
                            {
                                this.props.books.map((b, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{b.title}</td>
                                            <td><Link to={`/books/${b.id}`}>View</Link></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h3>Books Form</h3>
                    <form onSubmit={e => {
                        e.preventDefault();
                        var input = { title: titleInput.value };
                        this.submitBook(input);
                        e.target.reset();
                    }}>
                        <input type="text" name="title" ref={node => titleInput = node} />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        books: state.books
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBook: book => dispatch(bookActions.createBook(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)