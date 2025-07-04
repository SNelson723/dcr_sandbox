import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChartData, SubSale, DateSale } from "../types";

const data: ChartData[] = [
  { month: "Jan", avgTemp: 2.3, iceCreamSales: 162000 },
  { month: "Mar", avgTemp: 6.3, iceCreamSales: 302000 },
  { month: "May", avgTemp: 16.2, iceCreamSales: 800000 },
  { month: "Jul", avgTemp: 22.8, iceCreamSales: 1254000 },
  { month: "Sep", avgTemp: 14.5, iceCreamSales: 950000 },
  { month: "Nov", avgTemp: 8.9, iceCreamSales: 200000 },
];

interface ChartState {
  chartType: string;
  chartData: ChartData[];
  subSales: SubSale[];
  dateSales: DateSale[];
}

const initialState: ChartState = {
  chartType: "line",
  chartData: data,
  subSales: [],
  dateSales: [],
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    setChartType(state, action: PayloadAction<string>) {
      state.chartType = action.payload;
    },
    setChartData(state, action: PayloadAction<ChartData[]>) {
      state.chartData = action.payload;
    },
    setSubSales(state, action: PayloadAction<SubSale[]>) {
      state.subSales = action.payload;
    },
    setDateSales(state, action: PayloadAction<DateSale[]>) {
      state.dateSales = action.payload;
    },
  },
});

export const { setChartType, setChartData, setSubSales, setDateSales } = chartSlice.actions;

export default chartSlice.reducer;
