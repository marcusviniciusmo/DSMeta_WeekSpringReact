import NotificationIcon from '../../assets/img/notificationIcon.svg';
import './styles.css';

function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={NotificationIcon} alt="Notificar" />
    </div>
  );
};

export default NotificationButton;