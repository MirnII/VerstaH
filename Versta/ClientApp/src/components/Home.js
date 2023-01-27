import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <div className="centerBlock">
            <h3>VERSTA</h3>
            <p>Добро пожаловать на сайт службы доставки Versta.</p>
            <p>Для того чтобы оформить заказ на доставку выберите соответсвующий раздел.</p>
            <p>Для просмотра списка заказов выберите соответствующий раздел.</p>
            <Link className="btn" to="/create-order">Создать заказ</Link>
            <Link className="btn" to="/viewing-orders">Просмотр заказов</Link>
      </div>
    );
  }
}
