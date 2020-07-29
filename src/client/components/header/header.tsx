import * as React from "react";
import './header.css';
import {
    Link
  } from "react-router-dom"


function onHeaderItem(item: string) {
    console.log(item)
}

function Header( header : {title:string, navigation: string[]}) {
    return (
            <div className= "header" >
                <Link to="/" className = "title" onClick = {() => onHeaderItem(header.title)}>{header.title}</Link>
                <div className = "navList">
                {header.navigation.map(item => (
                    <Link to={"/" + item.toLowerCase()} className= "horizontal" key={item} onClick = {() => onHeaderItem(item)}> {item} </Link>
                ))}
                </div>
            </div>
    )
  }

  
  export default Header;

  