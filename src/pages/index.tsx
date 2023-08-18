/* istanbul ignore file */
import Main from 'components/mainparent'
import React, { useEffect } from 'react'
import useAPIRouteSwitcher from 'statemanagers/apiRouteManager'

export default function Home() {
  console.log('중요한')
  console.log('NextJS-StarterKit')
  console.log('중요한')

  useEffect(() => {
    if (
      window.location.href === 'http://localhost:3000/' ||
      window.location.href === 'http://localhost:3000'
    ) {
      useAPIRouteSwitcher.setState({
        apiURL: 'http://localhost:8000',
      })
    }

    if (
      window.location.href === 'https://frontend.example.com/' ||
      window.location.href === 'https://frontend.example.com'
    ) {
      useAPIRouteSwitcher.setState({
        apiURL: 'https://backend.example.com',
      })
    }
  }, [])

  return (
    <div>
      <Main />
    </div>
  )
}
