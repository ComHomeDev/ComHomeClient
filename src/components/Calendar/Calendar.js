import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
  parseISO,
  isAfter,
  isBefore,
} from "date-fns";
import { ko } from "date-fns/locale";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./Calendar.css";

import { getPostList } from "../../api/main";

function Calendar({ showEvent, postEvent, setDay, contactDate }) {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const [event, setEvent] = useState([]);
  const [eventArr, setEventArr] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let tempEvent = getEvent(selectedDate);
    if (postEvent) {
      postEvent(tempEvent);
    }
    if (contactDate) {
      setSelectedDate(contactDate);
      setActiveDate(contactDate);
    }
    setEvent(tempEvent);
  }, [selectedDate]);

  const fetchData = async () => {
    const response = await getPostList("student_council_notice");
    setEventArr(response.data_det);
  };

  const getHeader = () => {
    return (
      <div className="calendarHeader">
        <AiOutlineLeft
          className="navIcon"
          onClick={() => {
            setActiveDate(subMonths(activeDate, 1));
            setDate(subMonths(selectedDate, 1));
          }}
        />
        <h4 className="currentMonth">
          {format(activeDate, "yyyy년 M월", { locale: ko })}
        </h4>
        <AiOutlineRight
          className="navIcon"
          onClick={() => {
            setActiveDate(addMonths(activeDate, 1));
            setDate(addMonths(selectedDate, 1));
          }}
        />
        <div
          className="todayButton"
          onClick={() => {
            setDate(new Date());
            setActiveDate(new Date());
          }}
        >
          {format(new Date(), "d")}
        </div>
      </div>
    );
  };

  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(activeDate);
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <div className="day weekNames">
          {format(addDays(weekStartDate, day), "E", { locale: ko })}
        </div>
      );
    }
    return <div className="weekContainer">{weekDays}</div>;
  };

  const getEvent = (date) => {
    const event = eventArr.filter((day) => {
      let sDate = parseISO(day.start_date);
      let eDate = parseISO(day.end_date);

      return (
        isSameDay(sDate, date) ||
        isSameDay(eDate, date) ||
        (isBefore(sDate, date) && isAfter(eDate, date))
      );
    });
    return event;
  };

  const setDate = (date) => {
    let tempEvent = getEvent(date);
    setSelectedDate(date);
    setEvent(tempEvent);
    if (postEvent) {
      postEvent(tempEvent);
    }
    if (setDay) {
      setDay(date);
    }
  };

  const generateDatesForCurrentWeek = (date, selectedDate, activeDate) => {
    let currentDate = date;
    const week = [];
    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      week.push(
        <div
          className="dayContainer"
          onClick={() => {
            setDate(cloneDate);
          }}
        >
          <div
            className={`day ${
              isSameMonth(currentDate, activeDate) ? "" : "inactiveDay"
            } ${isSameDay(currentDate, selectedDate) ? "selectedDay" : ""}
          ${isSameDay(currentDate, new Date()) ? "today" : ""}`}
          >
            {format(currentDate, "d")}
          </div>
          <div className="events">
            {getEvent(cloneDate).map((e, index) => {
              return (
                <div
                  className={`event ${e.charge}`}
                  key={Math.random() + index}
                >
                  ⦁
                </div>
              );
            })}
          </div>
        </div>
      );
      currentDate = addDays(currentDate, 1);
    }
    return <>{week}</>;
  };

  const getDates = () => {
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;

    const allWeeks = [];

    while (currentDate <= endDate) {
      allWeeks.push(
        generateDatesForCurrentWeek(currentDate, selectedDate, activeDate)
      );
      currentDate = addDays(currentDate, 7);
    }

    return <div className="weekContainer">{allWeeks}</div>;
  };

  return (
    <section className="calendarContainer">
      {getHeader()}
      {getWeekDaysNames()}
      {getDates()}
      {showEvent && (
        <div className="dayEvents">
          {event.map((event) => (
            <div
              key={Math.random()}
              className={`eventDesc event ${event.idUser}`}
            >
              ⦁ &nbsp;{event.title}
            </div>
          ))}

          <button
            className="moreButton"
            onClick={() => navigate("/studentcouncil/calendar")}
          >
            더보기
          </button>
        </div>
      )}
    </section>
  );
}

export default Calendar;

Calendar.defaultProps = {
  showEvent: true,
};
