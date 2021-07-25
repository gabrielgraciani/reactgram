import { useEffect, useState } from 'react';

import { Container, Image } from './styles';
import { SliderProps } from './types';

export function Slider({ images, width, height }: SliderProps): JSX.Element {
  const [imageActive, setImageActive] = useState(0);

  const imagesLength = images.length;

  useEffect(() => {
    const interval = setTimeout(() => {
      if (imageActive === imagesLength - 1) {
        setImageActive(0);
      } else {
        setImageActive(imageActive + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [imageActive, imagesLength]);

  return (
    <Container width={width} height={height}>
      {images.map((image, index) => {
        return (
          <Image
            src={image.url}
            alt={image.name}
            key={image.id}
            active={index === imageActive}
          />
        );
      })}
    </Container>
  );
}
