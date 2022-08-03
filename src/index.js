module.exports = function check(str, bracketsConfig) {
  let strArr = str.split('')
  let openBracket = []
  let closedBracket = []
  let closedIndex = 0
  let openIndex = 0
  bracketsConfig.forEach(e=>{
    openBracket.push(e[0])
    closedBracket.push(e[1])
  })
  let stack = []

  for(let i = 0; i < strArr.length; i++) {
    openIndex = openBracket.indexOf(strArr[i])
    closedIndex = closedBracket.indexOf(strArr[i])
    if(openIndex === closedIndex && stack[stack.length-1] === openIndex){
      stack.pop()
      continue;
    }
    if (openIndex !== -1) {
      stack.push(openIndex)
    } else if (closedIndex !== -1){
      openIndex = stack.pop()
      if (closedIndex !== openIndex) return false
    }
  }
  if(stack.length > 0) return false
  return true
}
