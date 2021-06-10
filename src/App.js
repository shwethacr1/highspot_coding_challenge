import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Search from "./components/Search";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const LIMIT = 20;
  const loader = useRef(null);
  const [noMoreResults, setNoMoreResults] = useState(false);
  const URL = "https://api.elderscrollslegends.io/v1/cards";

  // api call to get cards
  const getCards = async () => {
    await axios
      .get(`${URL}?name=${submittedQuery}&pageSize=${LIMIT}&page=${pageNumber}`)
      .then((res) => {
        setCards([...cards, ...res.data.cards]);
        setIsLoading(false);
      })
      .catch((err) => {
        setNoMoreResults(true);
      });
  };

  // Used for infinite scroll to load 20 cards each time
  const getMoreCards = () => {
    setPageNumber(pageNumber + 1);
    getCards();
  };

  window.onbeforeunload = () => {
    window.scrollTo({
      top: 0,
    });
  };

  //To load 20 data on initial page load

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (loader.current) {
      observer.observe(loader.current);
    }
    getCards(); //eslint-disable-next-line
  }, [submittedQuery]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPageNumber((pageNumber) => pageNumber + 1);
    }
  };

  //To handle search on submit click

  const handleSearchSubmit = (event) => {
    if (query) {
      event.preventDefault();
    }
    setCards([]);
    setPageNumber(1);
    setSubmittedQuery(query);
  };

  //To handle search on change of the search value

  const handleSearchNameChange = (event) => {
    const target = event.target;
    var value = target.value;
    setQuery(value);
  };

  return (
    <div className="container">
      <Search
        handleSearchNameChange={handleSearchNameChange}
        handleSearchSubmit={handleSearchSubmit}
      />
      <InfiniteScroll
        dataLength={cards.length}
        next={getMoreCards}
        hasMore={true}
      >
        <Cards
          isLoading={isLoading}
          cards={cards}
          getPage={(pageNum) => setPageNumber(pageNum)}
        />
      </InfiniteScroll>
      {!noMoreResults && <div ref={loader}></div>}
    </div>
  );
}

export default App;
