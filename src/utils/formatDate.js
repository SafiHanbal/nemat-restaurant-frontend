export const formatDate = (date) => {
  const dateObj = new Date(date);
  return new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(dateObj);
};
