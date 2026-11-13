import { MdOutlineError } from 'react-icons/md';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <p className="text-red-400 text-xs md:text-sm mt-2 flex items-center gap-1.5 font-medium select-none">
      <MdOutlineError className="w-4 h-4 flex-shrink-0" />
      <span>{message}</span>
    </p>
  );
};

export default ErrorMessage;
