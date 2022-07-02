import React from 'react';

const CustomRadio = () => {
  return (
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
    </div>
  );
};

export default CustomRadio;
