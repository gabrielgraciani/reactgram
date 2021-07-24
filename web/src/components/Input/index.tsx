import React, {
  ChangeEvent,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';

import { KeyCodes } from '../../enum/KeyCodes';

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
  const [isInputActive, setIsInputActive] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus(e: ChangeEvent<HTMLInputElement>) {
    setIsPlaceholderAnimate(e.currentTarget.value !== '');
    handleChange(e.target.value);
  }

  const handleClickOutside = useCallback(
    e => {
      if (
        isPlaceholderAnimate &&
        !value &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setIsPlaceholderAnimate(false);
      }
    },
    [isPlaceholderAnimate, value],
  );

  const handleTypeEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.keyCode === KeyCodes.ESCAPE) {
        if (inputRef && inputRef.current) {
          inputRef.current.blur();
        }
        if (!value) {
          setIsPlaceholderAnimate(false);
        }
      }
    },
    [value],
  );

  useEffect(() => {
    if (isInputActive) {
      window.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('keydown', handleTypeEsc);

      return () => {
        window.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('keydown', handleTypeEsc);
      };
    }
    return undefined;
  }, [handleClickOutside, handleTypeEsc, isInputActive]);

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
        value={value || ''}
        placeholder={placeholder}
        onChange={e => handleFocus(e)}
        autoComplete="off"
        ref={inputRef}
        onClick={() => setIsInputActive(true)}
        onBlur={() => setIsInputActive(false)}
      />
    </Container>
  );
}
