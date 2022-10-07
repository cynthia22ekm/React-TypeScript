import styled from "styled-components";

export type ProgressVisualizationConfig = {
  type: "progress";
  // value field represents how value passed by aggregation function should be formed
  value: {
    values: [number, number]; // 1st number represents completed, 2nd number total steps
  };
  visualizationOptions: {
    label?: string;
    size?: "slim" | "medium" | "thick";
  };
};
const height = ({ visualizationOptions }: ProgressVisualizationConfig) =>
  visualizationOptions.size === "slim"
    ? "20px"
    : visualizationOptions.size === "medium"
    ? "30px"
    : "40px";

const width = ({ visualizationOptions }: ProgressVisualizationConfig) =>
  visualizationOptions.size === "slim"
    ? "100px"
    : visualizationOptions.size === "medium"
    ? "150px"
    : "200px";

const progresswidth = ({ value }: ProgressVisualizationConfig) =>
  value.values[1] - value.values[0] === 50
    ? "50px"
    : value.values[1] - value.values[0] <= 50
    ? "20px"
    : "100px";

const StyledProgressBar = styled.div<ProgressVisualizationConfig>((props) => {
  return `
height: ${height}
width: ${width}
background:white;
display: flex;
`;
});

const ProgressIndicator = styled.div<ProgressVisualizationConfig>((props) => {
  return `
    background:blue;
    width: ${progresswidth}
    
    `;
});

const ProgressBar: React.FC<ProgressVisualizationConfig> = ({
  type,
  value,
  visualizationOptions,
}) => {
  return (
    <div>
      <StyledProgressBar
        type={type}
        value={value}
        visualizationOptions={visualizationOptions}
      >
        <ProgressIndicator
          type={type}
          value={value}
          visualizationOptions={visualizationOptions}
        ></ProgressIndicator>
      </StyledProgressBar>
      <div>
        {value.values[0]}/{value.values[1]}
      </div>
    </div>
  );
};

export default ProgressBar;
