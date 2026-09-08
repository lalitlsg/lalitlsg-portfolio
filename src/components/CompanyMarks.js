import React from "react";

export function NaviMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path fill="currentColor" d="M7 27V5h7.2L21 16.4V5h6v22h-7.2L13 15.6V27H7z" />
    </svg>
  );
}

export function PaytmMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path fill="currentColor" d="M11 23V9h7.2c3.3 0 5.4 1.8 5.4 4.7 0 3-2.1 4.8-5.5 4.8H15.4V23H11zm4.4-8.2h2.4c1.4 0 2.2-.8 2.2-2.1s-.8-2.1-2.2-2.1h-2.4v4.2z" />
    </svg>
  );
}

export function GsLabMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="4" y="4" width="10" height="10" fill="currentColor" />
      <rect x="18" y="4" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="4" y="18" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="18" y="18" width="10" height="10" fill="currentColor" />
    </svg>
  );
}

export const companyMarks = {
  Navi: NaviMark,
  Paytm: PaytmMark,
  "GS Lab": GsLabMark,
};
