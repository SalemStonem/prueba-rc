describe('Formulario', () => {
let text = 'CLOSED'
  it('passing test', () => {
    expect(text.toLowerCase()).toEqual('closed');
  })

  it('failing test', () => {
    expect(text.toLowerCase()).toEqual('CLOSED');
  })
})
