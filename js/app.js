import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import data from './data.json';
import './styles/Dashboard.css';

function App() {
  const [categories, setCategories] = useState(data.categories);

  const addWidget = (categoryName, widget) => {
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.name === categoryName
          ? { ...category, widgets: [...category.widgets, widget] }
          : category
      )
    );
  };

  const removeWidget = (categoryName, widgetId) => {
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.name === categoryName
          ? { ...category, widgets: category.widgets.filter(widget => widget.id !== widgetId) }
          : category
      )
    );
  };

  return (
    <div className="App">
      <Dashboard
        categories={categories}
        addWidget={addWidget}
        removeWidget={removeWidget}
      />
    </div>
  );
}

export default App;
