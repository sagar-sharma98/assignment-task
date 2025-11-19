// import { useEffect, useState } from "react";

// import { useFocusOnPointerDown } from "@chakra-ui/react";
import { useRef, useState, useEffect, Component } from "react";

// function useFetch(url){
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//      async function fethcData() {
//       setLoading(true);
//       try {
//         const response = await fetch(url);
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(true);
//         console.log(error);
//       }
//       setLoading(false);
//     }

//     fethcData();
//   }, [url]);
  
//   return ([data, error, loading]);

// }

// export default useFetch;


class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log(error, info);
    }

    render(){
        if(this.state.hasError){
            return <h1>Something went wrong.</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundry;