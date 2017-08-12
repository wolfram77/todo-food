# FOOD

Table which describes all food items. It describes various attributes which can be used to filter,
aggregate and sort the result. The result does not always have to be the queried versions of this
table, but it is going to be that in most of the cases, as that is what is most essential. Other
tables are present to support this table to enable use of a better query. Results on this table,
or any other table should be available upto a certain limit, so as to not overload the database
very large result queries.

Other tables include **[ALT](alt.md)**, which provides simpler alternate names for fields/sub-fields
(and possibly for set names too), and **[SUPER](super.md)**, which provides super sets for the sets
mentioned in set fields of this table.

Now i am thinking it is better to split name brand+product+flavour. Lets recheck which is better.
And the confusion with data. As of now, since i am running out of time, lets go ahead with creating
this table without any evaluated fields, or class/set fields (so basically collecting data). At a
alter point of time i can run queries and assign sets to foods. Also some scripts might be needed
to generate the parts of name of food, or it might be needed to do it manually.


## Sturcture

| Type  | Set   | Field | Name                  |
|-------|-------|-------|-----------------------|
| UUID  |       | Id    | identification        |
| TEXT  |       | Ima   | image                 |
| TEXT  | Y     | Nam   | name                  |
| TEXT  |       | Des   | description           |
| REAL  |       | Qua   | quantity              |
| TEXT  | Y     | Pac   | package               |
| REAL  |       | Pri   | price                 |
| TEXT  |       | Ing   | ingredients           |
| JSONB |       | Int   | internals             |
|       |       |       |                       |
| JSONB |       | Eva   | evaluated             |
| JSONB |       | Set   | sets                  |
| TEXT  | Y     | Bra   | brand                 |
| TEXT  | Y     | Typ   | type                  |
| TEXT  | Y     | Gra   | grade                 |
| TEXT  | Y     | Fla   | flavour               |
| TEXT  | Y     | Tas   | taste                 |
| TEXT  | Y     | Coo   | cooking               |
| TEXT  | Y     | Mai   | main ingredient       |
| TEXT  | Y     | Spe   | special ingredient    |


## Description

**Id**. Calculated as MD5 hash (128b) of `Nam`. Can be used only to point to a
particular food.

**Img**. Point to Amazon hosted images, so as to *utilize* their server bandwidth. Can be
used to display images.

**Nam**. Full name of food = `{brand} {type/product} {flavour/grade} {package} {quantity}`.
Can be used to display name.

**Des**. Who has the time to fill in kBs of text into this field when we dont really
use it? Can be used for logging all your problems.

**Qua** `kg|L`. Net quantity of food. Varies for packaged foods, but set to 100g (0.1)
for natural foods. Can be used for filtering, aggregating, and sorting.

**Pri** `INR`. Price of food. Can be shown as per other currencies in past/present/future!
Can be used for filtering, and sorting.

**Pac**. Describes what is used to contain the food. Can be used for filtering, and aggregating. Possible
values include *can*, *bottle*, *carton*, *tin*, *pouch*, *pack?*, *jar*, *container?*.

**Gra**. Defines grade classification of the product. Can be used fur filtering, and aggregating. Possible
values include *premium*, *super*, *classic*, *everyday*, *regular*, *economy*. (grade+flavour also exists)

**Fla**. Defines the flavour of the food. Can be used for filtering, and aggregating. Possible values
include *kesar-pista*, *mango*, *chocolate*, *vanilla*, *strawberry*, *cookies-n-creme*, *elaichi*, *rose*,
*badam*, *orange*, *lemon*, *grape*, *pineapple*, *lime-juice-cordial*, *mixed-fruit*, *nimbu-pani*,
*kesar-badam*, *caramel*, *oats*, *badam-booster*, *classic-chocolate*, *pista-badam*, *vanilla-delight*,
*premium-chocolate?*, *junior-vanilla?*, *diabetes-care-vanilla?*, *mama-chocolate?*, *blue-bolt?*,
*mixed-fruit-delight?*, *berry-blast?*, *amla-plus?*, *instant?*, *100%-apple-juice?*, *pro-woman*.

**Tas**. Defines taste of food. These include sweet, salty, sour, bitter, chilli, waste.

**Typ**. Big field.

**Coo**. Cooking method used for food. Can be used fir filtering, aggregating.

**Mai**. Main ingredient field. Classed. Can be used for filtering, and aggregating.

**Spe**. Special ingredient field. May be redundant. Classed. Can be used ti
