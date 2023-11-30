import BigNumber from 'bignumber.js'

BigNumber.config({ DECIMAL_PLACES: 18 });

const Units = {}

const rawUnits = {
    "peb": "1",
    "kpeb": "1000",
    "Mpeb": "1000000",
    "Gpeb": "1000000000",
    "ston": "1000000000000",
    "uKLAY": "1000000000000000",
    "mKLAY": "1000000000000000000",
    "KLAY": "1000000000000000000000",
    "kKLAY": "1000000000000000000000000",
    "MKLAY": "1000000000000000000000000000",
    "GKLAY": "1000000000000000000000000000000",
    "TKLAY": "1000000000000000000000000000000000"
}

const units = {}

Object.keys(rawUnits).map(function (unit) {
    units[unit] = new BigNumber(rawUnits[unit], 10)
})

Units.units = rawUnits

function convert(value, from, to) {
    let result =  new BigNumber(value, 10).mul(units[from]).round(0, BigNumber.ROUND_DOWN).div(units[to])
    return result.toString(10)
}

export default convert