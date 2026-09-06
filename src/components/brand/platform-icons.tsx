import type { CSSProperties, ReactElement, ReactNode, SVGProps } from "react";
import { platforms, type PlatformId } from "@/data/platforms";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  /** When false, expose accessible name (logo alone). Default: decorative. */
  decorative?: boolean;
};

function MonoBase({
  size = 24,
  children,
  decorative = true,
  title,
  className,
  style,
  ...props
}: IconProps & { children: ReactNode; title?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden={decorative ? true : undefined}
      role={decorative ? undefined : "img"}
      {...props}
    >
      {!decorative && title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

/** Meta infinity mark (official geometry). Prefer for Meta Ads / Meta agency context. */
export function MetaIcon({ size = 24, className, decorative = true, ...props }: IconProps) {
  return (
    <MonoBase size={size} className={className} decorative={decorative} title="Meta" fill="currentColor" {...props}>
      <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
    </MonoBase>
  );
}

/** Facebook “f” mark — only when the UI specifically means Facebook. */
export function FacebookIcon({ size = 24, className, decorative = true, ...props }: IconProps) {
  return (
    <MonoBase size={size} className={className} decorative={decorative} title="Facebook" fill="currentColor" {...props}>
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </MonoBase>
  );
}

/** Google Ads mark (official geometry) — not the corporate Google “G”. */
export function GoogleAdsIcon({ size = 24, className, decorative = true, ...props }: IconProps) {
  return (
    <MonoBase size={size} className={className} decorative={decorative} title="Google Ads" fill="currentColor" {...props}>
      <path d="M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998zm19.4643-6.0004L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644zM7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z" />
    </MonoBase>
  );
}

/** @deprecated Use GoogleAdsIcon — kept as alias for gradual migration. */
export const GoogleIcon = GoogleAdsIcon;

export function TikTokIcon({ size = 24, className, decorative = true, ...props }: IconProps) {
  return (
    <MonoBase size={size} className={className} decorative={decorative} title="TikTok" fill="currentColor" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </MonoBase>
  );
}

/** Microsoft four-square mark — preferred visual for Microsoft Advertising / Bing Ads services. */
export function MicrosoftAdvertisingIcon({ size = 24, className, decorative = true, ...props }: IconProps) {
  return (
    <MonoBase size={size} className={className} decorative={decorative} title="Microsoft" {...props}>
      <path fill="#F25022" d="M0 0h11.408v11.408H0z" />
      <path fill="#7FBA00" d="M12.594 0H24v11.408H12.594z" />
      <path fill="#00A4EF" d="M0 12.594h11.408V24H0z" />
      <path fill="#FFB900" d="M12.594 12.594H24V24H12.594z" />
    </MonoBase>
  );
}

/** Alias: route/SEO still say Bing; visual identity is Microsoft Advertising. */
export const BingIcon = MicrosoftAdvertisingIcon;

/**
 * Taboola — PENDING official brand asset (not available in Simple Icons / repo).
 * Legacy placeholder retained; do not treat as official Taboola branding.
 */
export function TaboolaIcon({ size = 24, className, decorative = true, ...props }: IconProps) {
  return (
    <MonoBase size={size} className={className} decorative={decorative} title="Taboola" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 1 0 .01 20.01A10 10 0 0 0 12 2zm0 3.2a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8zM12 19c-2.7 0-5.08-1.5-6.36-3.72.1-2.08 4.24-3.22 6.36-3.22s6.26 1.14 6.36 3.22C17.08 17.5 14.7 19 12 19z" />
    </MonoBase>
  );
}

/**
 * Outbrain — PENDING official brand asset (not available in Simple Icons / repo).
 * Legacy placeholder retained; do not treat as official Outbrain branding.
 */
export function OutbrainIcon({ size = 24, className, decorative = true, ...props }: IconProps) {
  return (
    <MonoBase size={size} className={className} decorative={decorative} title="Outbrain" fill="currentColor" {...props}>
      <path d="M4 6h6.5a5 5 0 0 1 0 10H8v2H4V6zm4 3v4h2.5a2 2 0 0 0 0-4H8zm10-3h2.2l-3.4 12h-2.2L20 6z" />
    </MonoBase>
  );
}

export type PlatformIconComponent = (props: IconProps) => ReactElement;

export const platformIconComponents: Record<PlatformId, PlatformIconComponent> = {
  meta: MetaIcon,
  facebook: FacebookIcon,
  "google-ads": GoogleAdsIcon,
  tiktok: TikTokIcon,
  "microsoft-advertising": MicrosoftAdvertisingIcon,
  taboola: TaboolaIcon,
  outbrain: OutbrainIcon,
};

/** @deprecated Prefer platformIconComponents + platforms config */
export const platformIcons = {
  facebook: FacebookIcon,
  meta: MetaIcon,
  google: GoogleAdsIcon,
  "google-ads": GoogleAdsIcon,
  tiktok: TikTokIcon,
  bing: MicrosoftAdvertisingIcon,
  "microsoft-advertising": MicrosoftAdvertisingIcon,
  taboola: TaboolaIcon,
  outbrain: OutbrainIcon,
};

type PlatformLogoProps = {
  platform: PlatformId;
  /** Outer container size (standardized UI box). */
  containerSize?: number;
  /** Max logo draw size inside the container. */
  iconSize?: number;
  className?: string;
  containerClassName?: string;
  /** When logo sits next to visible platform text, keep decorative (alt=""). */
  decorative?: boolean;
  style?: CSSProperties;
};

/**
 * Standardized logo container — preserves each mark’s aspect ratio inside a fixed box.
 */
export function PlatformLogo({
  platform,
  containerSize = 48,
  iconSize = 32,
  className,
  containerClassName,
  decorative = true,
  style,
}: PlatformLogoProps) {
  const Icon = platformIconComponents[platform];
  const def = platforms[platform];
  return (
    <div
      className={containerClassName ?? "flex items-center justify-center"}
      style={{
        width: containerSize,
        height: containerSize,
        ...style,
      }}
    >
      <Icon
        size={iconSize}
        className={className}
        decorative={decorative}
        {...(!decorative ? { "aria-label": def.logoAlt } : {})}
      />
    </div>
  );
}
