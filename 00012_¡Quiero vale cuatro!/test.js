it("valorCantoTruco(\"retruco\") es 3", ()  => {
  assert.equal(valorCantoTruco("retruco"), 3)
})

it("valorCantoTruco(\"truco\") es 2", ()  => {
  assert.equal(valorCantoTruco("truco"), 2)
})

it("valorCantoTruco(\"vale cuatro\") es 4", ()  => {
  assert.equal(valorCantoTruco("vale cuatro"), 4)
})