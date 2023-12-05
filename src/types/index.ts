import {
  ReactNode,
  ReactElement,
  CSSProperties,
  MouseEventHandler,
} from 'react';

export type PropsWithChildren = {
  children: ReactNode,
};
export type ReactNodeElement = ReactNode;
export type JSXElement = ReactElement;

export type CSSProps = CSSProperties;

export type OnClickButton = MouseEventHandler<HTMLButtonElement>;
