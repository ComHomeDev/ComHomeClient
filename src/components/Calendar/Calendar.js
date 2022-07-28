import React, { useState, useEffect } from "react";
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
const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const [event, setEvent] = useState([]);

  useEffect(() => {
    setEvent(getEvent(selectedDate));
  }, [selectedDate]);

  const getHeader = () => {
    return (
      <div className="calendarHeader">
        <AiOutlineLeft
          className="navIcon"
          onClick={() => {
            setActiveDate(subMonths(activeDate, 1));
            setSelectedDate(subMonths(selectedDate, 1));
          }}
        />
        <h4 className="currentMonth">
          {format(activeDate, "yyyy년 M월", { locale: ko })}
        </h4>
        <AiOutlineRight
          className="navIcon"
          onClick={() => {
            setActiveDate(addMonths(activeDate, 1));
            setSelectedDate(addMonths(selectedDate, 1));
          }}
        />
        <div
          className="todayButton"
          onClick={() => {
            setSelectedDate(new Date());
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
      let sDate = parseISO(day.startDate);
      let eDate = parseISO(day.endDate);

      return (
        isSameDay(sDate, date) ||
        isSameDay(eDate, date) ||
        (isBefore(sDate, date) && isAfter(eDate, date))
      );
    });
    return event;
  };

  const setDate = (date) => {
    setSelectedDate(date);
    setEvent(getEvent(date));
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
                <div className={`event ${e.charge}`} key={e.name + cloneDate}>
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
      <div className="dayEvents">
        {event.map((event) => (
          <div
            key={event.name + event.startDate}
            className={`eventDesc event ${event.charge}`}
          >
            ⦁ &nbsp;{event.name}
          </div>
        ))}

        <button className="moreButton">더보기</button>
      </div>
    </section>
  );
};

export default Calendar;

//타입 alliance 제휴 event 단기이벤트 contest 대회

const eventArr = [
  {
    name: "안과제휴",
    type: "alliance",
    charge: "react",
    startDate: "2022-07-21",
    endDate: "2022-07-30",
    desc: "어쩌구저쩌구행사입니다",
    link: "www.naver.com",
  },
  {
    name: "교보문고 제휴",
    type: "alliance",
    charge: "chanran",
    startDate: "2022-06-21",
    endDate: "2022-07-27",
    desc: "눈이좋아지게해수제요",
    link: "www.naver.com",
  },
  {
    name: "컴공엠티",
    type: "event",
    charge: "react",
    startDate: "2022-07-02",
    endDate: "2022-07-02",
    desc: "mt 또하고싶돠",
    link: "www.naver.com",
  },
  {
    name: "어쩌구대회저쩌구대회",
    type: "contest",
    charge: "official",
    startDate: "2022-07-18",
    endDate: "2022-08-02",
    desc: "뾰로롱...",
    link: "www.naver.com",
  },
];
