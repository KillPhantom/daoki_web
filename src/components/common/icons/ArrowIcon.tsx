type PropsType = {
  overrideStyle?: any;
};

const ArrowIcon = ({ overrideStyle }: PropsType) => {
  return (
    <svg
      viewBox="0 0 16 16"
      style={{
        height: "16px",
        width: "16px",
        marginTop: "10px",
        ...overrideStyle,
      }}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-508.000000, -1177.000000)" stroke="#1E60DA">
          <g transform="translate(320.000000, 887.000000)">
            <g transform="translate(32.000000, 219.000000)">
              <g transform="translate(156.000000, 71.000000)">
                <g transform="translate(2.000000, 5.000000)">
                  <line
                    x1="-1.30624122e-13"
                    y1="3.33474094"
                    x2="10.6959772"
                    y2="3.33474094"
                  ></line>
                  <path d="M7.23821978,-7.14983628e-14 C7.32313574,0.196204133 7.64364274,0.721254979 8.19974077,1.57515254 C8.7558388,2.4290501 9.58791762,3.00645291 10.6959772,3.30736097 C9.61593273,3.84448883 8.78385392,4.47336418 8.19974077,5.19398701 C7.61562762,5.91460983 7.29512063,6.34992005 7.23821978,6.49991765"></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ArrowIcon;
