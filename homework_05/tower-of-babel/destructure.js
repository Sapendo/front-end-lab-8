var json = {
	"name": {
        "first": "Yosuke",
        "family": process.argv[2]
    },
    "birth": {
        "year": 1982,
        "month": 12,
        "day": process.argv[3]
    }
};

var [familyName, birthDay] = [json.name.family, json.birth.day];

console.log(familyName);
console.log(birthDay);