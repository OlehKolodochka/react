import React, { Component } from 'react';
import './User.css'

class UserComponent extends Component {
   render() {
      let {item, clsName} = this.props
      return (
         <div className={clsName}>
            <div>{"ім'я: " + item.name}</div>
            <div>{"вік: " + item.age}</div>
            <div>{"статус: " + item.status.toString()}</div>
            <hr></hr>
            <div>
               АДРЕСА:
               <div>{"країна: " + item.address.country}</div>
               <div>{"місто: " + item.address.city}</div>
               <div>{"вулиця: " + item.address.street}</div>
               <div>{"номер будинку: " + item.address.houseNumber}</div>
            </div>
         </div>
      );
   }
}

export default UserComponent;
