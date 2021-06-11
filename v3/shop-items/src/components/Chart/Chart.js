import "./Chart.css";
import ChartBar from "./ChartBar";
/**
 *
 * @param {*} props
 * @returns
 */
const chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((p) => (
        <ChartBar
          key={p.label}
          value={p.value}
          maxValue={null}
          label={p.label}
        />
      ))}
    </div>
  );
};

export default chart;
