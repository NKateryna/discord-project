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

// Можно будет разширять и прокидывать дополнительные пропсы

//"form:" event: React.FormEvent

//"change" event: React.KeyboardEvent<от какого элемента идёт событие, пример:HTMLInputElement>
// React.MouseEventHandler<>

//enum для статусов

// : { className: string }

interface Props {}
