import { useEffect, useState } from 'react';
import DatePickerComponent from '../DatePicker';
import NotificationButton from '../NotificationButton';
import axios from 'axios';
import './styles.css';

function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [dateMin, setDateMin] = useState(min);
  const [dateMax, setDateMax] = useState(max);

  useEffect(() => {
    axios.get('http://localhost:8080/sales')
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <div className="dsmetaCard">
      <h2 className="dsmetaSalesTitle">Vendas</h2>

      <div>
        <div className="dsmetaFormControlContainer">
          <DatePickerComponent
            dateSelected={dateMin}
            setDate={setDateMin}
          />
        </div>

        <div className="dsmetaFormControlContainer">
          <DatePickerComponent
            dateSelected={dateMax}
            setDate={setDateMax}
          />
        </div>
      </div>

      <div>
        <table className="dsmetaSalesTable">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmetaRedBtnContainer">
                  <NotificationButton />
                </div>
              </td>
            </tr>

            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmetaRedBtnContainer">
                  <NotificationButton />
                </div>
              </td>
            </tr>

            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmetaRedBtnContainer">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesCard;