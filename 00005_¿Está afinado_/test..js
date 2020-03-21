describe("estaAfinado", () => {
  it("NO estaAfinado(443)", () => { assert(!estaAfinado(443)) })
  it("NO estaAfinado(442)", () => { assert(!estaAfinado(442)) })
  it("NO estaAfinado(437)", () => { assert(!estaAfinado(437)) })
  
  it("estaAfinado(440)", () => { assert(estaAfinado(440)) })
})