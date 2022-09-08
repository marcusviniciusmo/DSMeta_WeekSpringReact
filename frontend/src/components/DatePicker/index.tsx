import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  dateSelected: Date;
  setDate: Function;
};

function DatePickerComponent({ dateSelected, setDate }: Props) {
  return (
    <DatePicker
      selected={dateSelected}
      onChange={(date: Date) => setDate(date)}
      className='dsmetaFormControl'
      dateFormat='dd/MM/yyyy'
    />
  );
};

export default DatePickerComponent;