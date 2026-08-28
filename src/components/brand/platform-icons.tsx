import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export function MetaIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </Base>
  );
}

export function GoogleIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className} {...props}>
      <path fill="#EA4335" d="M12 10.2v3.6h5.06c-.22 1.16-.9 2.14-1.92 2.8l3.1 2.4C20.26 17.3 21.2 14.9 21.2 12c0-.66-.06-1.3-.18-1.92H12z" />
      <path fill="#34A853" d="M5.28 14.34A7.2 7.2 0 0 1 4.8 12c0-.82.14-1.6.4-2.34L1.5 7.18A12 12 0 0 0 0 12c0 1.94.46 3.76 1.28 5.38l3.99-3.04z" />
      <path fill="#4A90E2" d="M12 24c3.24 0 5.96-1.08 7.94-2.92l-3.1-2.4c-.86.58-1.96.92-3.24.92-2.5 0-4.62-1.68-5.38-3.96L1.28 17.38C3.22 21.26 7.28 24 12 24z" />
      <path fill="#FBBC05" d="M12 4.8c1.76 0 3.34.6 4.58 1.8l3.44-3.44C17.94 1.08 15.24 0 12 0 7.28 0 3.22 2.74 1.28 6.62l4 3.04C7.38 7.38 9.5 4.8 12 4.8z" />
    </svg>
  );
}

export function TikTokIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.44a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.89 2.89 2.89 0 0 1 2.88-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 2.75 15.06 6.34 6.34 0 0 0 9.08 21.4a6.34 6.34 0 0 0 6.33-6.34V8.73a8.2 8.2 0 0 0 4.77 1.52V6.8a4.84 4.84 0 0 1-.59-.11z" />
    </Base>
  );
}

export function BingIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <path d="M5 3v16.58l4.71 1.68 7.29-4.2v-5.05l-4.71 1.74V8.4L5 3zm9.29 11.03 2.42-1.03v2.54l-6 3.46V9.64l3.58 2.06v2.33z" />
    </Base>
  );
}

export function TaboolaIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <path d="M12 2a10 10 0 1 0 .01 20.01A10 10 0 0 0 12 2zm0 3.2a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8zM12 19c-2.7 0-5.08-1.5-6.36-3.72.1-2.08 4.24-3.22 6.36-3.22s6.26 1.14 6.36 3.22C17.08 17.5 14.7 19 12 19z" />
    </Base>
  );
}

export function OutbrainIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <Base size={size} className={className} {...props}>
      <path d="M4 6h6.5a5 5 0 0 1 0 10H8v2H4V6zm4 3v4h2.5a2 2 0 0 0 0-4H8zm10-3h2.2l-3.4 12h-2.2L20 6z" />
    </Base>
  );
}

export const platformIcons = {
  facebook: MetaIcon,
  meta: MetaIcon,
  google: GoogleIcon,
  tiktok: TikTokIcon,
  bing: BingIcon,
  taboola: TaboolaIcon,
  outbrain: OutbrainIcon,
};
