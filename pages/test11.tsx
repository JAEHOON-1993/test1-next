import React, { useState } from 'react';

import Rating from 'components/core/Rating';

interface Props {}

const test11 = (props: Props) => {
  const [rating, setRating] = useState(0);

  const handleChange = (value: number) => {
    setRating(value);
  };

  return (
    <div style={{ margin: '20px' }}>
      <Rating max={5} value={rating} onChange={handleChange} />
    </div>
  );
};

export default test11;
