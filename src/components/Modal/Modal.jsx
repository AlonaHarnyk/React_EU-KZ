export const Modal = ({ company, hide }) => {
  return (
      <div>
          <div>
              <button onClick={hide}>Close</button>
              <p>{company}</p>
          </div>
      </div>
  );
};