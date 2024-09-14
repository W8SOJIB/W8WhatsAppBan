const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

module.exports = {
	color,
	bgcolor
}
/* 
  by Venom
  canal: Youtube.com/@VenomModss
  zap: 9784388524
  insta: Instagram.com/venom_mods_ofc
*/