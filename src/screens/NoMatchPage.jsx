import React from 'react'
import {Link} from 'react-router-dom'
import HomeBar from '../components/header/HomeBar'

function NoMatchPage() {
  return (
    <div style={{
      textAlign: 'center'
    }}>
      <HomeBar title="Erreur 404" />
      <h1>You're so far from your way!</h1>
      <Link to='/'>Back to the right way</Link>
    </div>
  )
}

export default NoMatchPage
