import "./AdminPageProductAddedMessage.css";

const AdminPageProductAddedMessage = ({ closeMessage, message }) => {

    

  return (
    <div className="AdminPageProductAddedMessageOuterWrapper">
      <div className="AdminPageProductAddedMessageWrapper">
        <h1 className="AdminPageProductAddedMessage">
          {message}
        </h1>
        <button className="AdminPageProductAddedMessageButton" onClick={closeMessage}>CLOSE</button>
      </div>
    </div>
  );
};

export default AdminPageProductAddedMessage;
