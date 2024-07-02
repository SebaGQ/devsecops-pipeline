import React from 'react';

const ExamplePage: React.FC = () => {
  const query = new URLSearchParams(window.location.search);
  const name = query.get('name') || 'Guest';

  return (
    <div>
      <h1>Welcome, {name}</h1>
    </div>
  );
};

export default ExamplePage;
