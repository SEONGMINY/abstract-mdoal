import { ComponentProps, FunctionComponent } from 'react';
import { atom } from 'recoil';

export const modalState = atom<
  Array<{
    Component: FunctionComponent<any>;
    props: ComponentProps<FunctionComponent<any>>;
  }>
>({
  key: '#modal',
  default: [],
});
