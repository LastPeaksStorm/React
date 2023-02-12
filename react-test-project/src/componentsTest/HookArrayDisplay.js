import React, {useState} from 'react';

function HookArrayDisplay() {
  const [items, setItems] = useState([]);
  
  const pushNewItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }
  console.log(items);
  
  return (
    <div>
      <button onClick={pushNewItem}>Add New Item</button>
      <ul>
        {
          items.map(item => (
            <li key={item.id}>{item.value}</li>
            )
          )
        }
      </ul>
    </div>
  );
}

export default HookArrayDisplay;