import "./ChartBar.css";
/**
 *
 */
const chartBar = (props) => {
  let vFillTheHeight = "0%";

  if (props.max > 0) {
    vFillTheHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{
            height: vFillTheHeight,
          }}
        ></div>
      </div>
      <div className="chart-bar__label"></div>
    </div>
  );
};

export default chartBar;
