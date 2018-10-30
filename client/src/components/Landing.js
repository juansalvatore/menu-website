import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Landing() {
  const [menu, setMenu] = useState([])

  setMenuState('/api/menu', setMenu)

  return (
    <>
      <ul>
        {menu.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}

function setMenuState(url, setState) {
  useEffect(
    async () => {
      const resp = await axios.get(url)
      const data = await resp.data
      setState(data)
    },
    [url]
  )
}
