const Left = (x, y) => x * 2 ** y
const  stickhouse = (stick) => stick === 0 ? 0 : 5 * step + 1
const nums = (num) => (num * (num + 1))/2
const hour = (hour) => hour * 60
const min = (minutes) => minutes * 60
function App () {
  return (min, hour, nums, stickhouse, Left)
}



export default App;