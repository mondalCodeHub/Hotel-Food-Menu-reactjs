import React from 'react';

const Categories = ({ categories, filteritems }) => {
  return (
    <>
      <div className="buttonContainer">
        {
          categories.map((category, index) => {
            return (
              <button type='button' className='categoryButton' key={index} onClick={() => filteritems(category)}>
                {category}
              </button>
            )
          })
        }
      </div>
    </>
  )
};

export default Categories;
// @mondalcodehub-NOV2022