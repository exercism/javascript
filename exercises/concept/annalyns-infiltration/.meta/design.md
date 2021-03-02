# Design

## Learning objectives

- Know of the existence of the `boolean` type.
- Know about boolean operators and how to build logical expressions with them.
- Know of the boolean operator precedence rules.
- Know where it's documented, or at least how to search for it.

## Out of scope

- Binary operators

## Concepts

- `booleans`: Know of the existence of the `boolean` type.
  Know about boolean operators and how to build logical expressions with them.
  Know of the boolean operator precedence rules.
  Know where it's documented, or at least how to search for it.

## Prerequisites

- `basics`

## Analyzer

This exercise could benefit from the following rules added to the the [analyzer][analyzer]:

- Verify that the `canExecuteFastAttack` function is as simple as possible (single negation `!`).
- Verify that the `canSpy` function is as simple as possible (double OR `||`).
- Verify that the `canSignalPrisoner` function is as simple as possible (single OR `||` and single negation `!`)
- Verify that the `canFreePrisoner` function is not overly complex.
  Helper variables may be used, but those should result in a suggestion about combining them (informational, non-essential).

[analyzer]: https://github.com/exercism/javascript-analyzer
