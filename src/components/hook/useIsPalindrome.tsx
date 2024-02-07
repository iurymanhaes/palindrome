import { useMemo } from "react";
import { isPalindrome } from "../../utils/isPalindrome";

export const useIsPalindrome: IPalindromeFn = (word) => {
  if (word === undefined) {
    return false;
  }
  const result = useMemo(() => isPalindrome(word), [word]);
  return result;
};
