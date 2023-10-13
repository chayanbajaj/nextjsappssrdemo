import React from 'react';

const HomePage = ({ items }) => {
  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div> {item.name} </div>
            <div> {item.price} </div>
            <div> {item.category} </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/items');
    const items = await res.json();
  
    return {
      props: {
        items,
      },
    };
  }