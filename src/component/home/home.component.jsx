import React from 'react';
import Card from '../Card/Card.component';
import Fixture from '../fixture/fixture.component';



function Home() {
  return (
    <>
    <div className="home-container">
        <Fixture/>
        <Card/>
    </div>
    </>
  )
}

export default Home