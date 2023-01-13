function wrapping (gifts) {
  const result = []

  for (let i = 0; i < gifts.length; i++) {
    const paper = '*'.repeat(gifts[i].length + 2)
    result.push(`${paper}\n*${gifts[i]}*\n${paper}`)
  }

  return result
}

module.exports = { wrapping }
