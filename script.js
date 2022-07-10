// 12 days of winter check
var _date = new Date();
var winter = (_date.getMonth() == 12 && _date.getDate() >= 16 && _date.getDate() <= 30) ? 1 : 0;

// HQs facility points
const SBHQ = {
	short: 480,
	medium: 584,
	long: 776
};
const CBHQ = {
	coin: [356, 544],
	dollar: [679, 1004],
	bullion: [1202, 1496]
};
const LBHQ = {
	A: 564,
	B: 944,
	C: 1370,
	D: 1842
};
const BBHQ = {
	front: 1120,
	middle: 3020,
	back: 5120
};

// constants
const organicBonus = (x) => { return Math.floor(x * 1.1); };
const toonupMiss = (x) => { return Math.ceil(x / 5); };
const comboBonus = (x) => { return Math.ceil(x / 5); };
const lureBonus = (x) => { return Math.ceil(x / 2); };

// gag data
const gags = {
	items: [
		{
			name: "Feather",
			tile: 0,
			all: false,
			acc: 70,
			arg: [8, 10],
		}, {
			name: "Megaphone",
			tile: 1,
			all: true,
			acc: 70,
			arg: [15, 18]
		}, {
			name: "Lipstick",
			tile: 2,
			all: false,
			acc: 70,
			arg: [25, 30]
		}, {
			name: ["Bamboo Cane", "Candy Cane"],
			tile: [3, 49],
			all: true,
			acc: 70,
			arg: [40, 45]
		}, {
			name: "Pixie Dust",
			tile: 4,
			all: false,
			acc: 70,
			arg: [50, 60]
		}, {
			name: "Juggling Cubes",
			tile: [5, 50],
			all: true,
			acc: 70,
			arg: [75, 105]
		}, {
			name: "High Dive",
			tile: 6,
			all: true,
			acc: 95,
			arg: 210
		}, {
			name: "Banana Peel",
			tile: 7,
			all: false,
			acc: 100,
			arg: [10, 12]
		}, {
			name: "Rake",
			tile: 8,
			all: false,
			acc: 100,
			arg: [18, 20]
		}, {
			name: "Marbles",
			tile: [9, 51],
			all: false,
			acc: 100,
			arg: [30, 35]
		}, {
			name: "Quicksand",
			tile: 10,
			all: false,
			acc: 100,
			arg: [45, 50]
		}, {
			name: "Trapdoor",
			tile: 11,
			all: false,
			acc: 100,
			arg: [75, 85]
		}, {
			name: "TNT",
			tile: 12,
			all: false,
			acc: 100,
			arg: [90, 180]
		}, {
			name: "Railroad",
			tile: 13,
			all: true,
			acc: 100,
			arg: 200
		}, {
			name: "1$ Bill",
			tile: [14, 52],
			all: false,
			acc: [50, 60],
			arg: 2
		}, {
			name: "Small Magnet",
			tile: 15,
			all: true,
			acc: [50, 60],
			arg: 2
		}, {
			name: "5$ Bill",
			tile: [16, 53],
			all: false,
			acc: [60, 70],
			arg: 3
		}, {
			name: "Big Magnet",
			tile: 17,
			all: true,
			acc: [60, 70],
			arg: 3
		}, {
			name: "10$ Bill",
			tile: [18, 54],
			all: false,
			acc: [70, 80],
			arg: 4
		}, {
			name: "Hypno Goggles",
			tile: 19,
			all: true,
			acc: [70, 80],
			arg: 4
		}, {
			name: "Presentation",
			tile: 20,
			all: true,
			acc: 95,
			arg: 8
		}, {
			name: "Bike Horn",
			tile: 21,
			all: true,
			acc: 95,
			arg: [3, 4]
		}, {
			name: "Whistle",
			tile: 22,
			all: true,
			acc: 95,
			arg: [5, 7]
		}, {
			name: "Bugle",
			tile: [23, 55],
			all: true,
			acc: 95,
			arg: [9, 11]
		}, {
			name: "Aoogah",
			tile: 24,
			all: true,
			acc: 95,
			arg: [14, 16]
		}, {
			name: "Elephant Trunk",
			tile: 25,
			all: true,
			acc: 95,
			arg: [19, 21]
		}, {
			name: "Foghorn",
			tile: 26,
			all: true,
			acc: 95,
			arg: [25, 50]
		}, {
			name: "Opera Singer",
			tile: [27, 56],
			all: true,
			acc: 95,
			arg: 90
		}, {
			name: "Cupcake",
			tile: 28,
			all: false,
			acc: 75,
			arg: [4, 6]
		}, {
			name: "Fruit Pie Slice",
			tile: [29, 57],
			all: false,
			acc: 75,
			arg: [8, 10]
		}, {
			name: "Cream Pie Slice",
			tile: 30,
			all: false,
			acc: 75,
			arg: [14, 17]
		}, {
			name: "Whole Fruit Pie",
			tile: 31,
			all: false,
			acc: 75,
			arg: [24, 27]
		}, {
			name: "Whole Cream Pie",
			tile: 32,
			all: false,
			acc: 75,
			arg: [36, 40]
		}, {
			name: "Birthday Cake",
			tile: [33, 58],
			all: false,
			acc: 75,
			arg: [48, 100]
		}, {
			name: "Wedding Cake",
			tile: 34,
			all: true,
			acc: 75,
			arg: 120
		}, {
			name: "Squirting Flower",
			tile: [35, 59],
			all: false,
			acc: 95,
			arg: [3, 4]
		}, {
			name: "Glass of Water",
			tile: 36,
			all: false,
			acc: 95,
			arg: [6, 8]
		}, {
			name: "Squirt Gun",
			tile: 37,
			all: false,
			acc: 95,
			arg: [10, 12]
		}, {
			name: "Seltzer Bottle",
			tile: 38,
			all: false,
			acc: 95,
			arg: [18, 21]
		}, {
			name: "Fire Hose",
			tile: 39,
			all: false,
			acc: 95,
			arg: [27, 30]
		}, {
			name: "Storm Cloud",
			tile: 40,
			all: false,
			acc: 95,
			arg: [36, 80]
		}, {
			name: "Geyser",
			tile: 41,
			all: true,
			acc: 95,
			arg: 105
		}, {
			name: "Flower Pot",
			tile: [42, 60],
			all: false,
			acc: 50,
			arg: 10
		}, {
			name: "Sandbag",
			tile: 43,
			all: false,
			acc: 50,
			arg: 18
		}, {
			name: "Anvil",
			tile: 44,
			all: false,
			acc: 50,
			arg: 30
		}, {
			name: "Big Weight",
			tile: 45,
			all: false,
			acc: 50,
			arg: 45
		}, {
			name: "Safe",
			tile: 46,
			all: false,
			acc: 50,
			arg: [60, 70]
		}, {
			name: "Grand Piano",
			tile: 47,
			all: false,
			acc: 50,
			arg: [85, 170]
		}, {
			name: "Toontanic",
			tile: 48,
			all: true,
			acc: 50,
			arg: 180
		}
	],
	gen: {
		name: "Generator",
		tile: 61,
		all: false,
		acc: 75
	},
	tracks: [
		{
			name: "Toon-Up",
			unit: "Laff",
			color: "#C55AE8",
			border: "#AD3AD3",
			light: "#D78FF0",
			text: "#8626A6",
			count: 7
		}, {
			name: "Trap",
			unit: "Damage",
			color: "#E8E65A",
			border: "#CECC42",
			light: "#EDEB78",
			text: "#A2A02A",
			count: 7
		}, {
			name: "Lure",
			unit: "Rounds",
			color: "#33BD35",
			border: "#1E9D1F",
			light: "#5ED460",
			text: "#188118",
			count: 7
		}, {
			name: "Sound",
			unit: "Damage",
			color: "#5470EF",
			border: "#2D47B3",
			light: "#8A9EF4",
			text: "#24398F",
			count: 8
		}, {
			name: "Throw",
			unit: "Damage",
			color: "#ED9F32",
			border: "#DA8F26",
			light: "#F3BD72",
			text: "#AE721E",
			count: 8
		}, {
			name: "Squirt",
			unit: "Damage",
			color: "#F55BD6",
			border: "#D631B5",
			light: "#F887E1",
			text: "#AA228F",
			count: 8
		}, {
			name: "Drop",
			unit: "Damage",
			color: "#32EAED",
			border: "#1EB9BB",
			light: "#72F1F3",
			text: "#19979A",
			count: 8
		}
	]
};

