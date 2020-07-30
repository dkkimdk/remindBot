import * as React from "react";
import './messageForm.css';


const MessageForm = (): JSX.Element => {

    const [utterance, setUtterance] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [time, setTime] = React.useState("");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Phone Number: " + phoneNumber);
        console.log("Utterance: " + utterance);
        console.log("time" +time);
        const apiUrl = "http://localhost:4000/api/start";

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Origin':'http://localhost:8080',
                'Accept':'*'},
            body: JSON.stringify({
              input : {
                message: utterance,
                phoneNumber: phoneNumber,
              }
            })
          });
          const responseJson = await response.json();
          console.log(responseJson);
    }

    return (
       
            <form>
                <label>Phone Number</label>
                <input type="text" onChange= {(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPhoneNumber(e.target.value)}></input>
                <label>Message</label>
                <input type="text"  onChange= {(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUtterance(e.target.value)}></input>
                <label>Time</label>
                <input type="text"  onChange= {(e: React.ChangeEvent<HTMLInputElement>) =>
                    setTime(e.target.value)}></input>
                <p></p>
                <input type="submit" value="Send" onClick={handleSubmit} ></input>
            </form>
    )
}

export default MessageForm;