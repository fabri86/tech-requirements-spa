/* eslint-disable react/prop-types */

export const Header = ({ activeTab, onHandleTabChange }) => (
  <div className="tabs">
    <button className={activeTab === 0 ? 'active' : ''} onClick={() => onHandleTabChange(0)}>
      Windows
    </button>
    <button className={activeTab === 1 ? 'active' : ''} onClick={() => onHandleTabChange(1)}>
      Mac
    </button>
  </div>
)
