
export default function(len) {
  return Array(len).fill(4).reduce((prev) => {
    return prev * 10
  }, 1)
}
