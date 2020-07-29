import * as React from "react";
import './messenger.css';
import MessageForm from './messageForm';

function Messenger() {

    
    return (
        <section className="module">
            <header className="top-bar">
                <h1>Messenger</h1>
            </header>
            <ol className="conversation">
                <li className="other">
                    <div className="message">
                    <p>Remind yourself with a message in X hours</p>
                    <time dateTime="2009-11-13T20:00">Messenger Bot</time>
                    </div>
                </li>
                <li className="self">
                    <div className="message">
                    <p> You will be sent this message in X hours</p>
                    <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                    </div>
                </li>
            </ol>
            <div className= "input-bar"> 
            <MessageForm></MessageForm>
            </div>
        </section>
    )
  }

  
export default Messenger;
