import clsx from 'clsx';
import { Fragment, jsx as reactJsx, jsxs as reactJsxs } from 'react/jsx-runtime';

function wrap(jsxFn) {
  return function (type, props, ...args) {
    if (props && props.className && typeof props.className !== 'string') {
      const newProps = { ...props, className: clsx(props.className) };
      return jsxFn(type, newProps, ...args);
    }
    return jsxFn(type, props, ...args);
  };
}

export const jsx = wrap(reactJsx);
export const jsxs = wrap(reactJsxs);
export { Fragment };
