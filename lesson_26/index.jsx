import React from 'react';
import ReactDOM from 'react-dom';

const User = (props) => {
  return (
    <div>
     
      <h1>{props.name}</h1>
      <p><a href="tel:{props.tel}">{props.tel}</a></p>  {/* почему не работает в href фигурные скобки */}
      <a href="mailto: props.mail">{props.mail}</a>    {/* почему не работает в href фигурные скобки */}
      <p>{props.work}</p>
      <img src={props.photo} alt=""/>
      
    </div>
  );
};

const Profile = () => {
  return (
    <div>

      <div style={ { backgroundColor: '#BACBD8', border: '1px solid gray', width: "600px", textAlign:"center", boxShadow: "5px 5px 4px 1px #679AB5", marginBottom: "14px"} }>
        <User name="Сaвченко Олександр Анатолійович" mail="vivatukraine@yahoo.com" tel="+38(050)016-92-93" photo="http://pastexen.com/i/FCVrGoTfrN.png" work="Web Developer"/>
      </div>

      <div style={ { backgroundColor: '#E4D368', border: '1px solid #A6962A', width: "600px", textAlign:"center", boxShadow: "5px 5px 4px 1px #A69A4C", marginBottom: "14px"} }>
        <User name="Бара́к Хуссе́йн Оба́ма" mail="obama_krut@ukr.net" tel="+18(007)019-42-93" photo="http://pastexen.com/i/wCbbt2BGRF.png" work="Jobless"/>
      </div>

      <div style={ { backgroundColor: '#80BB99', border: '1px solid #318B56', width: "600px", textAlign:"center", boxShadow: "5px 5px 4px 1px #518B69", marginBottom: "14px"} }>
        <User name="Джеймс Ю́джин Ке́рри" mail="jimmi_rulit@i.ua" tel="+18(061781-13-64" photo="http://pastexen.com/i/nE7Y0Wiutq.png" work="Actor"/>
      </div>

    </div> 
  );
}
const root = document.getElementById('root');

ReactDOM.render (
  <Profile />,
  root,
);