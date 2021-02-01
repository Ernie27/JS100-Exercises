function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'