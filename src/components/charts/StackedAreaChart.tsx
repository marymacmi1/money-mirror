import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import Box from '@mui/material/Box';

const margin = { right: 24 };
const uData = [10, 20, 40, 80, 160, 320, 640];
const pData = [20, 40, 80, 160, 320, 640, 1280];
const amtData = [30, 40, 50, 60, 70, 80, 100];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function StackedAreaChart() {
  return (
    <Box sx={{ width: '100%', height: 300 }}>
      <LineChart
        series={[
          { data: uData, label: 'Mortgage', area: true, stack: 'total', showMark: false },
          { data: pData, label: 'Student Loan', area: true, stack: 'total', showMark: false },
          {
            data: amtData,
            label: 'Credit Card',
            area: true,
            stack: 'total',
            showMark: false,
          },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels, height: 28 }]}
        yAxis={[{ width: 50 }]}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            display: 'none',
          },
        }}
        margin={margin}
      />
    </Box>
  );
}