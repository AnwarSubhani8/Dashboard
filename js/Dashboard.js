import React from 'react';
import Category from './Category';

function Dashboard({ categories, addWidget, removeWidget }) {
  return (
    <div className="dashboard">
      {categories.map((category, index) => (
        <Category
          key={index}
          category={category}
          addWidget={addWidget}
          removeWidget={removeWidget}
        />
      ))}
    </div>
  );
}

export default Dashboard;
