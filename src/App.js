import { useState, useRef } from "react";
import LocaleSwitcher from './LocaleSwitcher/LocaleSwitcher.js';
import Seed from "./Seed/Seed.js";
import { IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';
import LikeSlider from "./LikeSlider/LikeSlider.js";
import Review from "./Review/Review.js";
import BooksTable from "./BooksTable/BooksTable.js";
import ExportButton from "./ExportButton/ExportButton.js";
import { useEffect } from "react";
import generateRandomNumber from "./utils/generate-random-number.js";
import generateBooksList from "./utils/generate-books-list.js";

function App() {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
  const [seedValue, setSeedValue] = useState(generateRandomNumber());
  const [likesValue, setLikesValue] = useState(0);
  const [reviewValue, setReviewValue] = useState(0);
  let offset = useRef(0);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    setBookList(generateBooksList(currentLocale, seedValue, likesValue, reviewValue, offset.current));
    offset.current += 10;
    setBookList((prev) => [...prev, ...generateBooksList(currentLocale, seedValue, likesValue, reviewValue, offset.current)]);
    offset.current += 10;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      offset.current = 0;
    };
  }, [seedValue, currentLocale, likesValue, reviewValue]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      offset.current += 10;
      setBookList((prev) => [...prev, ...generateBooksList(currentLocale, seedValue, likesValue, reviewValue, offset.current)]);
    };
  };

  const handleChangeLocale = ({ target: { value } }) => {
    setCurrentLocale(value);
    localStorage.setItem("locale", value);
    setBookList([]);
  };

  function getInitialLocale() {
    const savedLocale = localStorage.getItem('locale');
    return savedLocale || LOCALES.ENGLISH;
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div>
        <div className="header">
          <LocaleSwitcher currentLocale={currentLocale} handleChangeLocale={handleChangeLocale} />
          <Seed seedValue={seedValue} handleChangeSeedValue={setSeedValue} getRandomNumber={generateRandomNumber} />
          <LikeSlider handleChangeLikesValue={setLikesValue} />
          <Review handleChangeReviewValue={setReviewValue} reviewValue={reviewValue} />
          <ExportButton bookList={bookList} />
        </div>
        <div  className="table">
          <BooksTable bookList={bookList} />
        </div>
      </div>
    </IntlProvider>
  );
};

export default App;
