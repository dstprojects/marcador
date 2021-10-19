import { useEffect, useState } from "react";

import { Player } from "./components/Player";
import { useSocket } from "./hooks/useSocket";


function App() {

  const [players, setPlayers] = useState([])
  
  const {socket, onLine} = useSocket('https://score-server-z.herokuapp.com/')


  useEffect(() => {
        
    socket.on('current-players', (players) => {
      setPlayers(players)
    })
    
  }, [socket])

  const aumentar = (uid) => {
    socket.emit('aumentar', uid );
  }

  const disminuir = (uid) => {
    socket.emit('disminuir', uid );
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
          key={player.uid}
          uid={player.uid}
        />)
      }
    </div>
  );
}

export default App;
