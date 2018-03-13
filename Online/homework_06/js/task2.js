var euro_amount = 0,
    usd_amount = 0,
    euro_cost = 33.2324,
    usd_cost = 27.1240,
    uah_euro = 0,
    uah_usd = 0,
    euro_usd = 0;

do {
    euro_amount = +prompt('Enter the amount of EURO');
} while (!(!isNaN(parseFloat(euro_amount)) && isFinite(euro_amount)));
do {
    usd_amount = +prompt('Enter the amount of USD');
} while (!(!isNaN(parseFloat(usd_amount)) && isFinite(usd_amount)));
uah_euro = Math.round((euro_amount * euro_cost) * 100) / 100;
uah_usd = Math.round(usd_amount * usd_cost * 100) / 100;
euro_usd = Math.round(euro_cost / usd_cost * 100) / 100;

console.log(euro_amount + ' euros are equal ' + uah_euro + ' UAH, ' + usd_amount + ' dollars are equal ' + uah_usd + ' UAH, one euro is equal ' + euro_usd + ' dollars.');