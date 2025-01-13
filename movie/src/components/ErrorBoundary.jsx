import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorInfo: null
        }
    }
    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(error,errorInfo){
        this.setState({errorInfo})
        console.log('error caught by error boundary' )
    }


    render(){
        if (this.state.hasError){
            <h2>Hello Aakash!!</h2>
        }
        return this.props.children;
    }
}


export default ErrorBoundary;

/*

catches: 
- Errors thrown during rendering(during mounting).

dosen't catch:
- Errorsin event handlers(eg. onClick,onSubmit)
- Errors in lifecycle methods(eg. componentDidMount,componentDidUpdate)use try-catch

- Error during async operations(eg. fetch)

*/





