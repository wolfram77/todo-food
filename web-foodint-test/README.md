WHAT
----

type (type)(subtype)
owner (owner)(subowner)
name (brand)(name)(package)(quantity)
price (price)(price/kg)
energy (carbohydrates)(fats)
nutrients (amino acids)(fatty acids)(vitamins)(minerals)(conditionally essential)
others (non-essential substances)(harmful substances)
ingredients (list, hierarchy of ingredients)
US FDA protein/kcal/day = 22-78g for 2000kcal



ACTIONS
-------

generated id based on data (string-hash)
add food, form
verify and revise food, form
search food, form

mongodb: filter() sort() aggregate()
google: map() reduce()



NOTES
-----

search(ing) (functions by people? "like" vs "regex")
interface: scratch? text?

single chain query -> single result (1 input)
multi chain query -> single result (n input)
(vit:sort,rank + min:sort,rank + pro:sort,rank)sort

assumptions on defaults at query time
(sugar vs sucrose)


ex query-> which company uses most sugar in its ice cream?
(there might be a one-liner to find that)(awk)

ex query-> which is the most nutrient rich health drink?
sort health drinks by vitamins, proteins, minerals
rank them and display them in order of their total rank

the query can be made either by using sql or using a new
language, but no matter what, it will be general, not specific
to this use case.



ASK QUESTIONS
-------------
which company uses most sugar in its ice creams?
SELECT Owner, AVG(Carbohydrates.Sugar) AS "Sugar" FROM FOOD?
WHERE Type="ice cream"
GROUP BY Owner
ORDER BY "Sugar" DESC

which health drink is the most healthy (based on proteins, vitamins, minerals daily value)?
SELECT Name, (Proteins/DAILY_PROTEINS)+(Vitamins/DAILY_VITAMINS)+(Minerals/DAILY_MINERALS) AS "HP" FROM FOOD?
WHERE Type="health mix"
ORDER BY "HP" DESC

are biscuits more sweet or juices?
SELECT Type, AVG(Carbohydrates.Sugar) AS "Sugar" FROM FOOD?
WHERE Type IN ("biscuit", "juice")
GROUP BY Type
ORDER BY "Sugar" DESC

are chocolate biscuits more sweet or vanilla (cream, chips)?
SELECT Flavour, AVG(Carbohydrates.Sugar) AS "Sugar" FROM FOOD?
WHERE Type="biscuit" AND Flavour IN ("chocolate", "vanilla")
GROUP BY Flavour
ORDER BY "Sugar" DESC

are cakes/biscuits more sweet or juices?
-- how can we merge 2 types?

what is the most sugary juice?
SELECT Name, Carbohydrates.Sugar AS "Sugar" FROM FOOD?
WHERE Type="juice"
ORDER BY "Sugar" DESC

which are the most salty chips (potato+kurkure+bingo)?
SELECT Name, Others.Salt AS "Salt" FROM FOOD?
WHERE Type="Chips"
ORDER BY "Salt" DESC

which flavour is more salty?
SELECT Name, AVG(Others.Salt) AS "Salt" FROM FOOD?
WHERE Type="Chips"
GROUP BY Flavour
ORDER BY "Salt" DESC

differing category comparision
are biscuits more healthy or toasted foods?
are square buiscuits more healthy or red biscuits?



How do we query?
Filter can work using CLASS type array values.
Since MongoDB will create an index for each array value automatically if we create it for
the array field itself, search for a specific term in the array list should be easy.
Now we have a list of array values for each type and we need to group based on a type.
Solution 1, we can group by a particular array index value, say first.

Doing a similar thing in SQL?



TABLES
------

FOOD
Z id
Y image
W description
N name
	S sub
P package
Q quantity
R price
I int
C class

CLASS
T  type
O  owner
S  shape
X  texture
F  flavour
C  colour
A  taste
I1 ingredient primary
I2 ingredient secondary (special)
K  cooking

SUPER
C category
B sub class
A super class

