# foodint

consider the following sql queries:
- select * from food where brand='cadbury'
  - alter for exactly equal
  - * WHERE brand='cadbury'
- select * from food where brand<>'cadbury'
  - alter for exactly not equal
  - * WHERE brand<>'cadbury'
- select * from food where brand<=cadbury
  - alter for child or equal to
  - * WHERE brand=ANY(SELECT id FROM groups WHERE on='brand' AND ancestry ? 'cadbury') OR brand='cadbury'
- select * from food where brand>=cadbury
  - alter for parent or equal to
  - * WHERE (SELECT ancestry FROM groups WHERE on='brand' AND id='cadbury') ? brand OR brand='cadbury'
- select * from food where brand like cadbury
  - alter for parent / child (linked)
  - * WHERE (above 3 conditions OR)
- select * from food where brand not like cadbury
  - alter for not parent / child (not linked)
  - * WHERE (not of above condition)
- select * from food group by brand
  - alter for grouping all food having brand together (brand, no brand)
  - 
- select * from food group by brand, package
  - alter for grouping by set inclusion to brand and package (4 groups)
- select * from food group by brand_cadbury
  - alter for grouping all by brand cadbury and others (2 groups)
- select * from food group by #brand_cadbury
  - alter for grouping by all subgroups of brand cadbury
- select * from food group by #brand_cadbury, #package_jar
  - alter for grouping by all subgroups of brand cadbury and package jar
- select * from food group by ##brand_cadbury
  - alter for grouping by all subsubgroups of brand cadbury
- select * from food group by ##brand_cadbury, package_jar
  - alter for grouping by all subsubgroups of brand cadbury and package jar or not

- select * from food where name=gandi
  - ok
- select * from food where name like %gandi%
  - ok
- select * from food where price=something
  - ok
- select * from food where price<=something
  - ok
- select * from food where nut_energy=something
  - alter field name
- select * from food where nut_energy<=something
  - alter field name
- select * from food where attr_brand=gandi
  - alter for exactly equal
- select * from food where attr_brand<>gandi
  - alter for exactly not equal
- select * from food where attr_brand<=gandi
  - alter for child or equal to
  - select * from food where brand=any(select val from attr_brand where id=gandi) or brand=gandi
- select * from food where attr_brand>=gandi
  - alter for parent or equal to
  - select * from food where brand=any(select id from attr_brand where children contains gandi) or brand=gandi
- select * from food where attr_brand like gandi
  - alter for parent / child (linked)
  - select * from food where brand=any(combined of above 2 subqueries) or brand=gandi
- select * from food where attr_brand not like gandi
  - alter for not parent / child (not linked)
  - select * from food where brand<>any(combined of above 2 subqueries) and brand<>gandi
- select * from food group by attr_brand
  - alter for grouping all food having brand together (brand, no brand)
  - select * , brand!=null? brand : other as X from food group by X
- select * from food group by attr_brand, attr_package
  - alter for grouping by set inclusion to brand and package (4 groups)
  - select * , ... from food group by X, Y
- select * from food group by attr_brand_gandi
  - alter for grouping all by brand gandi and others (2 groups)
  - select * , brand==gandi? gandi : other as X from food group by X
- select * from food group by #attr_brand_gandi
  - alter for grouping by all subgroups of brand gandi
  - select f.* , a.id from food f join attr a on a.children_all contains f.brand where a.id=any(select children from a where id=gandi) group by a.id
- select * from food group by #attr_brand_gandi, #attr_package_jar
  - alter for grouping by all subgroups of brand gandi and package jar
- select * from food group by ##attr_brand_gandi
  - alter for grouping by all subsubgroups of brand gandi
- select * from food group by ##attr_brand_gandi, attr_package_jar
  - alter for grouping by all subsubgroups of brand gandi and package jar or not

see from below the structure of hierarchy table (can be called attr or something):
- id
- children
- children_all

- id
- children
- parents_all

a normmalized form of relation table that can be used for joining:
- id (not unique)
- parent

: SELECT * FROM food GROUP BY brand_cadbury
SELECT f.*, g.parent AS brand_cadbury FROM food FULL OUTER JOIN groups ON f.brand=g.id WHERE g.on='brand' AND g.parent=ANY('cadbury')

: SELECT * FROM food GROUP BY #brand_cadbury
SELECT f.*, g.parent AS #brand_cadbury FROM food FULL OUTER JOIN groups ON f.brand=g.id WHERE g.on='brand' AND g.parent=ANY('#cadbury')

: SELECT * FROM food GROUP BY ##brand_cadbury, package_jar
WITH groups_brand AS (SELECT * WHERE on='brand' AND parent=ANY(##cadbury))
WITH groups_package AS (SELECT * WHERE on='package' AND parent=ANY(jar))
SELECT f.*, gb.parent AS ##brand_cadbury, gp.parent AS ##package_jar FROM food FULL OUTER JOIN groups_brand ON f.brand=gb.id FULL OUTER JOIN ON groups_package ON f.package=gp.id

considering the naming of nutrients:
- hierarchical based names
  - help to see the hierarchy
  - are short
- full name
  - easy to remember and use
  - fatal in case of multi-row result (all times?)
