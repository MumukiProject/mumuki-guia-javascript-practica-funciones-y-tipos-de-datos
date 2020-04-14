it("meConviene(25, 8) es falso", () => {
  assert(!meConviene(25, 8))
})

it("meConviene(40, 8) es verdadero", () => {
  assert(meConviene(40, 8), "ojo, tiene que tener 8GB o más")
})

it("meConviene(40, 10) es verdadero", () => {
  assert(meConviene(40, 10))
})

it("meConviene(32, 8) es verdadero", () => {
  assert(meConviene(32, 8), "ojo, tiene que tener 32 pulgadas o más")
})

it("meConviene(40, 4) es falso", () => {
  assert(!meConviene(40, 4))
})


it("meConviene(50, 16) es falso", () => {
  assert(!meConviene(50, 16))
})


describe("meConviene", () => {
  try {
    let resultado = [
      !meConviene(31, 8), 
      !meConviene(31, 9),
      !meConviene(32, 8),  // debería ser false
      !meConviene(32, 9),  // debería ser false
      !meConviene(33, 8),  // debería ser false
      meConviene(33, 9),
      meConviene(34, 9),
      meConviene(34, 10),
      meConviene(32, 15),
      meConviene(32, 15),
      meConviene(33, 15),
      !meConviene(34, 15),
      !meConviene(35, 15),
      !meConviene(35, 16)
    ].every((it) => it === true);
    
  
    resultado && it("valida los casos borde", () => {
      assert.fail("no estás controlando adecuadamente los casos borde");
    })
  } catch() {}
  
})