import React from 'react';

const Menu = ({ items }) => {
  return (
    <>
      <div className="menuContainerBox">
        {
          items.map((menuItem) => {
            const { id, title, img, price, desc } = menuItem;
            return (
              <>
                <div key={id} className="menuItem">
                  <img src={img} alt={title} className="itemImage" />
                  <div className="itemInfoBox">
                    <div className="perItem">
                      <h2 className='itemTitle'>{title}</h2>
                      <h4 className='itemPrice'>${price}</h4> 
                    </div>
                    <p className='itemText'>{desc}</p>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
};

export default Menu;
// @mondalcodehub-NOV2022