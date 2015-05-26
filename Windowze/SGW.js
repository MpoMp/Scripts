var elem = $x('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/div[2]/div[2]/text()')
var wt = elem[0].textContent
wt = wt.replace(/,/g, '')
var won = parseFloat(wt.replace( /^\D+/g, ''))

elem = $x('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/div[3]/div[2]/span/text()')
wt = elem[0].textContent
wt = wt.replace(/,/g, '')
var sent = parseFloat(wt.replace( /^\D+/g, ''))

var ratio = won/sent
ratio
