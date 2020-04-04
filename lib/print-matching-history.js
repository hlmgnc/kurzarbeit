function printMatching(matching) {
  console.log(`${(matching.client.name)} matched with ${(matching.expert.name)} to work in ${(matching.origin)} `)
}

function printMatchingHistory(client) {
  if (client.matchings.length == 0)
    return console.log(`${colors.blue(client.name)} has no matchings yet.`)

  client.matchings.forEach(printMatching)
}

module.exports = printMatchingHistory