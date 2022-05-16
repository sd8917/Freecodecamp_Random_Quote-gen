import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./quoteStyle.css";

const QuoteContainer = (props) => {
  // --------------------- Initialization of state using the USESTATE HOOKS  -----------------//
  const [list, setList] = useState(props.list[Math.floor(Math.random() * 11)]);
  const [shareContent, setShareContent] = useState("");

  // const { id, quote, color, author } = props.list;
  // ----------------       Event got trigger when NEW QUOTE Button clicked!  ------------------ //
  const handleClick = () => {
    console.log(Math.floor(Math.random() * 11));
    try {
      // Do something that could throw
      setList(props.list[Math.floor(Math.random() * 11) + 1]);
    } catch (error) {
      setList("error");
    }
  };

  // ----------------       Event got trigger when TWITTER SHARE Button clicked!  ------------------ //
  const shareOnTwitter = (content) => {
    setShareContent(content);
    window.location.href = `https://twitter.com/intent/tweet?text=${content}`;
  };
  // ----------------       Event got trigger when TUMBLR SHARE Button clicked!  ------------------ //
  const shareOnTumblr = (content) => {
    setShareContent(content);
    window.location.href = `https://www.tumblr.com/explore/trending?source=${content}`;
  };

  return (
    <div id="quote-box">
      <div id="text" className="text-center">
        <p>
          <i
            class="fa fa-quote-left"
            aria-hidden="true"
            style={{
              color: `${list.color}`,
            }}
          ></i>
          {"  "}
          &nbsp;
          <span
            className="para"
            style={{
              color: `${list.color}`,
            }}
          >
            {list.quote}.
          </span>
        </p>
      </div>
      <div
        id="author"
        style={{
          color: `${list.color}`,
        }}
      >
        - {list.author}
      </div>

      <div className="row bg-white">
        <div className="col-8">
          <button
            className="px-3 py-2"
            id="social-btn"
            style={{
              backgroundColor: `${list.color}`,
            }}
            title="Tweet this quote!"
          >
            <a
              id="tweet-quote"
              onClick={() => shareOnTwitter(list.quote)}
              href="https://twitter.com/intent/tweet?text=Helloworld"
            >
              <i
                class="fa-brands fa-twitter fa-3x"
                style={{
                  color: "white",
                  fontSize: "30px",
                }}
              ></i>
            </a>
          </button>
          <span className="px-2"></span>
          <button
            onClick={() => shareOnTumblr(list.quote)}
            className="py-2 px-4"
            id="tumblr-quote"
            style={{
              backgroundColor: `${list.color}`,
            }}
            title="Post this quote on tumblr!"
          >
            <i
              class="fa-brands fa-tumblr fa-3x"
              style={{
                color: "white",
                fontSize: "30px",
                borderRadius: "10px",
              }}
            ></i>
          </button>
        </div>
        <div className="col-4">
          <button
            id="new-quote"
            onClick={handleClick}
            style={{
              backgroundColor: `${list.color}`,
            }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteContainer;
