import React from 'react';
import './App.css';
import Navmenu from './navbar'
import Intro from './Intro'
import Card from './card2'
import Exper from './experiences'
import Expint from './experintro'
import Links from'./links'
import Dest from './dest'
import Foot from './mainfooter'
function App() {
  return (
    <div className="App">
      <header className="header">
        <Navmenu />
      </header>
      <main className="main">
        <section className="mainintro" >
        <Intro/>
        </section>
      <section className="cards">
      <Card/>
      </section>
      <section >
       <Links/>
      </section>
      <section className="experiences" >
      <Expint />
      <div className="exps"><Exper/></div>
      </section>
      <section  >
       <Dest/>
      </section>
      </main>
      <footer className="footer">
       <Foot/>
      </footer>
    </div>
  );
}

export default App;