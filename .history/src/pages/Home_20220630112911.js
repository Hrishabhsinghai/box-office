import React, { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchoption] = useState('shows');
  const isShowsSearch = searchOption === 'shows';

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = ev => {
    setSearchoption(ev.target.value);
  };
  console.log(searchOption);

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }

    if (results && results.length > 0) {
      return results[0].show ? <ShowGrid /> : <ActorGrid />;
    }

    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      {/* adding radio buttons */}
      <div>
        <label htmlFor="shows-search">
          Shows
          <input
            id="shows"
            type="radio"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </label>

        <label htmlFor="actors-search">
          Actors
          <input
            id="actors-search"
            type="radio"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>

      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
