import { render, act } from '@testing-library/react';

import { Slider } from '.';
import { WrapperWithStyledComponents } from '../../tests/WrapperWithStyledComponents';

describe('Slider Component', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const imagesSlider = [
    {
      id: '1',
      name: 'image1',
      url: '/images/image1.jpg',
    },
    {
      id: '2',
      name: 'image2',
      url: '/images/image2.jpg',
    },
  ];

  it('should render correctly', () => {
    const { container } = render(
      <Slider images={imagesSlider} width="24rem" height="42.7rem" />,
      {
        wrapper: WrapperWithStyledComponents,
      },
    );

    expect(container).toBeTruthy();
  });

  it('should only first image have opacity 1', async () => {
    const { container } = render(
      <Slider images={imagesSlider} width="24rem" height="42.7rem" />,
      {
        wrapper: WrapperWithStyledComponents,
      },
    );

    const firstImage = container.getElementsByTagName('img')[0];
    const SecondImage = container.getElementsByTagName('img')[1];

    expect(firstImage).toHaveStyle({ opacity: 1 });
    expect(SecondImage).toHaveStyle({ opacity: 0 });
  });

  it('should only second image have opacity 1', async () => {
    const { container } = render(
      <Slider images={imagesSlider} width="24rem" height="42.7rem" />,
      {
        wrapper: WrapperWithStyledComponents,
      },
    );

    const firstImage = container.getElementsByTagName('img')[0];
    const SecondImage = container.getElementsByTagName('img')[1];

    expect(firstImage).toHaveStyle({ opacity: 1 });
    expect(SecondImage).toHaveStyle({ opacity: 0 });

    act(() => {
      jest.advanceTimersByTime(4000);
    });

    expect(firstImage).toHaveStyle({ opacity: 0 });
    expect(SecondImage).toHaveStyle({ opacity: 1 });
  });

  it('should first second image have opacity 1 after passed by all images ', async () => {
    const { container } = render(
      <Slider images={imagesSlider} width="24rem" height="42.7rem" />,
      {
        wrapper: WrapperWithStyledComponents,
      },
    );

    const firstImage = container.getElementsByTagName('img')[0];
    const SecondImage = container.getElementsByTagName('img')[1];

    act(() => {
      jest.advanceTimersByTime(9000);
    });

    expect(firstImage).toHaveStyle({ opacity: 1 });
    expect(SecondImage).toHaveStyle({ opacity: 0 });
  });
});
