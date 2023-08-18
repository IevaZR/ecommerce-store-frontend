import "./AdminPageProductAddedMessage.css";

const AdminPageProductAddedMessage = ({ productName, closeMessage }) => {

    

  return (
    <div className="AdminPageProductAddedMessageOuterWrapper">
      <div className="AdminPageProductAddedMessageWrapper">
        <h1 className="AdminPageProductAddedMessage">
          {productName} successfully added
        </h1>
        <button className="AdminPageProductAddedMessageButton" onClick={closeMessage}>CLOSE</button>
      </div>
    </div>
  );
};

export default AdminPageProductAddedMessage;
