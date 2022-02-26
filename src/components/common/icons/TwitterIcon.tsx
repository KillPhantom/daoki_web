type PropsType = {
  overrideStyle?: any;
};

const TwitterIcon = ({ overrideStyle }: PropsType) => {
  return (
    <svg
      viewBox="0 0 32 32"
      style={{ height: "32px", width: "32px", ...overrideStyle }}
    >
      <g
        id="page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="twitter-1" transform="translate(-1440.000000, -40.000000)">
          <g id="twitter-2" transform="translate(1440.000000, 40.000000)">
            <rect
              id="twitter-rect"
              strokeOpacity="0.2"
              stroke="#1E60DA"
              fillOpacity="0.1"
              fill="#1E60DA"
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="6"
            ></rect>
            <g
              id="twitter-g2"
              transform="translate(4.000000, 4.000000)"
              fillRule="nonzero"
              fill="grey"
            >
              <g id="twitter-path">
                <path d="M19.9546988,6.22396826 L17.5394535,17.6058859 C17.3614256,18.4129457 16.8807502,18.6087764 16.2101784,18.2289836 L12.530935,15.5170251 L10.7565902,17.226093 C10.5607595,17.4219237 10.3946001,17.5880831 10.0148072,17.5880831 L10.2759148,13.8435628 L17.0943837,7.68379711 C17.3910969,7.42268951 17.0291068,7.27433292 16.6374454,7.53544052 L8.21079106,12.8406722 L4.57902172,11.7072279 C3.78976466,11.4579888 3.77196186,10.9179708 4.7451811,10.5381779 L18.9340054,5.06678685 C19.5927087,4.82941631 20.1683323,5.22701197 19.9546988,6.22396826 L19.9546988,6.22396826 Z"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default TwitterIcon;
