import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        hasError : false,
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError : true,
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorMessage/>
        }
        return this.props.children
    }
}

export default ErrorBoundary;