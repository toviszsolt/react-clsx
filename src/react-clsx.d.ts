import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    className?:
      | string
      | number
      | boolean
      | (string | number | boolean | null | undefined)[]
      | Record<string, boolean | null | undefined>
      | null
      | undefined;
  }
}
