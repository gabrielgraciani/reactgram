import React, { ChangeEvent, useState, useEffect, useRef } from 'react';

import { Container, Label, Input as StyledInput } from './styles';
import { InputProps } from './types';

export function Input({
  type,
  label,
  name,
  value,
  handleChange,
  placeholder,
}: InputProps): JSX.Element {
  const [isPlaceholderAnimate, setIsPlaceholderAnimate] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setIsPlaceholderAnimate(e.currentTarget.value !== '');
    handleChange(e.target.value);
  }

  useEffect(() => {
    if (value) {
      setIsPlaceholderAnimate(true);
    }
    // disabling eslint rule because this useEffect must be called once when input is load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container ref={wrapperRef}>
      <Label htmlFor={name} active={isPlaceholderAnimate}>
        {label}
      </Label>
      <StyledInput
        type={type}
        name={name}
        id={name}
        value={value || ''}
        placeholder={placeholder}
        onChange={e => handleChangeInput(e)}
        autoComplete="off"
        ref={inputRef}
      />
    </Container>
  );
}
