function romanToInt(s: string): number {
  const map = new Map<string, number>()
  map.set("I", 1)
  map.set("V", 5)
  map.set("X", 10)
  map.set("L", 50)
  map.set("C", 100)
  map.set("D", 500)
  map.set("M", 1000)
  const romanArray = [...s]
  let answer = 0
  for (let i = 0; i < romanArray.length; i++) {
    if (i + 1 == romanArray.length) {
      answer += map.get(romanArray[i])!
      break;
    }
    if (map.get(romanArray[i])! >= map.get(romanArray[i + 1])!) {
      answer += map.get(romanArray[i])!
    }
    else {
      answer -= map.get(romanArray[i])!
    }

  }

  return answer
};

romanToInt("MCMXCIV")
romanToInt("III")
romanToInt("LVIII")
