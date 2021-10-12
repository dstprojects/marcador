import { useEffect, useState } from "react";

import { Player } from "./components/Player";
import { useSocket } from "./hooks/useSocket";
// import { useLoginStore } from "./store/useLoginStore";


function App() {

  const [players, setPlayers] = useState([])
  // const {login} = useLoginStore();
  
  const {socket, onLine} = useSocket('https://score-server-z.herokuapp.com/')


  useEffect(() => {
        
    socket.on('current-players', (players) => {
      setPlayers(players)
    })
    
  }, [socket])

  const aumentar = (id) => {
    socket.emit('aumentar', id );
  }

  const disminuir = (id) => {
    socket.emit('disminuir', id );
  }


  return (
    <div className="container">
      <div className="title">
        <h1>Score</h1>
        <div style={{backgroundColor: onLine ? "green" : "red"}}></div>
      </div>
      {
        players.map((player) => <Player 
          name={player.name} 
          score={player.votes} 
          aumentar={aumentar} 
          disminuir={disminuir} 
          key={player.id}
          id={player.id}
        />)
      }
    </div>
  );
}

export default App;
