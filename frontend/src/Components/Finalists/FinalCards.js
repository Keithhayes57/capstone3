import React from 'react'
import axios from 'axios'
import styles from "./FinalCards.module.css"
const API_BASE = 'http://localhost:8081/'

export default function FinalCards(props) {

    const [phoneButton, setPhoneButton] = React.useState("Call to Order")
    const [restaurant, setRestaurant] = React.useState({
        image: props.image,
        name: props.name,
        url: props.url,
        address: props.address,
        phoneNumber: props.phone,
        userId: props.userId,
        restaurantId: props.restaurantId
    })

    function handlePhone() {
        setPhoneButton(restaurant.phoneNumber)
    }

    function redirect() {
        window.open(restaurant.url) //opening a new tab with the link
    }

    function makeSelection() {
        console.log("here")
    }


  return (
    <div className={styles.card}>

        <img className={styles.cardimg} src={restaurant.image}/>
        <div className={styles.namecontainer}>
            <p className={styles.name}>{restaurant.name}</p>
        </div>
        <a href className={styles.website} onClick={() => redirect()}>{restaurant.url}</a>
    
        <h1 className={styles.address}>{restaurant.address}</h1>
        
        <br></br>
        <input className={styles.cardbutton} type='button' onClick={() => handlePhone()} value={phoneButton}/>
        <br></br>
        <input className={styles.cardbutton} type='button' onClick={() => makeSelection()} value="Select"/>

    </div>
  )
}
