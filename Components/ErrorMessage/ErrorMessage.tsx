import { MdOutlineError } from 'react-icons/md';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <p className="text-red-600 text-sm mt-1 flex items-center space-x-1 font-medium select-none">
      <MdOutlineError className="w-4 h-4 text-amber-400" />
      <span>{message}</span>
    </p>
  );
};

export default ErrorMessage;
