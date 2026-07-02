const EmptyStateUI = () => (
  <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-purple-900/40 bg-purple-950/40 py-20 text-center">
    <p className="text-white font-medium">No quizzes found</p>
    <p className="text-sm text-purple-300">
      Check back later or try refreshing
    </p>
  </div>
);

export default EmptyStateUI;
