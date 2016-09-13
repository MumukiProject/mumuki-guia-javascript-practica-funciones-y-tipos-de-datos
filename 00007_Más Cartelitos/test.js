it("escribirCartelito(\"Dra.\", \"Ana\", \"Pérez\", false), es \"Dra. Ana Pérez\"", () => {
  assert.equal(escribirCartelito("Dra.", "Ana", "Pérez", false), "Dra. Ana Pérez")
})
it("escribirCartelito(\"Dr.\", \"Julio\", \"Gelman\", false), es \"Dr. Julio Gelman\"", () => {
  assert.equal(escribirCartelito("Dr.", "Julio", "Gelman", false), "Dr. Julio Gelman")
})
it("escribirCartelito(\"Dr.\", \"Julio\", \"Gelman\", true), es \"Dr. Gelman\"", () => {
  assert.equal(escribirCartelito("Dr.", "Julio", "Gelman", true), "Dr. Gelman")
})