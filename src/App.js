import React from 'react';
import Data from './Data';
import Header from './Header';
import Content from './Content';
import Copy from './Copy';

function App() {
  return (
    <>
      <Header />
      <Copy />
      {
        Data.map((val) => {
          return (
            <Content
              key={val.id}
              link={val.link}
              imgsrc={val.imgsrc}
              name={val.name}
              population={val.population}
            />
          );
        })}
    </>
  );
}

export default App;
