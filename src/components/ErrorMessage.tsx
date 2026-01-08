type ErrorMessageProps = {
  message?: string | null;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null; // don't render an empty div
  return (
    <div role="alert" className="text-red-600 text-sm mt-2">
      {message}
    </div>
  );
}
