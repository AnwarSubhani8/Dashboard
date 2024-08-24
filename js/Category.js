import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetOverlay from './AddWidgetOverlay';

function Category({ category, addWidget, removeWidget }) {
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  const openOverlay = () => setOverlayOpen(true);
  const closeOverlay = () => setOverlayOpen(false);

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {category.widgets.map((widget, index) => (
          <Widget
            key={widget.id}
            widget={widget}
            removeWidget={() => removeWidget(category.name, widget.id)}
          />
        ))}
        {category.widgets.length < 9 && (
          <div className="add-widget" onClick={openOverlay}>
            + Add Widget
          </div>
        )}
      </div>
      {isOverlayOpen && (
        <AddWidgetOverlay
          category={category.name}
          addWidget={addWidget}
          closeOverlay={closeOverlay}
        />
      )}
    </div>
  );
}

export default Category;
