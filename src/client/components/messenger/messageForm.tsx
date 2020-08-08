import * as React from "react";
import './messageForm.css';


const MessageForm = (): JSX.Element => {

    const [utterance, setUtterance] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [delay, setDelay] = React.useState("");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Phone Number: " + phoneNumber);
        console.log("Utterance: " + utterance);
        console.log("time" +delay);
        const apiUrl = "http://localhost:4000/api/start";

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Origin':'http://localhost:8080',
                'Accept':'*'},
            body: JSON.stringify({
              time: computeDelayedTimestamp(delay),
              input : {
                message: utterance,
                phoneNumber: phoneNumber,
              }
            })
          });
          const responseJson = await response.json();
          console.log(responseJson);
    }


    const computeDelayedTimestamp= (delay:string): Date => {
        const delayObject = parseInt(delay);
        const currentDateObject = new Date();
        currentDateObject.setMinutes( currentDateObject.getMinutes() + delayObject);
        return currentDateObject;
    }

    return (
         <div className= "input-bar"> 
            <form>
                <label>Phone Number</label>
                <input type="text" onChange= {(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPhoneNumber(e.target.value)}></input>
                <label>Message</label>
                <textarea className="messageInput" onChange= {(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setUtterance(e.target.value)}></textarea>
                <label>Minutes Delayed</label>
                <input type="text"  onChange= {(e: React.ChangeEvent<HTMLInputElement>) =>
                    setDelay(e.target.value)}></input>
                <p></p>
                <button  onClick={handleSubmit} > Send</button>
            </form>
        </div>
    )
}

export default MessageForm;