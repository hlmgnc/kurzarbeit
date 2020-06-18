const colors = jest.createMockFromModule('colors')

const unity = s => s

colors.blue = unity

module.exports = colors