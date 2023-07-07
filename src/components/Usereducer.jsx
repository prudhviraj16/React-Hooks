import React, { useReducer } from "react";
import axios from "axios";
const Usereducer = () => {
  const initialState = {
    loading: true,
    error: "",
    post: React.useMemo(() => {

    },[]),
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          post: action.payload,
          error: false,
        };
      case "FETCH_ERROR":
        return {
          loading: false,
          post: {},
          error: true,
        };
      default:
        return state;
    }
  };

  // const reducer = (state, action) => {
  //   console.log(state);
  //   switch (action.type) {
  //     case "increment":
  //       return { ...state, firstCounter: state.firstCounter + action.value };
  //     case "decrement":
  //       return { ...state, firstCounter: state.firstCounter - action.value };
  //     case "increment5":
  //       return { ...state, firstCounter: state.firstCounter + action.value };
  //     case "decrement5":
  //       return { ...state, firstCounter: state.firstCounter - action.value };
  //     case "reset":
  //       return initialState;
  //     default:
  //       return state;
  //   }
  // };

  // const [count, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useMemo(() => axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => dispatch({ type: "FETCH_SUCCESS", payload: res.data })).catch((err) => dispatch({ type: "FETCH_ERROR",payload: err})), [])
    
    console.log(state.post);
  return (
    <>
      {/* <h1>Count - {count.firstCounter}</h1> */}
      {/* <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment5", value: 5 })}>
        Increment5
      </button>
      <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
        Decrement5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button> */}

      {/* {state.post.userId}
      {state.post.title} */}
    </>
  );
};

export default React.memo(Usereducer);
