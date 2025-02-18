export const getPagination = (page: number, size: number) => {
  const from = page * size;
  const to = from + size - 1;

  return { from, to };
};
