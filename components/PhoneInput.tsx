'use client';

import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Input } from '@/components/ui/input';
import { DIAL_CODES, joinPhone, splitPhone } from '@/lib/phone';

const codeOptions = DIAL_CODES.map((d) => ({
  value: d.code,
  iso: d.iso,
  label: `${d.name} (${d.code})`
}));

interface PhoneInputProps {
  id?: string;
  value?: string | null;
  /** Called with the whole number, e.g. "+44 7123456789". */
  onChange: (value: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
  invalid?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
}

/**
 * A country code picker and the number beside it. The code is never filled
 * in for the user - it has to be chosen.
 */
export const PhoneInput = ({
  id,
  value,
  onChange,
  onBlur,
  disabled,
  invalid,
  placeholder = 'Phone number',
  autoFocus
}: PhoneInputProps) => {
  const initial = splitPhone(value);
  const [code, setCode] = useState(initial.code);
  const [number, setNumber] = useState(initial.number);

  // Follow the value when it changes from outside (a reset, a reload).
  useEffect(() => {
    const next = splitPhone(value);
    if (joinPhone(next.code, next.number) !== joinPhone(code, number)) {
      setCode(next.code);
      setNumber(next.number);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // Several countries share a code (+1, +7); show the first one that matches.
  const selected = codeOptions.find((o) => o.value === code) || null;

  // The code and the number share one border, so they read as one field.
  return (
    <div
      className={`flex h-9 w-full items-center rounded-md border bg-transparent shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring ${
        invalid ? 'border-red-400' : 'border-gray-300'
      } ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
    >
      <div className="w-28 shrink-0">
        <Select
          inputId={id ? `${id}-code` : undefined}
          options={codeOptions}
          value={selected}
          isDisabled={disabled}
          placeholder="Code"
          formatOptionLabel={(o, { context }) =>
            context === 'value' ? `${o.iso} ${o.value}` : o.label
          }
          onChange={(o) => {
            const nextCode = o?.value || '';
            setCode(nextCode);
            onChange(joinPhone(nextCode, number));
          }}
          onBlur={onBlur}
          menuPortalTarget={typeof document !== 'undefined' ? document.body : undefined}
          styles={{
            control: (base) => ({
              ...base,
              minHeight: 34,
              height: 34,
              border: 'none',
              boxShadow: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer'
            }),
            valueContainer: (base) => ({ ...base, paddingRight: 0 }),
            indicatorSeparator: () => ({ display: 'none' }),
            dropdownIndicator: (base) => ({ ...base, paddingLeft: 0, paddingRight: 4 }),
            menu: (base) => ({ ...base, minWidth: 240 }),
            menuPortal: (base) => ({ ...base, zIndex: 9999 })
          }}
          className="text-sm"
          aria-label="Country code"
        />
      </div>
      <span className="h-5 w-px shrink-0 bg-gray-300" />
      <Input
        id={id}
        type="tel"
        inputMode="numeric"
        value={number}
        disabled={disabled}
        autoFocus={autoFocus}
        placeholder={placeholder}
        className="h-full flex-1 rounded-none border-0 text-sm shadow-none focus-visible:ring-0 disabled:opacity-100"
        onChange={(e) => {
          const digits = e.target.value.replace(/\D/g, '').slice(0, 14);
          setNumber(digits);
          onChange(joinPhone(code, digits));
        }}
        onBlur={onBlur}
      />
    </div>
  );
};

export default PhoneInput;
