import React, { useEffect, useState, useRef } from 'react';
import { DayPilotCalendar } from '@daypilot/daypilot-lite-react';

export default function WeekCalendar() {
  const [value, setVaule] = useState(new Date());
  const [config, setConfig] = useState({
    viewType: 'Week',
    durationBarVisible: false,
  });

  const calendarRef = useRef();

  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const month =
    value.getMonth() + 1 < 10
      ? `0${value.getMonth() + 1}`
      : value.getMonth() + 1;
  const date = value.getDate() < 10 ? `0${value.getDate()}` : value.getDate();
  const day = week[value.getDay()];

  const current_date = `${month}.${date}(${day})`;

  useEffect(() => {
    // load event data
    calendarRef.current.control.update({
      startDate: '2023-10-02',
      events: [
        {
          id: 1,
          text: 'Event 1',
          start: '2023-10-02T10:30:00',
          end: '2023-10-02T13:00:00',
        },
        {
          id: 2,
          text: 'Event 2',
          start: '2023-10-03T09:30:00',
          end: '2023-10-03T11:30:00',
          backColor: '#6aa84f',
        },
        {
          id: 3,
          text: 'Event 3',
          start: '2023-10-03T12:00:00',
          end: '2023-10-03T15:00:00',
          backColor: '#f1c232',
        },
        {
          id: 4,
          text: 'Event 4',
          start: '2023-10-01T11:30:00',
          end: '2023-10-01T14:30:00',
          backColor: '#cc4125',
        },
      ],
    });
  }, []);

  return (
    <div>
      <DayPilotCalendar {...config} ref={calendarRef} />
    </div>
  );
}
