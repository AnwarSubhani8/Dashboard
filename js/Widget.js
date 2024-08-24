import React from 'react';
import PieChart from './PieChart';

function Widget({ widget, removeWidget }) {
  const hasData = Object.keys(widget.fields).length > 0;

  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      {hasData ? (
        <PieChart data={widget.fields} />
      ) : (
        <p>There is no data for this widget.</p>
      )}
      <button className="remove-widget" onClick={removeWidget}>X</button>
    </div>
  );
}

export default Widget;
