import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) return <p>No Feedbacks</p>;

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

FeedbackList.prototype = {
  feedback: PropTypes.arrar,
};

export default FeedbackList;
