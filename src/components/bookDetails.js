import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as bookActions from "../actions/bookActions";

class BookDetailsPage extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.fetchBookById(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <h1>Book Details Page</h1>
                <div className="media">
                    <div className="media-left">
                        <a href="#">
                            <img className="media-object" src="http://placehold.it/200x280" alt="Placehold" />
                        </a>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{this.props.book.title}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        book: state.book
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);