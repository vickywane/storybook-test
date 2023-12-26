type Props = {
  tagName?: string;
  className?: string;
  children: string | JSX.Element | Array<JSX.Element>;
};

export function Heading1({ tagName = "h1", className = "", children }: Props) {
  const Tag = tagName as keyof JSX.IntrinsicElements;
  return (
    <Tag className={`heading1 text-3xl font-medium lg:text-4xl ${className}`}>
      {children}
    </Tag>
  );
}

export function Heading2({ tagName = "h2", className = "", children }: Props) {
  const Tag = tagName as keyof JSX.IntrinsicElements;
  return (
    <Tag className={`heading2 text-2xl font-medium lg:text-3xl ${className}`}>
      {children}
    </Tag>
  );
}

export function Heading3({ tagName = "h3", className = "", children }: Props) {
  const Tag = tagName as keyof JSX.IntrinsicElements;
  return (
    <Tag className={`heading3 text-xl font-medium lg:text-2xl ${className}`}>
      {children}
    </Tag>
  );
}
export function Heading4({ tagName = "h4", className = "", children }: Props) {
  const Tag = tagName as keyof JSX.IntrinsicElements;
  return (
    <Tag className={`heading4 text-lg lg:text-xl lg:font-medium ${className}`}>
      {children}
    </Tag>
  );
}

export function Heading5({ tagName = "h5", className = "", children }: Props) {
  const Tag = tagName as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={`heading5 text-base lg:text-lg lg:font-medium ${className}`}
    >
      {children}
    </Tag>
  );
}