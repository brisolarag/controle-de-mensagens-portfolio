import React, { useState, useEffect } from 'react'
import api from '../services/api.js'
import './style/table.css'

const Table = ({search}) => {


    const [messages, setMessages] = useState([]);

    function fetchMessages() {
        api
          .get("/all")
          .then((response) => {
            const data = new Date();
            const options = {weekday: 'long', day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            const dataFormatada = data.toLocaleDateString('pt-BR', options);
            const formatted = response.data.map((msge) => ({
              ...msge,
              createdAt: dataFormatada
            }));
      
            setMessages(formatted);
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }

      useEffect(() => fetchMessages(), [])


      async function removeMessage(iId) {
        await api.delete("/admin/remove", {
            data: {
                id: iId
            }
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          })
      }




  return (
    <div className='table-container'>
        <div className="table-headers">
            <div className="td-header">name</div>
            <div className="td-header">email</div>
            <div className="td-header">message</div>
        </div>

        {messages.map((msg, index) => {
            const {_id, name, email, message, createdAt} = msg;
            const messageName = name.toLocaleLowerCase();
            const messageEmail = email.toLocaleLowerCase();
            const messageMessage = message.toLocaleLowerCase();

            const searchLower = search.toLocaleLowerCase();

            if (!(messageName.includes(searchLower))) {
                return null
            }
            if (!(messageEmail.includes(searchLower))) {
                return null
            }
            if (!(messageMessage.includes(searchLower))) {
                return null
            }

            return (
                <div key={_id}>
                    <div className="table-content">
                        <div className="td-content td-name"><button onClick={() => removeMessage(_id)}></button>{name}</div>
                        <div className="td-content td-email">{email}</div>
                        <div className="td-content td-msg">{message}<button></button></div>
                    </div>
    
                    <div className="header-id"><h5>{_id}</h5></div>
                    <div className="header-date"><h5>{createdAt}</h5></div>
                </div>
                
            )



        })}

    </div>
  )
}

export default Table