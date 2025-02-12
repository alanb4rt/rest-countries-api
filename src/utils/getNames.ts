export const getNames = (value: { name: string }[] | undefined): string => {
  return value?.map(({ name }) => name).join(", ") || "";
};
