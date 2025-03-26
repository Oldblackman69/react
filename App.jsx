importuj React, { useState, useEffect } z 'react' ;

 export  default  Api  () {
 // state that stores data
 const [data, setData] =  useState ([]);
 //status of the busy counter
 const [number, setCounter] =  useState ( 0 );

 useEffect (() => {
 //asynchronous function that retrieves data
  datafetch  constant = async() => {
 const response = await fetch ( ' https://randomuser.me/api/?results=5&seed=abc ' );
 const jsonData =  wait for response.json( ) ;
 setData (jsonData);
 }
 //starting the function
 getData ();
 //function runs only once
 }, []);

 function  onClick (event) {
event.preventDefault() ;
 //set counter higher by 1
 setCounter ((realNumber) => realNumber +  1 )
}
 //listing downloaded users
 //button to change counter
 // display counter
 return (
< section >
< h2 >Random User List</ h2 >
 < ul >
{data && data.results && data.results.map ( user => (
 < li klucz = {user.login.uuid}>
 < p >
Name:
{username.firstname}
 </ p >
 < p >
Last name:
{user.name.lastname}
 </ p >
 < p >
Photo:
 < img src = {user.picture.large}></ img >
 </ p >
 </li>
 ))}
 </ ul >
 </ div >
 );
}
