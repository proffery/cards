import React from 'react';

import { ArrowDropDown, ArrowDropUp } from '@/assets/icons';
import * as SelectRadix from '@radix-ui/react-select';

import s from './select.module.scss';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  selectLabel: string;
  onOpenChange?: (open: boolean) => void;
  onValueChange?: (value: string) => void;
  options: Option[];
  placeholder: string;
} & Omit<React.ComponentProps<typeof SelectRadix.Root>, 'onOpenChange' | 'onValueChange'>;

export const Select: React.FC<SelectProps> = ({
                                                selectLabel,
                                                onOpenChange: externalOnOpenChange,
                                                onValueChange: externalOnValueChange,
                                                options,
                                                placeholder,
                                                ...rest
                                              }) => {
  return (
      <>
        {selectLabel && (
            <label htmlFor={selectLabel} className={s.selectLabel}>
              {selectLabel}
            </label>
        )}

        <SelectRadix.Root
            onOpenChange={(open) => {
              if (externalOnOpenChange) {
                externalOnOpenChange(open);
              }
            }}
            onValueChange={(value) => {
              if (externalOnValueChange) {
                externalOnValueChange(value);
              }
            }}
            {...rest}
        >
          <SelectRadix.Trigger id={selectLabel} aria-label={selectLabel} className={s.trigger}>
            <SelectRadix.Value placeholder={placeholder} />
            {rest.open ? <ArrowDropUp /> : <ArrowDropDown />}
          </SelectRadix.Trigger>
          <SelectRadix.Portal>
            <SelectRadix.Content avoidCollisions={false} className={s.content} position={'popper'}>
              <SelectRadix.Viewport>
                {options.map((option) => (
                    <SelectRadix.Item className={s.item} key={option.value} value={option.value}>
                      <SelectRadix.ItemText>{option.label}</SelectRadix.ItemText>
                    </SelectRadix.Item>
                ))}
              </SelectRadix.Viewport>
            </SelectRadix.Content>
          </SelectRadix.Portal>
        </SelectRadix.Root>
      </>
  );
};
