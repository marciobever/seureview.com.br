'use client';

import * as React from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

export default function SafeImage({
  src,
  alt,
  fallbackSrc = '/liquidificador.jpg',
  ...rest
}: Props) {
  const [current, setCurrent] = React.useState(src);

  return (
    <img
      {...rest}
      src={current as string}
      alt={alt ?? ''}
      onError={() => {
        if (current !== fallbackSrc) setCurrent(fallbackSrc);
      }}
    />
  );
}
