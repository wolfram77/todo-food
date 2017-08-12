# SUPER

Defines super set for a given set in **[FOOD](food.md)**. Can be used for filtering, and aggregating
after joining with set fields. Each set can have multiple super sets, hence making it necessary to do
a FULL JOIN. Sets can also have alternate names defined in **[ALT](alt.md)**. The syntax to establish
the filtering and aggregating method needs to be defined, and might need to include additional EXPAND,
COLLAPSE keywords. Exactly how do you find the super set at multiple levels? Several joins?


## Structure

| Type  | Field | Description                   |
|-------|-------|-------------------------------|
| TEXT  | Set   | set                           |
| TEXT  | Sup   | super set                     |


## Description

**Set**. Specifies name of a set.

**Sup**. Specifies name of super set.
