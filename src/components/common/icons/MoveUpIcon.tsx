type PropsType = {
  overrideStyle?: any;
  onClick?: any;
};

const MoveUpIcon = ({ overrideStyle, onClick }: PropsType) => {
  return (
    <svg
      viewBox="0 0 20 20"
      style={{
        height: "20px",
        width: "20px",
        ...overrideStyle,
      }}
      onClick={onClick}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g>
          <rect
            fill="#D8D8D8"
            opacity="0"
            x="0"
            y="0"
            width="20"
            height="20"
          ></rect>
          <path
            d="M18,12 C18,12.1671251 17.9362449,12.334268 17.8087346,12.4617986 C17.5536937,12.7168191 17.1401834,12.7168191 16.8851425,12.4617986 L10,5.57663316 L3.1148524,12.4617986 C2.8598115,12.7168191 2.44632157,12.7168191 2.19128067,12.4617986 C1.93623978,12.2067373 1.93623978,11.7932678 2.19128067,11.5382065 L9.53822179,4.19126537 C9.79326269,3.93624488 10.2067526,3.93624488 10.4617935,4.19126537 L17.8087346,11.5382065 C17.9362449,11.6657371 18,11.83288 18,12 Z"
            fill="#1E60DA"
            fillRule="nonzero"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default MoveUpIcon;
