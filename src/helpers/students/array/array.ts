export default {
  searchList<T>(list: T[], searchTerm: string, keys: (keyof T)[]) {
    if (!searchTerm.trim()) return list;

    const lowerTerm = searchTerm.toLowerCase();
    return list.filter((item) =>
      keys.some((key) => {
        const value = item[key];
        return (
          typeof value === "string" && value.toLowerCase().includes(lowerTerm)
        );
      })
    );
  },
};
