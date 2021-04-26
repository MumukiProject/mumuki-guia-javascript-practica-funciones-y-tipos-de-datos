it("valorEnvido(2) es 2", () => { assert.equal(valorEnvido(2), 2) })
it("valorEnvido(1) es 1", () => { assert.equal(valorEnvido(1), 1) })
it("valorEnvido(5) es 5", () => { assert.equal(valorEnvido(5), 5) })
it("valorEnvido(7) es 7", () => { assert.equal(valorEnvido(7), 7) })

it("valorEnvido(12) es 0", () => { assert.equal(valorEnvido(12), 0) })
it("valorEnvido(11) es 0", () => { assert.equal(valorEnvido(11), 0) })
it("valorEnvido(10) es 0", () => { assert.equal(valorEnvido(10), 0) })


describe("valorEnvido", () => {
  
  try {
    let resultado = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12].every(it => typeof(valorEnvido(it)) !== 'string');
    it("no devuelve strings", () => {
      assert(resultado, "ojo, en algún caso estás devolviendo strings")
    })
  } catch (e) {}
  
  
})