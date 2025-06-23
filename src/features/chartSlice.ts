import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ChartData = {
  month: string;
  avgTemp: number;
  iceCreamSales: number;
}

const data: ChartData[] = [
  { month: "Jan", avgTemp: 2.3, iceCreamSales: 162000 },
  { month: "Mar", avgTemp: 6.3, iceCreamSales: 302000 },
  { month: "May", avgTemp: 16.2, iceCreamSales: 800000 },
  { month: "Jul", avgTemp: 22.8, iceCreamSales: 1254000 },
  { month: "Sep", avgTemp: 14.5, iceCreamSales: 950000 },
  { month: "Nov", avgTemp: 8.9, iceCreamSales: 200000 }
];

interface ChartState {
  chartType: string;
  chartData: ChartData[];
}

const initialState: ChartState = {
  chartType: 'line',
  chartData: data,
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setChartType(state, action: PayloadAction<string>) {
      state.chartType = action.payload;
    },
    setChartData(state, action: PayloadAction<ChartData[]>) {
      state.chartData = action.payload;
    },
  },
});

export const { setChartType, setChartData } = chartSlice.actions;

export default chartSlice.reducer;
