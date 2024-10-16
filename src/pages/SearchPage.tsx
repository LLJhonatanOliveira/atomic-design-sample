import { useState } from 'react';
import { TextInputWithButton } from '../components/molecules/TextInputWithButton';
import { ListWithPagination } from '../components/organisms/ListWithPagination';

export const SearchPage = () => {
  const [query, setQuery] = useState('');

  const onSearch = (value: string) => {
    setQuery(value);
    console.log('Searching for:', value);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl mb-6">Search</h1>

      <TextInputWithButton
        name="search"
        label="Search"
        placeholder="Enter search query"
        onButtonClick={onSearch}
        buttonLabel="Go"
      />

      <ListWithPagination items={query} />
    </div>
  );
};
