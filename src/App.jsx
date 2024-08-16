import { useState, useMemo, useCallback } from 'react'

import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'
import { getSpecs } from './utils/data-mapper'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChanged = useCallback((tabIndex) => {
    setActiveTab(tabIndex)
  }, [])

  const data = useMemo(() => getSpecs(), [])

  const getDataContent = () => {
    return activeTab === 0 ? data[0] : data[1]
  }

  return (
    <div className="app">
      <h1>Tech requirements assessment</h1>
      <Header activeTab={activeTab} onHandleTabChange={handleTabChanged} />
      <Content data={getDataContent()} />
    </div>
  )
}

export default App
