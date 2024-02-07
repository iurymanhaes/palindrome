interface IPalindromeFn {
    (word: string): boolean;
}

interface IPalindromeData {
  id?: string;
  value: string;
  isPalindrome: boolean;
}

interface ICreatePalindromeRequest {
  value: string;
  isPalindrome: boolean;
}