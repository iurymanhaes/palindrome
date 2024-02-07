import api from "../lib/api";

export async function getPalindromes() {
  try {
    const response = await api.get("/palindromes");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export async function createPalindrome(data: ICreatePalindromeRequest) {
    try {
        const response = await api.post("/palindromes", data);
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
}