# QUERY

## Standard SQL

SELECT <fields> (FROM TABLE) WHERE <conditions> GROUP BY <fields> ORDER BY <fields> <order>


## Basic Operations

FILTER: <conditions>
AGGREGATE: <fields>, <sets>
SORT: <fields> <order>

Kind of like SQL but here there is no need to specify which table, fields and other things.
Also it should be common to use all fields/specific fields more easily in groups and not shown as JSON.
Two more aggregation mechanisms that came to mind when thinking of sets are:

EXPAND: <set>
COLLAPSE: <set> | <fields> AS <set>

Assume a single namespace/catogory Shape to consider the use of EXPAND/COLLAPSE.
Shape because its kind of conflicting on parent class definition. It is critically about sets.
It is possible to solve using FULL JOIN, i think. 


Shape
-----
Square


Super
-----
Square	Rhombus
Square	Rectangle
