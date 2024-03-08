import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// const pizzas = pizzaData.map((props) => {
//   return console.log("props");
// });
// pizzas;

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1>Cyber Company Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  // const pizzas = pizzaData;
  const pizzas = [];
  const pizzaNum = pizzas.length;
  return (
    <main className="menu">
      <h2>This is our pizza menu</h2>
      {/* <Pizza
        imageSrc="pizzas/focaccia.jpg"
        imageAlt="Just an image of pizza"
        pizzaName="Pizza one"
        pizzaIngredients="Tomato, mozarella, spinach, and ricotta cheese"
        pizzaPrice="10"
      />
      <Pizza
        imageSrc="pizzas/funghi.jpg"
        imageAlt="Just an image of pizza"
        pizzaName="Pizza two"
        pizzaIngredients="Tomato, mozarella, spinach, and ricotta cheese"
        pizzaPrice={10}
      /> */}

      <ul className="pizzas">
        {pizzaNum > 0 ? (
          pizzas.map((pizza) => (
            <li className="pizza">
              <img src={pizza.photoName} alt="" />
              <div>
                <h3>Name: {pizza.name}</h3>
                <p>Ingredients: {pizza.ingredients}</p>
                <span>Price: {pizza.price}</span>
                <p>Sold Out: {pizza.soldOut}</p>
              </div>
            </li>
          ))
        ) : (
          <p className="order">
            Pizzas are currently over!!. We are working on them
          </p>
        )}
      </ul>
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We are open until {closeHour}:00, make an order now not to miss out
          </p>
          <button className="btn">Order Now</button>
        </div>
      )}
    </footer>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
