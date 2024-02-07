export const isPalindrome: IPalindromeFn = (word) => {
  const cleanedWord = word.replace(/\s/g, '')
  return cleanedWord.toLowerCase() == cleanedWord.split("").reverse().join("").toLowerCase();
}