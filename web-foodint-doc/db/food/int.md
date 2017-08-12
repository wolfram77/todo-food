# Int

Field which describes internals of a **[FOOD](../food.md)**. Has many sub-fields, none of which are mandatory.
It would be necessary to provide alternate long names to fields in **[ALT](../alt.md)**. There also has to be a
method to compare NULLs vs 0s. NULL==Inf (treated as most) or NULL==-Inf (treated as least)? There also
seems to be the need of pre-evaluated sub-fields.


## Structure

| Type  | Unit          | Sub-field     | Description                   |
|-------|---------------|---------------|-------------------------------|
| REAL  | kcal/100g\|mL | e             | energy                        |
| REAL  | g/100g\|mL    | c             | carbohydrates                 |
| REAL  | g/100g\|mL    | d             | dietary fibre                 |
| REAL  | g/100g\|mL    | f             | fats                          |
| REAL  | g/100g\|mL    | m             | minerals                      |
| REAL  | g/100g\|mL    | p             | proteins                      |
| REAL  | g/100g\|mL    | v             | vitamins                      |


## Description

**e**. Energy in food.

**c**. Carbohydartes in food.

**d**. Describes amount of food fibre. 

**f**. Describes amount of essential and non-essential fats.

**m**. Describes amount of minerals. We might want to add it up by their group on the periodic table.

**p**. Proteins contained in the food, including amino acids which can be broken down. We might want to
add it up based on whether it is essential or non-essential.

**v**. Vitamins contained in the food. Point to the specific chemical too?


## Full Structure

```javascript
{
	"e": energy (1500-2000kcal),
	"c": carbohydrates (g),
		"cs": sugars (1-2),
			"csm": monosaccharides,
				"csmg": glucose,
				"csma": galactose,
				"csmf": fructose,
				"csmx": xylose, ::
			"csd": disaccharides,
				"csds": sucrose,
				"csdl": lactose,
				"csdm": maltose,
				"csdt": trehalose,
			"csp": polyols,
				"csps": sorbitol,
				"cspm": mannitol,
				"cspg": glycerol?,
		"co": oligosaccharides (3-9),
			"com": malto-oligosaccharides,
				"comm": maltodextrins,
			"coo": other oligosaccharides,
				"coor": raffinose, ::
				"coos": stachyose,
				"coof": fructo-oligosaccharides,
		"cp": polysaccharides (>9),
			"cps": starch,
				"cpsa": amylose,
				"cpsp": amylopectin,
				"cpsm": modified starches,
			"cpn": non-starch polysaccharides,
				"cpnc": cellulose,
				"cpnm": hemicellulose, ::
				"cpnp": pectins,
				"cpnh": hydrocolloids,
	"d": dietary fibre (carbohydrate),
		"di": water-insoluble,
			"dib": beta-glucans,
			"dih": hemicellulose, ::
			"dil": lignin,
			"dix": xanthan gum,
			"dir": resistant starch,
		"ds": water-soluble,
			"dsa": arabinoxylan,
			"dsf": fructans,
			"dsu": polyuronide,
			"dsr": raffinose, ::
			"dsx": xylose, ::
			"dsd": polydextrose,
			"dsl": lactulose,
	"f": fats (g),
		"fu": unsaturated fat,
			"fum": monounsaturated fat,
				"fum7": w-7,
				"fum9": w-9,
			"fup": polyunsaturated fat,
				"fup3": w-3,
					"fup3a": alpha-linolenic acid (ALA) (2),
					"fup3e": eicosapentaenoic acid (EPA),
					"fup3d": docosahexaenoic acid (DHA),
				"fup6": w-6,
					"fup6l": linoleic acid (LA) (10),
					"fup6g": gamma-linolenic acid (GLA) *,
					"fup6h": dihomo-gamma-linolenic acid (DGLA),
					"fup6r": arachidonic acid (AA),
			"fut": trans fat,
				"futc": cholesterol,
		"fs": saturated fat,
			"fsi": interesterified fat,
	"m": minerals (mg),
		"mk": potassium (3500-NE),
		"mcl": chlorine (3400-3600),
		"mna": sodium (2400-2300),
		"mca": calcium (1000-2500),
		"mp": phosphorous (1000-4000),
		"mmg": magnesium (400-350),
		"mfe": iron (18-45),
		"mzn": zinc (15-40),
		"mmn": manganese (2-350),
		"mcu": copper (2-11),
		"mi": iodine (0.15-1.1),
		"mcr": chromium (0.12-NE),
		"mmo": molybdenum (0.075-2),
		"mse": selenium (0.07-0.4),
		"mco": cobalt (0-NE),
	"p": proteins (amino acids) (mg),
		"ph": histidine (10-?),
		"pi": isoleucine (20-?),
		"pl": leucine (39-?),
		"pk": lysine (30-?),
		"pm": methionine (15-?) (M+C),
		"pf": phenylalanine (25-?) (F+Y),
		"pt": threonine (15-?),
		"pw": tryptophan (4-?),
		"pv": valine (26-?),
		"pa": alanine,
		"pr": arginine *,
		"pd": aspartic acid,
		"pc": cysteine *,
		"pe": glutamic acid,
		"pq": glutamine *,
		"pg": glycine *,
		"pp": proline *,
		"ps": serine *,
		"py": tyrosine *,
		"pn": asparagine *,
		"pu": selenocysteine,
		"po": pyrrolysine **,
	"v": vitamins (mg),
		"va": retinol, retinal, 4 cartenoids (inc. beta carotene) (?-0.9-3),
		"vb": b group vitamins,
			"vb1": thiamine (?-1.2-ND),
			"vb2": riboflavin (?-1.3-ND),
			"vb3": niacin, niacinamide, nicotinamide riboside (?-16-35),
			"vb5": pantothenic acid (?-5-ND),
			"vb6": pyridoxine, pyridoxamine, pyridoxal (?-1.5-100),
			"vb7": biotin (?-0.03-ND),
			"vb9": folic acid, folinic acid (?-0.4-1),
			"vb12": cyanocobalamin, hydroxocobalamin, methylcobalamin, adenosylcobalamin (?-0.0024-ND),
		"vc": ascorbic acid (?-90-2000),
		"vd": cholecalciferol (D3), ergocalciferol (D2) (?-0.01-0.05),
		"ve": tocopherols, tocotrienols (?-15-1000),
		"vk": phylloquinone, menaquinones (?-0.12-ND),
	"o": other nutrients (conditional),
		"oc": choline *,
		"oi": inositol *,
		"ot": taurine *,
		"on": nucleotides *
}

// * Essential only in certain cases.[3][4]
// ** Pyrrolysine, sometimes considered "the 22nd amino acid", is not used by humans.[5]
```
