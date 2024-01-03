function lengthOfLastWord(s: string): number {
  const lastWord = s.trim().split(" ").pop()
  return lastWord!.length
};


lengthOfLastWord("Hello World")
lengthOfLastWord("   fly me   to   the moon  ")
