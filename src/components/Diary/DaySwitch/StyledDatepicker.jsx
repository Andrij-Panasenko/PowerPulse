import sprite from '../../../assets/sprite.svg';
import { forwardRef, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  CalendarButton,
  CalendarCont,
  CalendarGlobalStyles,
  TitleWrapper,
} from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const StyledDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, 'dd/MM/yyyy')}
      </TitleWrapper>
    );
  });

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  return (
    <>
      <CalendarCont>
        <DatePicker
          showIcon
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
          }}
          customInput={<CustomInput />}
          dateFormat={'dd MM yyyy'}
          calendarStartDay={1}
          formatWeekDay={(day) => day.substr(0, 1)}
        />
        <CalendarButton onClick={handlePrevDay}>
          <svg width="12px" height="16px">
            <use xlinkHref={sprite + '#chevron-left'} />
          </svg>
        </CalendarButton>
        <CalendarButton onClick={handleNextDay}>
          <svg width="12px" height="16px">
            <use xlinkHref={sprite + '#chevron-right'} />
          </svg>
        </CalendarButton>
      </CalendarCont>
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
