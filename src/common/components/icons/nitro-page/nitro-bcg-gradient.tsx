import { CSSProps } from '../../../../types';

export function NitroBcgGradient() {
  const style: CSSProps = {
    WebkitMaskImage: 'linear-gradient(180deg,#000 48.68%,transparent)',
    maskImage: 'linear-gradient(180deg,#000 48.68%,transparent)',
    position: 'absolute',
    zIndex: -2,
  };

  return (
    <svg
      width="100%"
      height="793px"
      viewBox="0 0 2338 793"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={style}
    >
      <path
        d="M1175.02 650.847C567.943 650.847 449.538 793 0 793V0H2338V529.841C1912.54 529.841 1705.84 650.847 1175.02 650.847Z"
        fill="url(#paint0_linear_2548_770)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_2548_770"
          x1="2338"
          y1="-1.20115e-05"
          x2="2262.17"
          y2="975.136"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="hsl( 240 calc( 1 *55.2%) 47.3% /1)"></stop>
          <stop
            offset="0.339235"
            stopColor="hsl( 224 calc( 1 *77.9%) 59.2% /1)"
          ></stop>
          <stop
            offset="0.492065"
            stopColor="hsl( 246 calc( 1 *74.4%) 69.4% /1"
          ></stop>
          <stop
            offset="0.823236"
            stopColor="hsl( 295 calc( 1 *79.9%) 72.7% /1)"
          ></stop>
          <stop
            offset="0.899558"
            stopColor="hsl( 336 calc( 1 *55.2%) 72% /1)"
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
