import React from 'react';

export function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (localStorage.getItem('count')) {
      setCount(
        parseInt(localStorage.getItem('count'))
      );
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  function handleClick(event) {
    event.preventDefault();

    setCount(function (previousValue) {
      return previousValue + 1;
    });
  }
  return (
    <a href="#" onClick={handleClick}>
      Count: {count}
    </a>
  );
}
