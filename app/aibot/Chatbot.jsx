// import { useState } from 'react';

const Chatbot = () => {
  //   const [userInput, setUserInput] = useState('');
  //   const [chatHistory, setChatHistory] = useState([]);

  const geminiAction = async (formData) => {
    'use server';
    console.log(formData.get('userInput'));

    // 调用 Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env.GOOGLE_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: formData.get('userInput') }],
            },
          ],
        }),
      },
    );

    const data = await response.json();
    console.log(data.candidates[0].content.parts[0].text);
    //     setChatHistory([
    //       ...chatHistory,
    //       { user: userInput, bot: data.candidates[0].output },
    //     ]);
    //     setUserInput('');
    //   };
  };

  return (
    <div className="rounded-lg bg-gray-100 p-4 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Chatbot</h2>

      <div className="max-h-96 overflow-y-auto">
        {/* {chatHistory.map((message, index) => (
          <div key={index} className="mb-2">
            <span className="font-bold">User:</span> {message.user}
            <br />
            <span className="font-bold">Bot:</span> {message.bot}
          </div>
        ))} */}
      </div>

      <form action={geminiAction}>
        <input
          type="text"
          className="w-full rounded-md border p-2"
          name="userInput"
          placeholder="您有什么情绪困扰吗？"
          //   value={userInput}
          //   onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
