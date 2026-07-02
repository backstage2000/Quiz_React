type ErrorStateUIProps = {
  title?: string;
  error: string;
  onRetry: () => void;
  retryLabel?: string;
};

const ErrorStateUI = ({
  title = "Something went wrong",
  error,
  onRetry,
  retryLabel = "Try Again",
}: ErrorStateUIProps) => (
  <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-red-900/40 bg-red-950/20 py-20 text-center">
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-900/30 text-2xl">
      ⚠️
    </div>
    <div>
      <p className="font-medium text-white">{title}</p>
      <p className="mt-1 text-sm text-red-300">{error}</p>
    </div>
    <button
      onClick={onRetry}
      className="rounded-xl bg-purple-600 px-6 py-2.5 text-sm font-medium transition hover:bg-purple-500"
    >
      {retryLabel}
    </button>
  </div>
);

export default ErrorStateUI;