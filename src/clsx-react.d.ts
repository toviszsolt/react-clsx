import 'react';

type ClassNameValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | Record<string, boolean | null | undefined>
  | ClassNameValue[];

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      className?: ClassNameValue;
    }
  }
}
