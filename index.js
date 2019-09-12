'use-strict'

const alphanumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


exports.generateCusip = function generateCusip() {
    let cusip = ''
    for (let i = 0; i < 6; i++) {
        cusip = cusip + Math.floor(Math.random() * 10)
    }
    cusip = ((cusip + alphanumeric[Math.floor(Math.random() * alphanumeric.length)]) + alphanumeric[Math.floor(Math.random() * alphanumeric.length)]).toUpperCase()
    let c, v, p, total = 0, check
    for (let i = 0; i < cusip.length; i++) {
        c = cusip[i]
        if (!isNaN(parseInt(c, 10))) {
            v = c
        }
        else {
            v = c.charCodeAt(0) - 'A'.charCodeAt(0) + 10
        }
        if (i % 2 != 0) {
            v = v * 2
        }
        total = total + Math.floor(v / 10) + (v % 10)
    }
    check = (10 - (total % 10)) % 10
    return cusip + check
}