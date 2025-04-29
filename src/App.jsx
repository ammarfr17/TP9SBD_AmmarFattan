import React, { useState, useEffect } from "react";

const response = {
  results: [
    {
      id: 1,
      title: "Sunt Aut Facere Repellat",
      body: "Quia et suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut quas totam.",
      image: "https://picsum.photos/500",
    },
    {
      id: 2,
      title: "Qui Est Esse",
      body: "Est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat.",
      image: "https://picsum.photos/500",
    },
    {
      id: 3,
      title: "Ea Molestias Quasi Exercitationem",
      body: "Voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur.",
      image: "https://picsum.photos/500",
    },
    {
      id: 4,
      title: "Eum Et Est Occaecati",
      body: "Ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa.",
      image: "https://picsum.photos/500",
    },
    {
      id: 5,
      title: "Nesciunt Quas Odio",
      body: "Repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus.",
      image: "https://picsum.photos/500",
    },
  ],
};

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 flex justify-between items-center text-white shadow-lg sticky top-0 z-50">
      <div className="font-bold text-2xl">Ammar Web</div>
      <div className="flex space-x-6">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#aboutme" className="hover:underline">About Me</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}

function CardList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
      {response.results.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-semibold text-xl mb-2 text-gray-800">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`Angka ${count} adalah kelipatan 10!`);
    }
  }, [count]);

  return (
    <div className="text-center mt-10">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-600">{count}</h1>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition duration-300"
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition duration-300"
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-gray-500 hover:bg-gray-600 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <Navbar />
      <section id="home" className="py-10">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">Welcome to My App</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          This is a simple React app showcasing a responsive navigation bar, a card grid, and a counter demo.
        </p>
      </section>
      <section id="cards" className="py-10">
        <CardList />
      </section>
      <section id="counter" className="py-10">
        <Counter />
      </section>
    </div>
  );
}

export default App;