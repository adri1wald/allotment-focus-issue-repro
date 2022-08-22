import { useEffect, useRef } from 'react'
import { Allotment } from 'allotment'
import 'allotment/dist/style.css'
import './App.css'

export function App() {
  return (
    // <Allotment defaultSizes={[100]}>
    <Allotment>
      <Allotment.Pane>
        <FocusOnMount />
      </Allotment.Pane>
    </Allotment>
  )
}

export function AppNoAllotment() {
  return <FocusOnMount />
}

function FocusOnMount() {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [])
  return (
    <input ref={ref} />
  )
}

export default App
