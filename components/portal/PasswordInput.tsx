"use client";

import { useState, type InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  className?: string;
};

export function PasswordInput({ className = "", ...rest }: Props) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative">
      <input
        {...rest}
        type={visible ? "text" : "password"}
        className={`block w-full rounded border border-line bg-white px-3 py-2.5 pr-10 text-ink outline-none focus:border-rot ${className}`}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "Passwort verbergen" : "Passwort anzeigen"}
        className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-ink-400 hover:text-rot"
      >
        {visible ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M3 3l18 18M10.584 10.587a2 2 0 002.828 2.83M9.364 5.235A9.49 9.49 0 0112 5c4.418 0 8.21 2.74 9.75 6-.42.89-.98 1.72-1.65 2.46M6.342 7.342C4.705 8.52 3.4 10.16 2.25 12c1.54 3.26 5.332 6 9.75 6a9.49 9.49 0 004.03-.874"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M2.25 12C3.79 8.74 7.582 6 12 6s8.21 2.74 9.75 6c-1.54 3.26-5.332 6-9.75 6S3.79 15.26 2.25 12z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        )}
      </button>
    </div>
  );
}
