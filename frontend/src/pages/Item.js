import React from 'react';
import '../Item.css';

const data = new Array(10).fill().map((value, index) => ({ id: index, title: "Area", body: "Capacity" }))

function Item() {
  return (
    <div>
      {data.map(((item) => (
        <div key={item.id} className="post">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      )))}
    </div>
  );
}
export default Item;