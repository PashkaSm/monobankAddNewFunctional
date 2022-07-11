import React from "react";
import "./LinearGraphStyles.scss";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function LinearGraph({ charDate, option }) {
  // Для зміни інформації і динамічної зміни ми використовуємо useState
  // userDate потрібний для зміни і використання даних у лінійному графіку
  const [userData, setUserDate] = useState(charDate);
  // Це потрібно для додавання і віднімання класу active 
  const [isActive, setIsActive] = useState(true);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [linearBalance, setLinearBalance] = useState(20444);
  const [linearCurr, setLinearCurr] = useState("USD");
  // Тут описано функції які змінюють юзстейти на трю абож фолс щоб змінити активний клас на не активний
  let changeClass = () => {
    setIsActive(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setLinearBalance(20444);
  };
  let changeClass1 = () => {
    setIsActive(false);
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setLinearBalance(23424);
  };
  let changeClass2 = () => {
    setIsActive(false);
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
    setLinearBalance(29653);
  };
  let changeClass3 = () => {
    setIsActive(false);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
    setLinearBalance(32874);
  };
//  Ця функція потрібна для зміни валют
  const handleClickLinear = (e) => {
    e.preventDefault();
    setLinearCurr(e.currentTarget.innerText);
    setLinearBalance(linearCurr === e.currentTarget.innerText
      ? linearBalance
      : linearCurr === "USD" && e.currentTarget.innerText === "EUR"
      ? Math.floor(linearBalance * 0.9)
      : linearCurr === "USD" && e.currentTarget.innerText === "UAH"
      ?Math.floor(linearBalance * 36)
      : linearCurr === "EUR" && e.currentTarget.innerText === "USD"
      ? Math.floor(linearBalance * 1.1)
      : linearCurr === "EUR" && e.currentTarget.innerText === "UAH"
      ?Math.floor(linearBalance * 39)
      : linearCurr === "UAH" && e.currentTarget.innerText === "EUR"
      ? Math.floor(linearBalance * 0.039)
      : linearCurr === "UAH" && e.currentTarget.innerText === "USD"
      ? Math.floor(linearBalance * 0.036)
      : linearBalance)
  };

  const dayWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dateCosts = [20, 33, 3, 7, 5, 50, 33, 34, 7, 5];
  const dateSets = {
    backgroundColor: "blue",
    borderColor: "blue",
    tension: 0.4,
    borderWidth: 4,
  };
  // У цих функція си змінюємо дані і додаємо активність блоку за допомогою вище описаної функції
  const setGraphWeek = () => {
    setUserDate({
      ...userData,
      labels: dayWeek,
      datasets: [
        {
          data: dateCosts,
          ...dateSets,
        },
      ],
    });
    changeClass();
  };
  const setGraphMounth = () => {
    setUserDate({
      ...userData,
      labels: [...dayWeek, ...dayWeek, ...dayWeek, ...dayWeek,"Mon","Tue"],
      datasets: [
        {
          data: [...dateCosts, ...dateCosts, ...dateCosts],
          ...dateSets,
        },
      ],
    });
    changeClass1();
  };
  const setGraphYear = () => {
    setUserDate({
      ...userData,
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          data: [...dateCosts, 4, 9],
          ...dateSets,
        },
      ],
    });
    changeClass2();
  };
  const setGraphOther = () => {
    setUserDate({
      ...userData,
      labels: dayWeek,
      datasets: [
        {
          data: dateCosts,
          ...dateSets,
        },
      ],
    });
    changeClass3();
  };
  return (
    <>
      <div className="header-graph-line">
        <p>Balance summary</p>
        <ul className="line-day-list">
          {/* при натиску на елемент лі буде змінюватися дані у графіку і додається або забирається клас active */}
          <li className={isActive ? "active" : ""} onClick={setGraphWeek}>
            Week
          </li>
          <li className={isActive1 ? "active" : ""} onClick={setGraphMounth}>
            Mounth
          </li>
          <li className={isActive2 ? "active" : ""} onClick={setGraphYear}>
            Year
          </li>
          <li className={isActive3 ? "active" : ""} onClick={setGraphOther}>
            Other
          </li>
        </ul>
      </div>
      <div className="graph-wrapper">
        {/* Компонента лінійного графіка із бібліотеки react-chartjs-2 */}
        <Line data={userData} options={option} />
      </div>
      <div>
        {/* Також тут виводиться тотальний баланс і реалізована зміна валют */}
        <div className="totalbalans">
          Total balans: <span>{linearBalance}</span>{" "}
          <div className="dropdown-linear">
            <button className="dropbtn-linear">
              {linearCurr}
              <BsChevronDown />
            </button>
            <div className="dropdown-linear-content">
              <button onClick={handleClickLinear}>USD</button>
              <button onClick={handleClickLinear}>EUR</button>
              <button onClick={handleClickLinear}>UAH</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LinearGraph;
