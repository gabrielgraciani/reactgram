interface Image {
  id: string;
  name: string;
  url: string;
}

export interface SliderProps {
  images: Image[];
}

export interface ImageStyledProps {
  active: boolean;
}
