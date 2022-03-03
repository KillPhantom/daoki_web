type PropsType = {
  overrideStyle?: any;
};

const ThirdIcon = ({ overrideStyle }: PropsType) => {
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
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-368.000000, -1337.000000)" fill="#3AC28D">
          <g transform="translate(368.000000, 1337.000000)">
            <path
              d="M10,1.57735027 L18.160254,6.28867513 L18.160254,15.7113249 L10,20.4226497 L1.83974596,15.7113249 L1.83974596,6.28867513 L10,1.57735027 Z"
              stroke="#3AC28D"
              fillOpacity="0.2"
            ></path>
            <text
              fontFamily="DINPro-Medium, DINPro"
              fontSize="16"
              fontWeight="400"
            >
              <tspan x="6" y="17">
                3
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ThirdIcon;
