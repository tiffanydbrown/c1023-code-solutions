import { ChangeEvent, useState } from 'react';

type Props = {
  quotes: string[];
};

export function SearchComponent({ quotes }: Props) {
  const [query, setQuery] = useState('');

  const handleSearch = (query: string) => {
    setQuery(query);
  };
  const matchQuotes = quotes.filter((el: string) =>
    el.toLowerCase().includes(query.toLowerCase())
  );

  if (!matchQuotes) {
    return 'No items match the filter.';
  }

  return (
    <div>
      <Search onSearch={handleSearch} />
      <Quotes quotes={matchQuotes} />
    </div>
  );
}

type SearchProps = {
  onSearch: (query: string) => void;
};

function Search({ onSearch }: SearchProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="magsearch">
      <input
        onChange={handleInputChange}
        type="search"
        className="search"
        placeholder="search"></input>
    </div>
  );
}

function Quotes({ quotes }: Props) {
  const quoteList = quotes.map((quote, index) => <li key={index}>{quote}</li>);
  return (
    <ul className="list">
      {quoteList}
      {quotes.length === 0 && <p>'No items match the filter.'</p>}
    </ul>
  );
}
