import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function DatePickerComponent() {
  return (
    <DatePicker
      selected={new Date()}
      onChange={(date: Date) => {}}
      className='dsmetaFormControl'
      dateFormat='dd/MM/yyyy'
    />
  );
};

export default DatePickerComponent;