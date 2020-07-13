import React, { useState, useEffect, useCallback } from "react";
import "./style.scss";

const ChatScroll = () => {
  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: "Nova mensagem recebida",
      type: "me",
    },
    {
      id: 2,
      message: "Mensagem recebida 2",
      type: "me",
    },
    {
      id: 3,
      message: "Mensagem recebida 3",
      type: "other",
    },
    {
      id: 4,
      message: "Nova mensagem recebida 4",
      type: "me",
    },
    {
      id: 5,
      message: "Mensagem recebida 5",
      type: "other",
    },
    {
      id: 6,
      message: "Mensagem recebida 6",
      type: "me",
    },
    {
      id: 7,
      message: "Nova mensagem recebida",
      type: "me",
    },
    {
      id: 8,
      message: "Mensagem recebida 2",
      type: "me",
    },
    {
      id: 9,
      message: "Mensagem recebida 3",
      type: "other",
    },
    {
      id: 10,
      message: "Nova mensagem recebida 4",
      type: "me",
    },
    {
      id: 11,
      message: "Mensagem recebida 5",
      type: "other",
    },
    {
      id: 12,
      message: "Mensagem recebida 6",
      type: "me",
    },
    {
      id: 13,
      message: "Nova mensagem recebida",
      type: "me",
    },
    {
      id: 14,
      message: "Mensagem recebida 2",
      type: "me",
    },
    {
      id: 15,
      message: "Mensagem recebida 3",
      type: "other",
    },
    {
      id: 16,
      message: "Nova mensagem recebida 4",
      type: "me",
    },
    {
      id: 17,
      message: "Mensagem recebida 5",
      type: "other",
    },
    {
      id: 18,
      message: "Mensagem recebida 6",
      type: "me",
    },
  ]);

  useEffect(() => {
    console.log("2");
    setFirstLoad(false);

    return ()=> {
      document.querySelector('.chat-container')?.removeEventListener('scroll', listener);
    }
  }, []);

  useEffect(() =>{
    console.log('3');
  },[messages])

  const scrollElementRef = useCallback((e) => {
    if (e && firstLoad) {
      console.log("1");
      debugger;
      e.scrollTop = e.scrollHeight;
      e.addEventListener("scroll", listener);
    }
  });

  const listener = (e) => {
    if (e.target.scrollTop === 0) {
      debugger
      setMessages(
        [
          ...[{
            id: Math.random(),
            message: "mensagens antigas",
            type: "other",
          }],
          ...messages,
        ]
      );
    }
  };

  const addMessage = () => {
    setMessages([
      ...messages,
      {
        id: Math.random(),
        message: "nova mensagem",
        type: "me",
      },
    ]);
  };

  const loadMore = () => {
    setMessages(
      [
        {
          id: Math.random(),
          message: "mensagens antigas",
          type: "other",
        },
        ...messages,
      ]
    );
  };

  return (
    <>
      {/* {`${firstLoad}`} */}
      <div className="chat-container" ref={scrollElementRef}>
        {messages.length > 0 ? (
          <ul className="chat-container__list">
            {messages.map((msg,index) => (
              <li
                className={`chat-container__list__message --${msg.type}`}
                key={msg.id}
              >
               {msg.id} - {msg.message}
              </li>
            ))}
          </ul>
        ) : loading ? (
          <p>Carregando...</p>
        ) : (
          <p>Não há mensagens</p>
        )}
      </div>
      <button onClick={addMessage}>Nova mensagem</button>
      <button onClick={loadMore}>Load mensagem</button>
    </>
  );
};

export default ChatScroll;
