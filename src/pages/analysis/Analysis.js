import "./analysis.css";
import DonutChart from "react-donut-chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const reactDonutChartdata = [
  {
    label: "Happy",
    value: 25,
    color: "#00E396"
  },
  {
    label: "Sad",
    value: 65,
    color: "#FEB019"
  },
  {
    label: "Disgusting",
    value: 100,
    color: "#FF4560"
  },
  {
    label: "Satisfaction",
    value: 15,
    color: "#775DD0"
  },
  {
    label: "Love",
    value: 20,
    color: "#775DD0"
  },

];

const data = [
  {
    name: 'Happy',
    uv: 4000,
    
  },
  {
    name: 'Sad',
    uv: 3000,
 
  },
  {
    name: 'Disgusting',
    uv: 2000,
    
  },
  {
    name: 'Satisfaction',
    uv: 2780,
  
  },
  {
    name: 'Love',
    uv: 1890,
  },
  
];

const reactDonutChartBackgroundColor = [
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
  "#38b6ff"
];
const reactDonutChartInnerRadius = 0.5;
const reactDonutChartSelectedOffset = 0.04;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};
let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item) => {
  let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};

export default function Analysis() {
  return (
 
    <div className="analysis">

        <ResponsiveContainer width="50%" aspect={2}>
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{stroke:"white"}} />
                  <YAxis tick={{stroke:"white"}} />
                  <Tooltip />
                  
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#00E396" />
                </BarChart>
        </ResponsiveContainer>
        
      <DonutChart
        width={500}
        onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
        strokeColor={reactDonutChartStrokeColor}
        data={reactDonutChartdata}
        colors={reactDonutChartBackgroundColor}
        innerRadius={reactDonutChartInnerRadius}
        selectedOffset={reactDonutChartSelectedOffset}
        onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
      />
    </div>

    
  );
}