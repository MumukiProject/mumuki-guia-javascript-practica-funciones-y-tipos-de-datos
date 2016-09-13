it("escribirCartelito(\"Dra.\", \"Ana\", \"Pérez\"), es \"Dra. Ana Pérez\"", () => {
  assert.equal(escribirCartelito("Dra.", "Ana", "Pérez"), "Dra. Ana Pérez")
})
it("escribirCartelito(\"Dr.\", \"Julio\", \"Gelman\"), es \"Dr. Julio Gelman\"", () => {
  assert.equal(escribirCartelito("Dr.", "Julio", "Gelman"), "Dr. Julio Gelman")
})