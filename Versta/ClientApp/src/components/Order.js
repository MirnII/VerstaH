import React, { Component, useState } from "react"
import { useParams } from "react-router-dom";
import "./Order.css";
export class Order extends Component {
    static displayName = Order.name;
    render() {
        return (
            <div >
                <Orderq />
            </div>
            )
    }

}
 function Orderq() {
     const params = useParams();
     const [order, setOrder] = useState();
     const [sendCity, setSendC] = useState();
     const [sendAddress, setSendA] = useState();
     const [recipCity, setRecipC] = useState();
     const [recipAddress, setRecipA] = useState();
     const [cargoWeight, setCargoW] = useState();
     const [pickupDate, setPickupD] = useState();
    fetch(`/api/order/${params.id}`)
        .then(function (response) {
        return response.json()
    })
        .then(function (data) {
            setOrder(data.order)
            setSendC(data.sendCity)
            setSendA(data.sendAddress)
            setRecipC(data.recipCity)
            setRecipA(data.recipAddress)
            setCargoW(data.cargoWeight)
            setPickupD(data.pickupDate)
            
        })
     return (
         <div>
             <div className="leftBlock"></div>
             <div className="rightBlock"></div>
             <div className="centerBlock">
                 <h3>Информация о заказе</h3>
                 <p>Заказ №: <p className="data">{order}</p></p>
                 <p>Город отправителя: <p className="data">{sendCity}</p></p>
                 <p>Адрес отправителя: <p className="data">{sendAddress}</p></p>
                 <p>Город получателя: <p className="data">{recipCity}</p></p>
                 <p>Адрес получателя: <p className="data">{recipAddress}</p></p> 
                 <p>Вес груза(в килограммах): <p className="data">{cargoWeight}</p></p>
                 <p>Дата забора заказа: <p className="data">{pickupDate}</p></p>
             </div>
         </div>
     );
}