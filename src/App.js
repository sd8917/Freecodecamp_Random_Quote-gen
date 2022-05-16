import QuoteContainer from "./components/QuoteContainer";
import "./style.css";
function App() {
  const listQuote = [
    {
      id: 1,
      quote:
        "The most common way people give up their power is by thinking they don’t have any",
      color: "lightpink",
      author: "Alice Walker",
    },
    {
      id: 2,
      quote:
        "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
      color: "orange",
      author: "Jesse Owens",
    },
    {
      id: 3,
      quote: "When I let go of what I am, I become what I might be",
      color: "blue",
      author: "Lao Tzu",
    },
    {
      id: 4,
      quote: "An unexamined life is not worth living",
      color: "green",
      author: "Socrates",
    },

    {
      id: 5,
      quote: "Education costs money. But then so does ignorance",
      color: "#2d8196",
      author: "Sir Claus Moser",
    },
    {
      id: 6,
      quote:
        "If you want your children to turn out well, spend twice as much time with them, and half as much money",
      color: "pink",
      author: "Abigail Van Buren",
    },
    {
      id: 7,
      quote: "Fall seven times and stand up eight",
      color: "purple",
      author: "Japanese Proverb",
    },
    {
      id: 8,
      quote:
        "Happiness is not something readymade. It comes from your own actions.",
      color: "#597717",
      author: "Dalai Lama",
    },
    {
      id: 9,
      quote:
        "Happiness is not something readymade. It comes from your own actions.",
      color: "#563d7c;",
      author: " Dalai Lama",
    },
    {
      id: 10,
      quote: "Definiteness of purpose is the starting point of all achievement",
      color: "#1a7982",
      author: "W. Clement Stone",
    },
  ];

  return (
    <div className="main">
      <QuoteContainer list={listQuote} />
    </div>
  );
}

export default App;
