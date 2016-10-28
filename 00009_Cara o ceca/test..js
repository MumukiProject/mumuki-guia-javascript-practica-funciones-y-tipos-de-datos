describe("decisionConMoneda", () => {
  it("decisionConMoneda(\"cara\", \"pizzas\", \"empanadas\") es \"pizzas\"", () => {
    assert.equal(decisionConMoneda("cara", "pizzas", "empanadas"), "pizzas")
  })
  it("decisionConMoneda(\"cara\", \"asado\", \"empanadas\") es \"asado\"", () => {
    assert.equal(decisionConMoneda("cara", "asado", "empanadas"), "asado")
  })
  it("decisionConMoneda(\"ceca\", \"pizzas\", \"empanadas\") es \"empanadas\"", () => {
    assert.equal(decisionConMoneda("ceca", "pizzas", "empanadas"), "empanadas")
  })
  it("decisionConMoneda(\"ceca\", \"pizzas\", \"pastas\") es \"pastas\"", () => {
    assert.equal(decisionConMoneda("ceca", "pizzas", "pastas"), "pastas")
  })
})