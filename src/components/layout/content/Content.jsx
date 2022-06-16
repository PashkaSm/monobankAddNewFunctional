import "./ContentStyles.scss";
import LinearGraph from "../../graphs/LinearGraph";
import DonutGrap from "../../graphs/DonutGraph";
import { useState } from "react";
import TransactionList from "../../transactions/TransactionList";
import CardList from "../../cards/CardList";
import date from '../../../data/date.json'

function Content() {
  // Кольори діаграми із файла date.json 
  const colorDiagram = date.categoris.map(item => (item.color));
  // Налаштування лінійного графіка 
  const [userData, setUserData] = useState({
    // Підпис по осі абциса
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Test",
        // дані графіка 
        data: [20, 33, 3, 7, 5, 100, 33, 34, 7, 5],
        // колір графіка 
        backgroundColor: ["rgb(117,83,230)"],
        borderColor: "rgb(22,83,210)",
        // згладення графіка
        tension: 0.4,
        // товщина графіка
        borderWidth: 4,
      },
    ],
  });
  const [userOption, setUserOption] = useState({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
      },
      legend: false,
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
        },
        grid: {
          drawBorder: false,
        },
        position: "top",
      },
      y: {
        display: true,
        title: {
          display: false,
          text: "Value",
        },
        grid: {
          drawBorder: false,
        },
        suggestedMin: 0,
      },
    },
  });
  // Налаштування діаграми  
  const [userDataDounut, setUserDataDounut] = useState({
    datasets: [
      {
        // дані діаграми 
        data: [23, 17, 12, 8, 25, 15, 10],
        // колір
        backgroundColor: colorDiagram,
        borderWidth: 0,
      },
    ],
  });
  const [userOptionDounut, setUserOptionDounut] = useState({
    responsive: true,
    maintainAspectRatio: true,
    cutout: 120,
    plugins: {
      title: {
        display: false,
      },
      // При наведені графік показиватимуться дані про сигмент 
      legend: false,
      tooltip: false,
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: false,
        title: {
          display: false,
        },
        position: "top",
      },
      y: {
        display: false,
        title: {
          display: false,
          text: "Value",
        },
        suggestedMin: 0,
      },
    },
  });
  return (
    <div className="content-wrapper">
      <div className="cards">
        <div className="cards-wrapper">
          {/* Компонента списку карточок */}
          <CardList />
        </div>
      </div>
      <div className="money-wrapper">
        <div className="linear-wrapper">
          {/* Компонента лінійного графіка у якого передаються наступні властивості
          userDate - Дані длі графіка
          userOption - дані для налаштування поля на якому малюється графік
          */}
          <LinearGraph {...userData} charDate={userData} option={userOption} />
        </div>
        <div className="donut-wrapper">
          {/* Компонента діаграми у якого передаються наступні властивості
          userDataDounut - Дані длі діаграми
          userOptionDounut - дані для налаштування поля на якому малюється графік
          colorDiagram - кольори діаграми
          */}
          <DonutGrap charDate={userDataDounut} option={userOptionDounut} colorDounut={colorDiagram} />
        </div>
        <div className="transaction-wrapper">
          {/* Компонента списку витрат */}
          <TransactionList />
        </div>
      </div>
    </div>
  );
}

export default Content;