// cog HP function
const cogHP = (lvl) => { return (lvl + 1) * (lvl + 2) + (lvl >= 12 ? 14 : 0); };

// gag object
var Gag = function(track, ID, organic) {
	this.t = track;
	this.i = ID;
	this.o = organic;
};

// get gag data
Gag.prototype.info = function() {
	var data = this.i == 7 ? gags.gen : gags.items[this.t * 7 + this.i];
	var tile = data.tile;
	var name = data.name;
	var arg = this.i == 7 ? this.t + (this.o ? 7 : 0): data.arg;
	var acc = data.acc;
	if (typeof(tile) == 'object') { tile = tile[winter]; };
	if (typeof(name) == 'object') { name = name[winter]; };
	if (typeof(arg) == 'object') { arg = arg[1]; };
	if (typeof(acc) == 'object') { acc = acc[1]; };
	if (this.o && this.t != 2 && this.i < 7) { arg = organicBonus(arg); };
	return {
		name: name,
		tile: tile,
		acc: acc,
		all: data.all,
		arg: arg
	};
};

// cog object
var Cog = function(lvl, v2) {
	this.lvl = lvl;
	this.v2 = v2;
	this.hp = cogHP(lvl);
	if (v2) { this.hp <<= 1; };
	this.tracks = [0, 0, 0, 0, 0, 0, 0];
	this.combo = [0, 0, 0];
	this.plating = 0;
	this.dropMissed = 0;
	this.comboBonus = 0;
	this.lureBonus = 0;
	this.lureGag = 0;
};

