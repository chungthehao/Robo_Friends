import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    // Neu co bat ky error nao, it'll run this lifecycle hook
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) 
            return <h1>Oooops... Something went wrong!</h1>
        return this.props.children
    }
}

export default ErrorBoundary