import React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: number;
  style?: React.CSSProperties;
}

/**
 * Avatar — circular portrait. Falls back to the brand placeholder grey when
 * no src is given (matching the empty avatar discs in the layout).
 */
export function Avatar({
  src,
  alt = "",
  size = 240,
  style = {},
  ...rest
}: AvatarProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "var(--radius-full)",
        overflow: "hidden",
        background: src
          ? `center / cover no-repeat url(${src})`
          : "var(--color-placeholder)",
        flexShrink: 0,
        ...style,
      }}
      role="img"
      aria-label={alt}
      {...rest}
    />
  );
}
