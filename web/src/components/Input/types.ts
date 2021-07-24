export interface InputProps {
  type: 'email' | 'password' | 'text';
  label: string;
  name: string;
  value: string;
  handleChange: (e: string) => void;
  placeholder?: string;
}

export interface LabelStyledProps {
  active: boolean;
}
