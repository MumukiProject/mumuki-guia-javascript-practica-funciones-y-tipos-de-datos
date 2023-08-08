it("aniosEnDias(2) debería retornar 730", () => { assert.equal(aniosEnDias(2), 730) });
it("aniosEnDias(1) debería retornar 365", () => { assert.equal(aniosEnDias(1), 365) });
it("aniosEnDias(5) debería retornar 1825", () => { assert.equal(aniosEnDias(5), 1825) });

it("diasEnAnios(146) debería retornar 0.4", () => { assert.equal(diasEnAnios(146), 0.4) });
it("diasEnAnios(365) debería retornar 1", () => { assert.equal(diasEnAnios(365), 1) });
it("diasEnAnios(1825) debería retornar 5", () => { assert.equal(diasEnAnios(1825), 5) });