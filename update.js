import _forEach from 'lodash/forEach'

const canada = require('canada')
const ca = {}
_forEach(canada.regions, (r, code) => {
    if (!ca[r]) ca[r] = []
    _forEach(canada.cities, c => {
        if (code === c[1]) {
            ca[r].push(c[0])
        }
    })
})

console.log(JSON.stringify(ca))
