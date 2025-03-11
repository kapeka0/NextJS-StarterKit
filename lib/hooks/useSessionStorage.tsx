import { useState } from "react";

export const useSessionStorage = (key: string, initialValue: string) => {
  const isBrowser = typeof window !== "undefined";

  const [storedValue, setStoredValue] = useState(() => {
    if (!isBrowser) return initialValue;
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading sessionStorage", error);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    if (!isBrowser) return;
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting sessionStorage", error);
    }
  };

  return [storedValue, setValue];
};
