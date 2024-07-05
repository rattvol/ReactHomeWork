import { useReducer } from "react";

const START_FORM = { name: "", text: "", rating: 5 };

const ratingMin = 0;
const ratingMax = 5;

function reducer(state, { type, payload }) {
  switch (type) {
    case "name":
      return { ...START_FORM, name: payload };
    case "rating":
      return {
        ...state,
        rating:
          payload < ratingMin
            ? ratingMin
            : payload > ratingMax
              ? ratingMax
              : payload,
      };
    case "text":
      return { ...state, text: payload };
    default:
      return START_FORM;
  }
}

const useForm = (initialValue) => {
  return useReducer(reducer, initialValue);
};

export const ReviewForm = () => {
  const [form, dispatch] = useForm(START_FORM);

  return (
    <div>
      <div className="inputBlock">
        <span>Name</span>
        <input
          value={form.name}
          onChange={(event) => {
            dispatch({ type: "name", payload: event.target.value });
          }}
        />
      </div>
      <div className="inputBlock">
        <span>Rating</span>
        <input
          type="number"
          value={form.rating}
          onChange={(event) => {
            dispatch({ type: "rating", payload: event.target.value });
          }}
        />
      </div>
      <div className="inputBlock">
        <span>Text</span>
        <input
          value={form.text}
          onChange={(event) => {
            dispatch({ type: "text", payload: event.target.value });
          }}
        />
      </div>
      <button className="inputBlock" onClick={() => dispatch("")}>
        Save
      </button>
    </div>
  );
};
