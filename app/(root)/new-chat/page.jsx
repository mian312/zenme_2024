'use client';

import React, { useState, useEffect, useRef } from 'react';

const NewChat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedSuggestion = sessionStorage.getItem('suggestion');
    if (storedSuggestion) {
      setMessages([{ role: 'assistant', content: storedSuggestion }]);
    }
  }, []);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const chatContainerRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    // Add user's message to the chat
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput(''); // Clear input
    setLoading(true); // Show loading state and disable button
    setError(false); // Reset error state

    try {
      // Call the API with the previous messages and the latest user input
      const response = await fetch('/api/llm/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();
      if (data && data.reply) {
        // Add assistant's response to the chat (fix role to 'assistant')
        setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: data.reply }]);
      } else {
        setError(true); // Set error state if assistant response is empty
      }
    } catch (error) {
      console.error('Error fetching assistant response:', error);
      setError(true); // Set error state if there is an error fetching assistant response
    } finally {
      setLoading(false); // Remove loading state and re-enable button
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage(); // Send message when Enter key is pressed
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat container when messages are updated
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div style={{ backgroundImage: `url('/images/chat/chat-bg.png')` }}>
      <div className="flex flex-col h-screen max-w-2xl mx-auto p-4 bg-cover bg-center">
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto bg-gray-100 p-4 rounded-lg shadow-md mb-4"
        >
          {messages.map((message, index) => (
            <div key={index} className={`flex mb-4 items-start ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.role === 'assistant' && (
                <img
                  src="/images/chat/bot-avatar.png"
                  alt="Bot"
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <div
                className={`p-3 rounded-md max-w-xs ${message.role === 'user'
                  ? 'bg-blue-500 text-white self-end'
                  : 'bg-gray-300 text-black self-start'
                  } break-words whitespace-pre-wrap`}
              >
                {message.content}
              </div>
              {message.role === 'user' && (
                <img
                  src="/images/chat/user-avatar.png"
                  alt="User"
                  className="w-8 h-8 rounded-full ml-2"
                />
              )}
            </div>
          ))}
          {loading && (
            <div className="flex items-start justify-start mb-4">
              <img
                src="/bot-avatar.png"
                alt="Bot"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div className="p-3 rounded-md bg-gray-300 text-black self-start">
                Assistant is typing...
              </div>
            </div>
          )}
          {error && (
            <div className="flex items-start justify-start mb-4">
              <img
                src="/bot-avatar.png"
                alt="Bot"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div className="p-3 rounded-md bg-red-500 text-white self-start">
                Server is down. Please try again later.
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading} // Disable input while loading
          />
          <button
            onClick={sendMessage}
            disabled={loading} // Disable button while loading
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewChat;
