export const useLocalStorage = () => {
  let storage = localStorage;

  const setStorage = (key: string, value: string) => {
    storage.setItem(key, value);
  };

  const getStorage = (key: string) => {
    return storage.getItem(key);
  };

  const removeStorage = (key: string) => {
    storage.removeItem(key);
  };

  return { setStorage, getStorage, removeStorage };
};
