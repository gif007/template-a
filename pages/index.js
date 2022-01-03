import React, {useState} from 'react'
import Layout from '../components/layout.component'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  if (isAuthenticated) {
    return (
      <Layout>
        <p>You are successfully logged in</p>
        <button onClick={() => setIsAuthenticated(false)} type="button">Log out</button>
      </Layout>
    )
  }
  return (
    <div>
      <p>You are not logged in</p>
      <button onClick={() => setIsAuthenticated(true)} type="button">Log in</button>
    </div>
  )
}
