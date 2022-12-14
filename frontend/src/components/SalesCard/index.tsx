import { useEffect, useState } from 'react';
import { BASE_URL } from '../../utils/Api';
import { Sale } from '../../utils/Types';
import axios from 'axios';
import DatePickerComponent from '../DatePicker';
import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [dateMin, setDateMin] = useState(min);
  const [dateMax, setDateMax] = useState(max);
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {

    const minDate = dateMin.toISOString().slice(0, 10);
    const maxDate = dateMax.toISOString().slice(0, 10);

    axios.get(`${BASE_URL}/sales?minDate=${minDate}&maxDate=${maxDate}`)
      .then((response) => {
        setSales(response.data.content);
      });
  }, [dateMin, dateMax]);

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
            {
              sales.map((sale) => {
                return (
                  <tr key={sale.id}>
                    <td className="show992">{sale.id}</td>
                    <td className="show576">{
                      new Date(sale.date).toLocaleDateString()}
                    </td>
                    <td>{sale.sellerName}</td>
                    <td className="show992">{sale.visited}</td>
                    <td className="show992">{sale.deals}</td>
                    <td>R$ {sale.amount.toFixed(2)}</td>
                    <td>
                      <div className="dsmetaRedBtnContainer">
                        <NotificationButton saleId={sale.id} />
                      </div>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesCard;