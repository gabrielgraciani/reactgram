interface Image {
  id: string;
  name: string;
  url: string;
}

export interface SliderProps {
  images: Image[];
  width: string;
  height: string;
}

export interface ContainerStyledProps {
  width: string;
  height: string;
}

export interface ImageStyledProps {
  active: boolean;
}
