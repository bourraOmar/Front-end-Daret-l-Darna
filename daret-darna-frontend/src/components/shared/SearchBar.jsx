import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const SearchBar = ({ value, onChange, onSubmit, placeholder = 'Rechercher...' }) => (
  <form
    onSubmit={(event) => {
      event.preventDefault();
      onSubmit?.();
    }}
    className="flex w-full gap-2"
  >
    <Input value={value} onChange={(event) => onChange?.(event.target.value)} placeholder={placeholder} />
    <Button type="submit">Rechercher</Button>
  </form>
);

export default SearchBar;
