it("puntosDeEnvidoTotales(4, \"espadas\", 3, \"espadas\") es 27", ()  => {
  assert.equal(puntosDeEnvidoTotales(4, "espadas", 3, "espadas"), 27)
})

it("puntosDeEnvidoTotales(6, \"copas\", 11, \"copas\") es 26", ()  => {
  assert.equal(puntosDeEnvidoTotales(6, "copas", 11, "copas"), 26)
})

it("puntosDeEnvidoTotales(6, \"copas\", 7, \"espadas\") es 8", ()  => {
  assert.equal(puntosDeEnvidoTotales(6, "copas", 7, "espadas"), 7)
})