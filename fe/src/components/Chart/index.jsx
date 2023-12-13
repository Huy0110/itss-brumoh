import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import './style.css'
export default function TrainingChart() {
  return (
    <div className="chart-container">
      <BarChart
        xAxis={[
          {
            id: 'day',
            data: ['Ngày 1', 'Ngày 2', 'Ngày 3', 'Ngày 4', 'Ngày 5', 'Ngày 6', 'Ngày 7'],
            scaleType: 'band'
          }
        ]}
        yAxis={[
          {
            label: 'Bài tập'
          }
        ]}
        series={[
          {
            data: [2, 5, 3, 4, 4, 2, 7]
          }
        ]}
      />
    </div>
  )
}
