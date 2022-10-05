import React from 'react'
import Emaill from '../src/Pages/Emaill'
import Email from '../src/Pages/Email'
import styled from 'styled-components'


function App() {
  return (
    <Page>
      <Email />
      <Emaill />
    </Page>
  )
}

export default App


const Page = styled.div`
  justify-content: space-between;
  background-color: DarkGrey;
  display: flex;
  flex-wrap: nowrap;
`