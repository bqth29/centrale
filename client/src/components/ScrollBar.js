import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
{/*import { genresOptions } from './genres';*/}

const genresOptions = [
    { value: 'Action', label: 'Action' },
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Children', label: 'Children' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Crime', label: 'Crime' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Fantastic', label: 'Fantastic' },
    { value: 'Fantasy', label: 'Fantasy' },
    { value: 'Heroes', label: 'Heroes' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Musical', label: 'Musical' },
    { value: 'Polar', label: 'Polar' },
    {value: 'Romance', label: 'Romance' },
    { value: 'Sci-Fi', label: 'Sci-Fi' },
    { value: 'Thriller', label: 'Thriller' },
    { value: 'Violence', label: 'Violence' },
    { value: 'Western', label: 'Western' }
    ]

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[genresOptions[13], genresOptions[0], genresOptions[6]]}
      isMulti
      options={genresOptions}
    />
  );
}
