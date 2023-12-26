type Props = {
  tagName?: string;
  className?: string;
  children: string | JSX.Element | Array<JSX.Element>;
};

export function Text({ tagName = "p", className = "", children }: Props) {
  const Tag = tagName as keyof JSX.IntrinsicElements;
  return (
    <Tag className={`p font-medium lg:text-base ${className}`}>
      {children}
    </Tag>
  );
}

export function Subtitle({ tagName = "p", className = "", children }: Props) {
    const Tag = tagName as keyof JSX.IntrinsicElements;
    return (
      <Tag className={`p text-gray-500 lg:text-base ${className}`}>
        {children}
      </Tag>
    );
  }
  