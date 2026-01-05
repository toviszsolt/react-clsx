import clsx from 'clsx';
import { Fragment, jsxDEV as reactJsxDEV } from 'react/jsx-dev-runtime';

export { Fragment };

export function jsxDEV(type, props, key, isStaticChildren, source, self) {
  if (props && props.className && typeof props.className !== 'string') {
    const newProps = { ...props, className: clsx(props.className) };
    return reactJsxDEV(type, newProps, key, isStaticChildren, source, self);
  }
  return reactJsxDEV(type, props, key, isStaticChildren, source, self);
}
