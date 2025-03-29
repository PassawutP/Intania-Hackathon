import React from 'react'


const Result: React.FC = () => {

  const playerList = [
    {
      name: "Player 1",
      score: 5000
    },
    {
      name: "Player 2",
      score: 3800
    },
    {
      name: "Player 3",
      score: 2100
    },
  ]
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "6rem auto", alignItems: "center", width: "80vw" }}>
      <h1 style={{ fontSize: "72px" }}>Match Results</h1>
      <table style={{ width: "50%", borderWidth: "2px", borderColor: "black", borderStyle: "solid", borderRadius: "20px", border: "1" }}>
        <thead style={{ fontSize: "20px" }}>
          <tr style={{ display: "flex", width: "90%", margin: "1rem auto" }}>
            <th style={{ width: "10%" }}>No.</th>
            <th style={{ width: "10%" }}></th>
            <th style={{ width: "60%", textAlign: "left", paddingLeft: "3rem" }}>Name</th>
            <th style={{ width: "20%" }}>Score</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: "20px" }}>
          {playerList.map((player, index) => (
            <tr key={index} style={{ display: "flex", borderColor: "black", borderStyle: "solid", borderRadius: "20px", width: "90%", margin: "1rem auto", padding: "0px", height: "4rem", alignItems: "center" }}>
              <td style={{ width: "10%", textAlign: "center" }}>{index + 1}</td>
              <td style={{ width: "10%", display: "flex", justifyContent: "right" }}>
                <div style={{ background: "cyan", borderRadius: "50%", width: "3rem", height: "3rem" }}></div>
              </td>
              <td style={{ width: "60%", textAlign: "left", paddingLeft: "3rem" }}>{player.name}</td>
              <td style={{ width: "20%", textAlign: "center", fontWeight: "bold" }}>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex", justifyContent: "space-around", width: "50%", marginTop: "3rem" }}>
        <button style={{ background: "white", borderRadius: "10px", padding: "1rem" }}>Return to Lobby</button>
        <button style={{ background: "black", color: "white", borderRadius: "10px", padding: "1rem" }}>Requeue</button>
      </div>
    </div >
  )
}

export default Result