import { useHistory } from "react-router-dom";

const UseHistory = () => {
  const history = useHistory();
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => history.push("/clock")}
      >
        useHistory
      </button>
      <p>useHistory is for redirecting to another URL</p>
    </>
  );
};

export default UseHistory;
