it("escribe un cartelito largo cuando el nombre completo es corto", () => { 
  assert.equal(escribirCartelitoOptimo("Ing.", "Carla", "Toledo"), "Ing. Carla Toledo")
})
it("escribe un cartelito corto cuando el nombre completo es largo", () => { 
  assert.equal(escribirCartelitoOptimo("Dr.", "Estanislao", "Schwarzschild"), "Dr. Schwarzschild")
})