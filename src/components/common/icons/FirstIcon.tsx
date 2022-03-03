type PropsType = {
  overrideStyle?: any;
};

const FirstIcon = ({ overrideStyle }: PropsType) => {
  return (
    <svg
      viewBox="0 0 20 21"
      style={{
        width: "20px",
        height: "21px",
        marginTop: "4px",
        ...overrideStyle,
      }}
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-368.000000, -1174.000000)" fill="#FFA700">
          <g id="Top1" transform="translate(368.000000, 1174.000000)">
            <path
              d="M10,1.57735027 L18.160254,6.28867513 L18.160254,15.7113249 L10,20.4226497 L1.83974596,15.7113249 L1.83974596,6.28867513 L10,1.57735027 Z"
              stroke="#FFA700"
              fill-opacity="0.2"
            ></path>
            <text
              fontFamily="DINPro-Medium, DINPro"
              fontSize="16"
              fontWeight="400"
            >
              <tspan x="5" y="17">
                1
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default FirstIcon;