// copy cog
Cog.prototype.copy = function() {
	cog = new Cog(this.lvl, this.v2);
	cog.hp = this.hp;
	for (var i = 0; i < 7; i++) {
		cog.tracks[i] = this.tracks[i];
	};
	for (var i = 0; i < 3; i++) {
		cog.combo[i] = this.combo[i];
	};
	cog.plating = this.plating;
	cog.dropMissed = this.dropMissed;
	cog.comboBonus = this.comboBonus;
	cog.lureBonus = this.lureBonus;
	return cog;
};

// version check
Cog.prototype.version = function() {
	if (this.v2) { return this.hp > cogHP(this.lvl) ? '2.0' : '1.0'; };
	return '1.0';
};

// resist damage
Cog.prototype.resist = function(dmg) {
	var res = this.v2 ? Math.floor(this.lvl * 1.5) : 0;
	var buf = dmg;
	dmg -= res;
	dmg = dmg < 0 ? 0 : dmg;
	this.plating += buf - dmg;
	return dmg;
};

// damage cog
Cog.prototype.hit = function(gag) {
	if ((gag.t == 4 || gag.t == 5) && this.lureGag) {
		if (this.lureGag != gag.t) {
			this.hp -= this.resist(this.lureBonus);
			this.lureGag = 0;
			this.tracks[2] = 0;
		};
	};
	switch (gag.t) {
		case 0: break;
		case 1: {
			if (this.tracks[1]) {
				this.tracks[1] = 0;
			} else {
				this.tracks[1] = gag.info().arg;
			};
		}; break;
		case 2: {
			if (this.tracks[1]) {
				this.hp -= this.resist(this.tracks[1]);
				this.tracks[1] = 0;
			} else {
				this.tracks[2] = gag.info().arg;
			};
		}; break;
		case 3: {
			var dmg = this.resist(gag.info().arg);
			this.hp -= dmg;
			this.tracks[3] += dmg;
			this.tracks[2] = 0;
			this.combo[0]++;
		}; break;
		case 4:
		case 5: {
			var dmg = gag.info().arg;
			if (this.tracks[2]) {
				this.lureBonus += lureBonus(dmg);
				this.lureGag = gag.t;
			};
			dmg = this.resist(dmg);
			this.hp -= dmg;
			this.tracks[gag.t] += dmg;
			this.combo[gag.t - 3]++;
		}; break;
		case 6: {
			if (this.tracks[2]) {
				this.dropMissed += gag.info().arg;
				break;
			};
			var dmg = this.resist(gag.info().arg);
			this.hp -= dmg;
			this.tracks[6] += dmg;
		}; break;
	};
	return this;
};

// apply bonus damage to cog
Cog.prototype.bonus = function() {
	if (this.combo[0] > 1) {
		var dmg = comboBonus(this.tracks[3]);
		this.hp -= dmg;
		this.comboBonus += dmg;
	};
	if (this.combo[1] > 1) {
		var dmg = comboBonus(this.tracks[4]);
		this.hp -= dmg;
		this.comboBonus += dmg;
	};
	if (this.combo[2] > 1) {
		var dmg = comboBonus(this.tracks[5]);
		this.hp -= dmg;
		this.comboBonus += dmg;
	};
};