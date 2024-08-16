/* eslint-disable react/prop-types */

export const Spec = ({ requirements, requirementLevel }) => {
  return (
    <ul className="spec-list">
      {requirements[requirementLevel].map((req) => (
        <li key={`requirement-${requirementLevel}-title-${req.title}`}>
          <h3>{req.title}</h3>
          {req.spec.split(',').map((entry) => (
            <p key={`title-${requirementLevel}-entry-${entry}`}>{entry}</p>
          ))}
        </li>
      ))}
    </ul>
  )
}
