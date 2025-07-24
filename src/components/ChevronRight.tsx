interface Props {
  onClick?: (e?: React.MouseEvent<SVGElement>) => void;
  className?: string;
  onMouseOver?: (e: React.MouseEvent<SVGElement>) => void;
  onMouseOut?: () => void;
  style?: React.CSSProperties;
}

const ChevronRight = ({
  onClick,
  className,
  onMouseOver,
  onMouseOut,
  style = {},
}: Props) => {
  const handleClick = (e: React.MouseEvent<SVGElement>) => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <svg
      style={style}
      data-testid="chevron-right"
      className={className}
      onClick={handleClick}
      fill="black"
      width="24px"
      height="24px"
      viewBox="-8.5 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <path d="M7.75 16.063l-7.688-7.688 3.719-3.594 11.063 11.094-11.344 11.313-3.5-3.469z"></path>
    </svg>
  );
};

export default ChevronRight;
