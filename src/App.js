import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// all categories extraction
const allCategories = ['all', ...new Set((items.map((item) => item.category)))];
console.log(allCategories);
function App() {

  const [menuItems, setMenuItems] = useState(items)
  // console.log(menuItems);
  const [categories, setCategories] = useState(allCategories);

  // filter category (items)
  const filteritems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <>
      <div className="mainContainer">
        <h1 className='menuth1'>OUR HOTEL MENU  </h1>
        <hr className='underlinehr'/>
        <div className="menuSection">
          <div className="title">
          </div>
          <Categories categories={categories} filteritems={filteritems} />
          <Menu items={menuItems} />
        </div>
      </div>
    </>
  )
}

export default App;
// @mondalcodehub-NOV2022