function getRatio(memberURL) {
  var elem = $x('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/div[2]/div[2]/text()')
  var wt = elem[0].textContent
  wt = wt.replace(/,/g, '')
  var won = parseFloat(wt.replace( /^\D+/g, ''))

  elem = $x('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/div[3]/div[2]/span/text()')
  wt = elem[0].textContent
  wt = wt.replace(/,/g, '')
  var sent = parseFloat(wt.replace( /^\D+/g, ''))

  var ratio = won/sent
  return ratio
}

//get all whitelisted in current page
function getMembers() {
  var elem = $x('/html/body/div[1]/div/div/div[2]/div[3]/div[1]')
  var nums = elem[0].textContent.match( /\d+/g )
  n = nums [1] - nums[0] + 1
  
  var members = []

  for	(i = 1; i <= n; i++) {
    var xpath = '/html/body/div[1]/div/div/div[2]/div[2]/div[2]/div['.concat(i, ']/div/div[2]/a');
    members.push(xpath[0].textContent)
  }
  
  return members
}

//starting from whitelist page 1
this.document.location = "http://www.steamgifts.com/account/manage/whitelist/search?page=1"
//get number of pages
var elem = $x('/html/body/div[1]/div/div/div[2]/div[3]/div[1]')
var nums = elem[0].textContent.match( /\d+/g )
pages = Math.ceil(nums[2]/25)

//for each page, get members
var memberlist = []
for	(i = 1; i <= pages; i++) {
  memberlist.concat(getMembers())
  this.document.location = "http://www.steamgifts.com/account/manage/whitelist/search?page=".concat(i)
}

////for each member get ratio
////if bad ratio, add to reported array
