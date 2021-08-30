# Design

This issue describes how to implement the `closures` concept exercise for the `javascript` track.

## Goal

The goal of this exercise is to teach the student how _closures_ are implemented in `JavaScript`.

In other words: how _values_ can be _enclosed_ in a _function_. It touches onto `scoping` and `functions` in general, and is usually used as `higher-order-functions`, `callbacks` or to change `visibility` (think: private).

## Learning objectives

- Function that returns an "enclosed" value (think `private`)
- Function that _mutates_ an "enclosed" value (think `increment`/`id` generation)
- Function that combines an "enclosed" value with some input (think higher order/adder)
- Variable scope
- Creating closures in loops (A common mistake)

## Out of scope

- Shadowing values (unless you can make this very concise)
- Hoisting (especially: enclosing `var`)
- Context (`this`, `arguments`, `new.target`)

## Concepts

- `closures`

## Prerequisites

- `arrays`
- `functions`
