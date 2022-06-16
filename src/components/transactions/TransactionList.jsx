import "./TransactionStyles.scss";
import TransactionItem from "./TransactionItem";
import { transaction, datee } from "../../data/Transaction";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
// У даній компоненті було реалізований фільтр по категоріях
function TransactionList() {
  const [curr, setCurr] = useState("Any currency");
  const [categ, setCateg] = useState("Any categories");

  const handleClickCat = (e) => {
    e.preventDefault();
    setCateg(e.currentTarget.innerText);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setCurr(e.currentTarget.innerText);
  };

  return (
    <div className="transaction-block">
      <div className="transaction-header">
        <div>Transaction history</div>
        <ul>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                {curr}
                <BsChevronDown />
              </button>
              <div className="dropdown-content">
                {/* При натиску на кнопку змінюється юзстейт на обраний */}
                <button onClick={handleClick}>Any currency</button>
                <button onClick={handleClick}>USD</button>
                <button onClick={handleClick}>EUR</button>
                <button onClick={handleClick}>BITCOIN</button>
                <button onClick={handleClick}>UAH</button>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                {categ}
                <BsChevronDown />
              </button>
              <div className="dropdown-content">
                {/* При натиску на кнопку змінюється юзстейт на обраний */}
                <button onClick={handleClickCat}>Any categories</button>
                <button onClick={handleClickCat}>Mobile and Internet</button>
                <button onClick={handleClickCat}>Vehicle and Transport</button>
                <button onClick={handleClickCat}>Clothes and Shoes</button>
                <button onClick={handleClickCat}>Cafe and Restaurant</button>
                <button onClick={handleClickCat}>House and Services</button>
                <button onClick={handleClickCat}>Other expenses</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="trans-list-wrapper">
        {/* 
        Якщо категорія і валюта дорівнюють даним значеням  
        categ === "Any categories" && curr === "Any currency"
        то будуть виведені усі транзкції
        Якщо категорія і валюта дорівнюють даним значеням
        categ === "Any categories" && curr !== "Any currency"
        то будуть виведені транзакції обраної валюти 
        Якщо категорія і валюта дорівнюють даним значеням
        categ !== "Any categories" && curr === "Any currency"
        то будуть виведені транзакції обраної категорі 
        Якщо категорія і валюта дорівнюють різним значенням 
        то буде веведіні транзакції даних значень

        Також у компоненту будуть передані потрібні дані а саме
        transItem - інформація про транзакції 
        bgLogo - колір фону логотипу транзакції
        */}
        {categ === "Any categories" && curr === "Any currency"
          ? transaction.map((item) => (
              <TransactionItem
                key={item.id}
                transItem={item}
                bgLogo={item.color}
              />
            ))
          : categ === "Any categories" && curr !== "Any currency"
          ? transaction
              .filter((item) => item.current === curr)
              .map((item) => (
                <TransactionItem
                  key={item.id}
                  transItem={item}
                  bgLogo={item.color}
                />
              ))
          : categ !== "Any categories" && curr === "Any currency"
          ? transaction
              .filter((item) => item.type === categ)
              .map((item) => (
                <TransactionItem
                  key={item.id}
                  transItem={item}
                  bgLogo={item.color}
                />
              ))
          : transaction
              .filter((item) => item.type === categ && item.current === curr)
              .map((item) => (
                <TransactionItem
                  key={item.id}
                  transItem={item}
                  bgLogo={item.color}
                />
              ))}
      </div>
    </div>
  );
}

export default TransactionList;
