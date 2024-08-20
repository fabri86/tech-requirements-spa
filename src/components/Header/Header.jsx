/* eslint-disable react/prop-types */

export const Header = ({ activeTab, onHandleTabChange, tabNames }) => (
  <div className="tabs">
    {tabNames.map((tabName, index) => (
      <button
        key={`os-tab-${index}-${tabName}`}
        aria-label={`select ${tabName} tab`}
        className={activeTab === index ? 'active' : ''}
        onClick={() => onHandleTabChange(index)}
      >
        {tabName}
      </button>
    ))}
  </div>
)
