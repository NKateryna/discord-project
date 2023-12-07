import { CSSProperties } from 'react';

interface Props {
  style?: CSSProperties;
  className?: string;
}

export function LogoIcon({ style, className }: Props) {
  return (
    <svg
      style={style}
      className={className}
      viewBox="0 0 72 55"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M60.4861 4.61095C55.8433 2.41905 50.95 0.876692 45.9299 0C45.2454 1.26979 44.6176 2.56999 44.0636 3.9006C38.7224 3.08399 33.2787 3.08399 27.934 3.9006C27.3659 2.56999 26.7416 1.2698 26.057 0.0150236C21.0191 0.892081 16.1259 2.43407 11.4831 4.62635C2.25402 18.641 -0.236623 32.323 1.01579 45.793C6.41705 49.8899 12.4568 53.0043 18.8777 55C20.3206 53.0043 21.6012 50.8731 22.6949 48.6502C20.6099 47.8492 18.5885 46.8666 16.6657 45.6871C17.1773 45.3096 17.6711 44.9314 18.1509 44.5079C29.4616 49.981 42.536 49.981 53.85 44.5079C54.3298 44.9163 54.8238 45.3096 55.3178 45.6871C53.3986 46.8515 51.3734 47.8492 49.2919 48.6502C50.3998 50.8731 51.6663 52.9895 53.1057 54.9849C59.5266 52.9895 65.5664 49.8751 70.9676 45.7782H70.9852C72.4529 30.176 68.4805 16.63 60.4861 4.61095ZM24.2754 37.5053C20.7933 37.5053 17.9252 34.2246 17.9252 30.2335C17.9252 26.2425 20.7228 22.9618 24.2754 22.9618C27.8281 22.9618 30.6786 26.2425 30.6222 30.2335C30.6222 34.2246 27.8105 37.5053 24.2754 37.5053ZM47.7151 37.5053C44.233 37.5053 41.3648 34.2246 41.3648 30.2335C41.3648 26.2425 44.1765 22.9618 47.7151 22.9618C51.2499 22.9618 54.1181 26.2425 54.0617 30.2335C54.0617 34.2246 51.2499 37.5053 47.7151 37.5053Z" />
    </svg>
  );
}
