import { useReducer } from "react";
import styles from "./styles.module.css";

const START_FORM = {
  userId: "a304959a-76c0-4b34-954a-b38dbf310360",
  text: "",
  rating: 5,
};

const ratingMin = 0;
const ratingMax = 5;

function reducer(state, { type, payload }) {
  switch (type) {
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
    case "clear":
    default:
      return START_FORM;
  }
}

const useForm = (initialValue) => {
  return useReducer(reducer, initialValue);
};

export const ReviewForm = ({ onCreateReview, isReviewUploading }) => {
  const [form, dispatch] = useForm(START_FORM);

  return (
    <div>
      <div className={styles.inputBlock}>
        <span>Rating</span>
        <input
          type="number"
          min="0"
          max="5"
          value={form.rating}
          onChange={(event) => {
            dispatch({ type: "rating", payload: event.target.value });
          }}
        />
      </div>
      <div className={styles.inputBlock}>
        <span>Text</span>
        <input
          value={form.text}
          onChange={(event) => {
            dispatch({ type: "text", payload: event.target.value });
          }}
        />
      </div>
      <button
        className={styles.inputBlock}
        onClick={() => {
          onCreateReview(form);
          dispatch({ type: "clear" });
        }}
        disabled={isReviewUploading}
      >
        {isReviewUploading ? "...loading" : "Save"}
      </button>
    </div>
  );
};
