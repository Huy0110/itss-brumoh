import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import './style.css'
export default function TrainingChart({exercises}) {
  let day = [1, 2, 3, 4, 5, 6, 7]
  let exerciseCount = [0, 0, 0, 0, 0, 0, 0]
  if (exercises && exercises.length>0) {
    day = exercises.map((item) => item.day)
    exerciseCount= exercises.map((item) => item.exerciseCount)
  }
  return (
    <div className="chart-container">
      <BarChart
        xAxis={[
          {
            label: 'Ngày',
            id: 'day',
            data: day,
            scaleType: 'band'
          }
        ]}
        yAxis={[
          {
            label: 'Số bài tập'
          }
        ]}
        series={[
          {
            data: exerciseCount
          }
        ]}
      />
    </div>
  )
}
