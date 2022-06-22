import React, { RefObject, useRef, FC, forwardRef } from 'react';
import classnames from 'classnames';

import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';

import { Props } from './Checkbox.types';
import { STYLE, DEFAULTS } from './Checkbox.constants';
import './Checkbox.style.scss';
import { useCheckbox } from 'react-aria';
import { useToggleState } from '@react-stately/toggle';

import Icon from '../Icon';

/**
 * The Checkbox component.
 */
const Checkbox = (props: Props, providedRef: RefObject<HTMLInputElement>) => {
  const { className, isDisabled, label, isIndeterminate, isSelected, id, style } = props;

  const state = useToggleState(props);
  const internalRef = useRef<HTMLInputElement>();
  const ref = providedRef || internalRef;
  const { inputProps } = useCheckbox(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  const selected = isSelected || state.isSelected || DEFAULTS.IS_SELECTED;
  const indeterminate = isIndeterminate || DEFAULTS.IS_INDETERMINATE;
  const disabled = isDisabled || DEFAULTS.IS_DISABLED;

  const icon = (
    <Icon
      className={STYLE.icon}
      name={indeterminate ? 'minus' : 'check'}
      weight="bold"
      scale={12}
    />
  );

  const filled = selected || indeterminate;
  const checkbox = (
    <div
      className={classnames(
        {
          [STYLE.selected]: filled,
          [STYLE.notSelected]: !filled,
          [STYLE.focus]: isFocusVisible,
        },
        'checkbox'
      )}
    >
      {filled && icon}
    </div>
  );

  return (
    <label
      className={classnames(STYLE.wrapper, className)}
      data-disabled={disabled}
      id={id}
      style={style}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} aria-label={label} ref={ref} />
      </VisuallyHidden>
      {checkbox}
      {label}
    </label>
  );
};

const _Checkbox = forwardRef(Checkbox);
_Checkbox.displayName = 'Checkbox';

export default _Checkbox;