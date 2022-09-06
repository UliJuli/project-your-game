import { Table, Button } from 'reactstrap'
import {React, useState} from 'react'
import axios from "axios";
import { useEffect } from 'react';
import styles from './styles.module.css'

import * as XLSX from 'xlsx'

const Stat = () => {
  const userScores = [
    {
      name: "user1",
      score: 116,
    },
  ];

  const [stat, setStat] = useState(userScores);

  useEffect(() => {
    axios
      .get('http://localhost:4000/stats', { withCredentials: true })
      .then((res) => {
        setStat(res.data);
      });
  }, []);

  const getData = () => {
    let wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(stat);

    XLSX.utils.book_append_sheet(wb,ws,'MySheet1');

    XLSX.writeFile(wb, 'MyExcel.xlsx');
  }
  
  return (
    <div className={styles.stat_block}>
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
      <button onClick={getData} type="submit"className="btn btn-primary">Get Data</button>
    </div>
  )
}

export default Stat;