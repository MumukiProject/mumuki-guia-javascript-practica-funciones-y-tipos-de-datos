it("puntosDeEnvidoTotales(4, \"espadas\", 3, \"espadas\") es 27", ()  => {
  assert.equal(puntosDeEnvidoTotales(4, "espadas", 3, "espadas"), 27)
})

it("puntosDeEnvidoTotales(6, \"copas\", 11, \"copas\") es 26", ()  => {
  assert.equal(puntosDeEnvidoTotales(6, "copas", 11, "copas"), 26)
})

it("puntosDeEnvidoTotales(6, \"copas\", 7, \"espadas\") es 7", ()  => {
  assert.equal(puntosDeEnvidoTotales(6, "copas", 7, "espadas"), 7)
})

it("puntosDeEnvidoTotales(1, \"espadas\", 12, \"bastos\") es 1", ()  => {
  assert.equal(puntosDeEnvidoTotales(1, "espadas", 12, "bastos"), 1)
})