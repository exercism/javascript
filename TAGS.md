# Tags

This document aims to provide reasoning why `config.json` contains the `"tags"` it contains.

## Paradigms

- [x] `paradigm/declarative`: mostly popularised by libraries and frameworks such as React, Vue, etc.
- [x] `paradigm/functional`: there is a lot of support for functional programming, including various defactor libraries in the ecosystem providing functional programming patterns.
- [x] `paradigm/imperative`: the majority of scripts written in JavaScript, but also a _lot_ of DOM based interactivity sprinkles are imperative.
- [ ] `paradigm/logic`: whilst it is possible to write DSL or patterns that' allow for logic-based programming, JavaScript doesn't inherently support it.
- [x] `paradigm/object_oriented`: has been around in JavaScript since prototypes were a thing (so since the beginning), and more popular with the ES6 classes.

## Typing

- [ ] `typing/static`: it doesn't check types at compile time; there is no real compile-time (ignoring JIT)
- [x] `typing/dynamic`: type checking, if any, is done at runtime
- [ ] `typing/strong`: there are no type tokens in JavaScript
- [x] `typing/weak`: usually untyped languages are considered weakly typed too.

## Execution mode

- [ ] `execution_mode/compiled`: there is no real compilation step (ignoring JIT)
- [x] `execution_mode/interpreted`: code is interpreted directly (ignoring JIT)

## Platform

- [x] `platform/windows`: popularised by Electron and Node
- [x] `platform/mac`: popularised by Electron and Node
- [x] `platform/linux`: popularised by Electron and Node
- [x] `platform/ios`: popularised by PhoneGap/Cordova, Ionic, React-Native
- [x] `platform/android`: popularised by PhoneGap/Cordova, Ionic, React-Native
- [x] `platform/web`: it Just Works :tm: in all major browsers, and most minor browsers

## Runtime

- [ ] `runtime/standalone_executable`: it doesn't. Any executable that exists packages Node, or requires Node or a Browser.
- [x] `runtime/language_specific`: it runs on Node
- [ ] `runtime/clr`: it doesn't
- [ ] `runtime/jvm`: it doesn't
- [ ] `runtime/beam`: it doesn't
- [x] `runtime/wasmtime`: it doesn't, but JavaScript can compile to WASM, and thus then run on wastime. It's a bit of a cheat, but probably what people will search for.

## Used for

- [x] `used_for/artificial_intelligence`: popularised by TensorFlow
- [x] `used_for/backends`: popularised by Express
- [x] `used_for/cross_platform_development`: popularised by PhoneGap/Cordova, Ionic, React-Native, Electron and more
- [ ] `used_for/embedded_systems`: It's possible to run JavaScript on microcontrollers and IoT platforms, but the low-end nature makes it not a viable, professional, solution. Therefore this is not included.
- [ ] `used_for/financial_systems`: Whilst used in fintech to provide backend/frontend/app development, JavaScript's interpreted nature usually means it's _too slow_ or _type unsafe_ (we're talking micro and nanosecond benchmarks) to win from other programming languages often used to automate trading or provide banking solutions. It's therefore not included.
- [x] `used_for/frontends`: JavaScript has been used to make frontends interactive (VanillaJS, MooTools, jQuery, and is now used to build the entire frontend, including _all the different frontend libs and frameworks_). Even though it still relies on some rendering engine provided by the host system (often the DOM including relying on HTML + CSS), we can still consider this language to be used to build frontends.
- [x] `used_for/games`: probably one of the most popular replacements for browser-based games.
- [x] `used_for/guis`: same reason as frontends, which is more and more interesting as libraries such as React can now also render to less common/expected displays, such as terminals (and thus be used to build GUIs), not requiring CSS or other ways to provide styling.
- [x] `used_for/mobile`: yep, see platform
- [ ] `used_for/robotics`: it's possible. Things like Johnny-Five help a lot. However, it's not a _go to_ language to provide robotics programming, so it's not included.
- [ ] `used_for/scientific_calculations`: possible, and not uncommon especially for _visualisation_ (for example d3), but not a _go to_ language to do scientific calculations, so it's not included.
- [x] `used_for/scripts`: GitHubActions, shelljs, and similar, as well as the many many many cli "binaries".
- [x] `used_for/web_development`: yes
