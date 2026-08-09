export interface SegmentBarChart {
  id: string
  label: string
  percentage: number
  color?: string
}

export interface SegmentBarChartProps {
  segments: SegmentBarChart[]
}

export interface LineChartProps {
  size: number[]
  columns: string[]
  rows: string[]
  points: number[][]
  pointSize: string
  pointStrokeWidth: string
}
