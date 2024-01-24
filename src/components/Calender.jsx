import React from 'react';
import moment from 'moment';

const Calender = (props) => {
  const days = [];
  const calenderGrid = [];
  const currentDate = moment(props.date);
  const firstDay = currentDate.startOf('month').day();
  const daysInMonth = currentDate.daysInMonth();
  const handleData = (data) => {
    props.getDate(data.target.dataset.date);
  }
  for (let i = 0; i < 7; i++)
    days.push(<th key={i}>{currentDate.day(i).format('ddd')}</th>);

  let dayCounter = 1;

  for (let week = 0; week < 6; week++) {
    calenderGrid[week] = [];
    for (let day = 0; day < 7; day++) {
      if ((week === 0 && day < firstDay) || dayCounter > daysInMonth)
        calenderGrid[week][day] = <td key={`${week}-${day}`}></td>;
      else{
        let date=moment({year:currentDate.year(),month:currentDate.month(),day:dayCounter})
        calenderGrid[week][day] = <td key={`${week}-${day}`} className='day' data-date={date.format("YYYY-MM-DD")}
         onClick={handleData}>{dayCounter++}</td>;
      }
    }
    if(dayCounter>daysInMonth) break;
  }
  return (
    <>
    <h4>{currentDate.format('MMM')} - {currentDate.format('YYYY')}</h4>
      <table align='center' border='solid'>
        <thead>
          <tr>{days}</tr>
        </thead>
        <tbody>{calenderGrid.map((week, index) => <tr key={index}>{week}</tr>)}</tbody>
      </table>
    </>
  );
};

export default Calender;
