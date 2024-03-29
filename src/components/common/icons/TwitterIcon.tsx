import { useState } from "react";
type PropsType = {
  overrideStyle?: any;
  onClick?: any;
};

const TwitterIcon = ({ overrideStyle, onClick }: PropsType) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        if (onClick) {
          onClick();
        }
        setIsHover(false);
      }}
    >
      <svg
        viewBox="0 0 32 32"
        style={{ height: "32px", width: "32px", ...overrideStyle }}
      >
        {isHover ? (
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1440.000000, -40.000000)">
              <g transform="translate(1440.000000, 40.000000)">
                <rect
                  fill="#3AC28D"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                  rx="16"
                ></rect>
                <g
                  transform="translate(4.000000, 4.000000)"
                  fill="#FFFFFF"
                  fillRule="nonzero"
                >
                  <g>
                    <path d="M19.9546988,6.22396826 L17.5394535,17.6058859 C17.3614256,18.4129457 16.8807502,18.6087764 16.2101784,18.2289836 L12.530935,15.5170251 L10.7565902,17.226093 C10.5607595,17.4219237 10.3946001,17.5880831 10.0148072,17.5880831 L10.2759148,13.8435628 L17.0943837,7.68379711 C17.3910969,7.42268951 17.0291068,7.27433292 16.6374454,7.53544052 L8.21079106,12.8406722 L4.57902172,11.7072279 C3.78976466,11.4579888 3.77196186,10.9179708 4.7451811,10.5381779 L18.9340054,5.06678685 C19.5927087,4.82941631 20.1683323,5.22701197 19.9546988,6.22396826 L19.9546988,6.22396826 Z"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        ) : (
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1613.000000, -72.000000)">
              <g transform="translate(1613.000000, 72.000000)">
                <rect
                  fill-opacity="0.1"
                  fill="#142542"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                  rx="16"
                ></rect>
                <path
                  d="M23.9546988,10.2239683 L21.5394535,21.6058859 C21.3614256,22.4129457 20.8807502,22.6087764 20.2101784,22.2289836 L16.530935,19.5170251 L14.7565902,21.226093 C14.5607595,21.4219237 14.3946001,21.5880831 14.0148072,21.5880831 L14.2759148,17.8435628 L21.0943837,11.6837971 C21.3910969,11.4226895 21.0291068,11.2743329 20.6374454,11.5354405 L12.2107911,16.8406722 L8.57902172,15.7072279 C7.78976466,15.4579888 7.77196186,14.9179708 8.7451811,14.5381779 L22.9340054,9.06678685 C23.5927087,8.82941631 24.1683323,9.22701197 23.9546988,10.2239683 L23.9546988,10.2239683 Z"
                  id="路径"
                  fill="#8D98A4"
                  fill-rule="nonzero"
                ></path>
              </g>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};

export default TwitterIcon;
