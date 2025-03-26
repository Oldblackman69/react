importuj { useState } z "react" ;

 export  default  function  Form () {
 const [name, set_name] =  useState ( "" );
 const [name, setName] =  useState ( "" );
 const [age, setAge] =  useState ( "" );

 const  handleSurname  = (event) => {
event.preventDefault() ;
 setName (event target value);
}
 return (
< form >
{name}< br />< br />
{name}< br />< br />
 {wiek}< br />< br />
< label >
Enter name:
< entry
 typ = "tekst"
 value  = {name}
 onChange = {(e) => ustawNazwę (e.target.value)}
 />
</ label >< br />< br />
< label > Enter your name:
< entry
 typ = "tekst"
 value  = {name}
 onChange = {(e) => ustawNazwisko (e.target.value)}
/>
</ label >Enter age:
< label >
< entry
 type  =  "number"
 value  = {age}
 onChange  = {(e) =>  setAge (e.target.value)}
/>
</ label >< br />< br />
</ form >
 )
}