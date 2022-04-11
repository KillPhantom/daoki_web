type PropsType = {
  overrideStyle?: any;
  onClick?: any;
};

const MoveDownIcon = ({ overrideStyle, onClick }: PropsType) => {
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
            d="M18,15 C18,15.1671251 17.9362449,15.334268 17.8087346,15.4617986 C17.5536937,15.7168191 17.1401834,15.7168191 16.8851425,15.4617986 L10,8.57663316 L3.1148524,15.4617986 C2.8598115,15.7168191 2.44632157,15.7168191 2.19128067,15.4617986 C1.93623978,15.2067373 1.93623978,14.7932678 2.19128067,14.5382065 L9.53822179,7.19126537 C9.79326269,6.93624488 10.2067526,6.93624488 10.4617935,7.19126537 L17.8087346,14.5382065 C17.9362449,14.6657371 18,14.83288 18,15 Z"
            fill="#1E60DA"
            fillRule="nonzero"
            transform="translate(10.000000, 11.326532) scale(1, -1) translate(-10.000000, -11.326532) "
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default MoveDownIcon;
