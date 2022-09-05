import { Table } from 'reactstrap'
import {React, useState} from 'react'
import axios from "axios";
import { useEffect } from 'react';
import styles from './styles.module.css'

const Stat = () => {

  const userScores = [{
    name: 'user1',
    score: 116
  },]

  const [stat, setStat] = useState(userScores)
  
  useEffect(() => {
    axios.get(`http://localhost:4000/stats`, { withCredentials: true }).then((res) => {
      setStat(res.data)
    })
  }, [])

  return (
    <div className={styles.stat_block}>
      <h2 className='title' id="tt">Leaderboard</h2>
      <div className={styles.table_block}>
      <Table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Player</th>
      <th scope="col">Total scores</th>
    </tr>
  </thead>
  <tbody>
  {stat.map((user, index) => (
    <tr key={user.id}>
        <th scope="row">{index}</th>
        <td>{user?.User?.name}</td>
        <td>{user.score}</td>
    </tr> 
      ))}
  </tbody>
</Table>
      </div>
    </div>
  )
}

export default Stat