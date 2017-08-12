# ALT

Describes alternate names for fields/sub-fields of **[FOOD](food.md)** so that one doesn't have to
needlessly memorize lots of acronyms just so as to be able to use this system. Alternate names may
include Hinglish too! They may also be applicable to field values as well (set names). The interface
should transparently replace alternate names with actual names in query. SQL tweaking involved! It is
not yet resolved whether SQL function, or server function be used for this purpose.


## Structure

| Type  | Field | Description                   |
|-------|-------|-------------------------------|
| TEXT  | Alt   | alternate name                |
| TEXT  | Act   | actual name                   |


## Description

**Alt**. Describes an alternate name for the actual name of field/sub-field. May also be applicable
for field values.

**Act**. Describes the actual name for an alternate name.
