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
  assert(meConviene(32, 8). "ojo, tiene que tener 32 pulgadas o más")
})

it("meConviene(40, 4) es falso", () => {
  assert(!meConviene(40, 4))
})


it("meConviene(50, 16) es falso", () => {
  assert(!meConviene(50, 16))
})