import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      //   throw new Error();
      return state;
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 }); //useReducer에는 reducer가 반드시 따라다님, action이 필요함
  //매개변수로 상태랑 action을 받는거라고

  return (
    <>
      <p>
        현재 카운터 값은 <b> {state.count} </b>
      </p>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </>
  );
}
