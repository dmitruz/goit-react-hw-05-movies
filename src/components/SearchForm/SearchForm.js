import { useState } from "react";
import PropTypes from 'prop-types';
import { Form, Input, Button } from "./SearchForm.styled";

export default function SearchForm({onSubmit}) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
    setSearchQuery(e.currentTarget.value.toLowerCase().trim());
    };
    

    const handleFormSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value;
    if (searchQuery.trim() === '') {
      alert("Ошибка!Нет такого фильма");
      return;
    }
       onSubmit(searchQuery);
        setSearchQuery('');
   
  };

    return (
      <div>
        <Form onSubmit={handleFormSubmit}>
          <Input
            onChange={handleChange}
            value={searchQuery}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="type to search movies..."
          />
          <Button type="submit">Search</Button> 
        </Form>
      </div>
  );
}



SearchForm.propTypes = {
 onSubmit: PropTypes.func.isRequired,
};