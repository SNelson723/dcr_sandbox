import "../loadingIndicators/loadingIndicator.css";

interface Props {
  message?: string;
  className?: string;
}

const LoadingIndicator = ({
  message = "Loading...",
  className = "",
}: Props) => {
  return (
    <div className={`loading-indicator ${className}`}>
      <span className="absolute mt-6 text-center w-full">{message}</span>
    </div>
  );
};

export default LoadingIndicator;