INT
I ingredients
E energy
C carbohydrates
	S sugars (1-2)
		M monosaccharides
			G glucose
			A galactose
			F fructose
			X xylose
		D disaccharides
			S sucrose
			L lactose
			M maltose
			T trehalose
		P polyols
			S sorbitol
			M mannitol
			G glycerol?
	O oligosaccharides (3-9)
		M malto-oligosaccharides
			M maltodextrins
		O other oligosaccharides
			R raffinose
			S stachyose
			F fructo-oligosaccharides
	P polysaccharides (>9)
		S starch
			A amylose
			P amylopectin
			M modified starches
		N non-starch polysaccharides
			C cellulose
			M hemicellulose
			P pectins
			H hydrocolloids
D dietary fiber (carbohydrate)
	I water-insoluble
		B beta-glucans
		H hemicellulose
		L lignin
		X xanthan gum
		R resistant starch
	S water-soluble
		A arabinoxylan
		F fructans
		U polyuronide
		R raffinose
		X xylose
		D polydextrose
		L lactulose
F fats (mg/kg)
	U unsaturated fat
		M monounsaturated fat
			7 w-7
			9 w-9
		P polyunsaturated fat
			3 w-3
				A Alpha-linolenic acid (ALA)	(2)
				E Eicosapentaenoic acid (EPA)
				D Docosahexaenoic acid (DHA)
			6 w-6
				L Linoleic acid (LA)			(10)
				G Gamma-linolenic acid (GLA) *
				H Dihomo-gamma-linolenic acid (DGLA)
				R Arachidonic acid (AA)
		T trans fat
			C cholesterol
	S saturated fat
		I interesterified fat
M minerals (mg)
	K  potassium 	(3500-NE)
	Cl chlorine		(3400-3600)
	Na sodium		(2400-2300)
	Ca calcium		(1000-2500)
	P  phosphorous	(1000-4000)
	Mg magnesium	(400-350)
	Fe iron			(18-45)
	Zn zinc			(15-40)
	Mn manganese	(2-350)
	Cu copper		(2-11)
	I  iodine		(0.15-1.1)
	Cr chromium		(0.12-NE)
	Mo molybdenum	(0.075-2)
	Se selenium 	(0.07-0.4)
	Co cobalt 		(0-NE)
P proteins (amino acids) (mg)
	H histidine 	(10-?)
	I isoleucine 	(20-?)
	L leucine 		(39-?)
	K lysine 		(30-?)
	M methionine 	(15-?) (M+C)
	F phenylalanine (25-?) (F+Y)
	T threonine 	(15-?)
	W tryptophan 	(4-?)
	V valine 		(26-?)
	A alanine
	R arginine *
	D aspartic acid
	C cysteine *
	E glutamic acid
	Q glutamine *
	G glycine *
	P proline *
	S serine *
	Y tyrosine *
	N asparagine *
	U selenocysteine
	O pyrrolysine **
V vitamins (mg)
	A   retinol, retinal, 4 cartenoids (inc. beta carotene)						(?-0.9-3)
	B1  thiamine																(?-1.2-ND)
	B2  riboflavin																(?-1.3-ND)
	B3  niacin, niacinamide, nicotinamide riboside								(?-16-35)
	B5  pantothenic acid														(?-5-ND)
	B6  pyridoxine, pyridoxamine, pyridoxal										(?-1.5-100)
	B7  biotin																	(?-0.03-ND)
	B9  folic acid, folinic acid												(?-0.4-1)
	B12 cyanocobalamin, hydroxocobalamin, methylcobalamin, adenosylcobalamin	(?-0.0024-ND)
	C   ascorbic acid															(?-90-2000)
	D   cholecalciferol (D3), ergocalciferol (D2)								(?-0.01-0.05)
	E   tocopherols, tocotrienols												(?-15-1000)
	K   phylloquinone, menaquinones												(?-0.12-ND)
O others (* conditional)
	C choline *
	I inositol *
	T taurine *
	N nucleotides *

(*) Essential only in certain cases.[3][4]
(**) Pyrrolysine, sometimes considered "the 22nd amino acid", is not used by humans.[5]
