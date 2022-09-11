import axios from 'axios';
import NotificationIcon from '../../assets/img/notificationIcon.svg';
import { BASE_URL } from '../../utils/Api';
import './styles.css';

type Props = {
  saleId: number;
};

function NotificationButton({ saleId }: Props) {
  const handleClick = (id: number) => {
    axios.get(`${BASE_URL}/sales/${id}/notification`)
      .then((response) => {
        console.log('Sucesso')
      });
  };

  return (
    <div className="dsmetaRedBtn" onClick={() => handleClick(saleId)}>
      <img src={NotificationIcon} alt="Notificar" />
    </div>
  );
};

export default NotificationButton;