import App from "../App";

function Notifications({ unread }) {
  return (
    <div>
      <h2>Inbox</h2>

      {unread && <p> you have new messages</p>}
    </div>
  );
}

export default Notifications;
