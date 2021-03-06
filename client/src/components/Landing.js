import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default function Landing() {
  const [menu, setMenu] = useState([])

  setMenuState('/api/menu', setMenu)

  return (
    <Wrapper>
      <ul>
        {menu.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
