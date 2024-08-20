import { useState, useMemo, useCallback } from 'react'

import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'
import { getSpecs } from './utils/data-mapper'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const data = useMemo(() => getSpecs(), [])

  const tabNames = useMemo(() => data.map((os) => os.osName), [data])

  const handleTabChanged = useCallback((tabIndex) => {
    setActiveTab(tabIndex)
  }, [])

  return (
    <div className="app">
      <h1>Tech requirements assessment</h1>
      <Header activeTab={activeTab} onHandleTabChange={handleTabChanged} tabNames={tabNames} />
      <Content data={data[activeTab]} />
    </div>
  )
}

export default App
