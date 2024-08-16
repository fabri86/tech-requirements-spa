/* eslint-disable react/prop-types */

import { Spec } from '../Spec/Spec'

export const Content = ({ data }) => {
  return (
    <div className="content">
      <span className="spec-container">
        <h2>Minimum specs</h2>
        <p>30 FPS</p>
        <Spec requirements={data} requirementLevel="min" />
      </span>
      <span className="spec-container">
        <h2>Recommended specs</h2>
        <p>60 FPS</p>
        <Spec requirements={data} requirementLevel="rec" />
      </span>
    </div>
  )
}
