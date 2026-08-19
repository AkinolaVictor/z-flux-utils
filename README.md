<div align="center">

**Z-Flux Utils** — animation presets and helpers for the Z-Flux UI library.

</div>

# z-flux-utils

A small companion package that powers the motion in [Z-Flux](https://z-flux.vercel.app/) components. It ships:

- **~150 named GSAP animation presets** for text reveals, overlay/split-text effects, vertical scroll, and dual-section scroll layouts.
- **DOM/scroll math helpers** — find scrolling ancestors, measure scroll heights, split a container into N layers, debounce, randomize, negate values, etc.
- **TypeScript-first** with CJS + ESM + `.d.ts` bundles.

### 🔗 Links
- 🌼 [Official website →](https://z-flux.vercel.app/)
- 🧩 [See all components →](https://z-flux.vercel.app/components/)
- 🚀 [Getting started →](https://z-flux.vercel.app/getting_started)
- 📦 [npm →](https://www.npmjs.com/package/z-flux-utils)
- 🐙 [GitHub →](https://github.com/AkinolaVictor/z-flux-utils)

---

## Install

```bash
npm install z-flux-utils
```

**Peer dependencies:** `react` ≥ 16, `react-dom` ≥ 16.
**Runtime dependencies** (installed automatically): `gsap`, `@gsap/react`, `@types/react`.

---

## What you get

### 🎬 Animation presets

All presets are plain objects of GSAP `vars` (typically `[from, to]` keyframes). Pass them straight into a `gsap.to()` / `gsap.fromTo()` call, or into your own scroll-driven wrapper.

| Export | Use it for | Count |
|---|---|---|
| `z_text_animations` | Text reveals on chars / words / lines (fade, bend, scale, rotate, perspective, cinematic zooms, clip-path masks, glitch, …) | ~80 |
| `overlay_text_animation` *(as `overlay_text_animations`)* | Overlay / split-text wipes, peels, folds, slices, iris/lens closures — each with selectable `transform-origin` | ~40 |
| `vertical_scroll_animations` | Single-element scroll-triggered reveals (slide, scale, stretch, flip, blur, eclipse, helix, …) | ~30 |
| `dual_scroll_animations` | Two-section scroll layouts (row, column, stack, layer) with ~35 tween variants per section pair | ~35 |
| `dualScrollStyleDepencies` *(as `dualScrollStyleDepencies`)* | `style` objects for the 8 dual layouts (`col`, `row`, `col_2`, `row_2`, `stack`, `stack_2`, `stack_3`, `layer`) — handles `flexDirection`, `overflow:hidden`, sticky positioning, and `reverse` direction | 8 layouts |

#### Quick example

```ts
import { z_text_animations, build_extend_animation } from "z-flux-utils"
import gsap from "gsap"

// z_text_animations.FadeUp → { opacity: [0,1], y: [100,0], duration: [null,1], stagger: [null,0.1] }
const vars = build_extend_animation(z_text_animations.FadeUp, "to")  // → { opacity: 1, y: 0, ... }

gsap.fromTo(".heading span", { ...build_extend_animation(z_text_animations.FadeUp, "from") }, vars)
```

#### Overlay animation shape

Each `overlay_text_animation` entry exposes:

```ts
{
  defaultGsap: { /* GSAP vars */ },
  animation_origins: ["bottom", "center", "top", /* … */],  // first entry is the default transform-origin
  color?: "rgba(0,0,0,0.8)"  // present on OpacityX / OpacityY
}
```

#### Dual-scroll animation shape

```ts
{
  currentStyle: "layer" | "row" | "col" | "stack" | /* … */,  // which layout from dualScrollStyleDepencies
  distance?: "width",          // optional: scroll by width instead of height
  animateStyle: ({ value, eachHeight, eachWidth, reverse }) => ({
    section1: { /* GSAP vars */ },
    section2: { /* GSAP vars */ },
  })
}
```

`dualScrollStyleDepencies(animationDirection)` returns the matching `style` objects — pass `"reverse"` to flip flex direction and sticky attachment (`top` ↔ `bottom`, `left` ↔ `right`).

---

### 🛠️ Utility functions

| Function | What it does |
|---|---|
| `findScrollingElement(elem, direct)` | Walks up the DOM to find the first scrollable ancestor (`overflow-y: auto\|scroll` with overflowing content). Falls back to `document.scrollingElement`. Pass `direct = true` to start from the element itself, `false` to start from a `querySelector` match. |
| `delayer({ working, timeout, time, func })` | Vanilla debounce. Clears any pending timeout, then runs `func` after `time` ms (default `500`). `working` and `timeout` are mutated in place. |
| `delayer_react({ working, timeout, time, func })` | Same as `delayer`, but stores `working` / `timeout` in React `RefObject`s so state survives re-renders. |
| `build_extend_animation(animation, which, negator?)` | Given a `{ key: [from, to] }` preset, returns either the `"from"` (index 0) or `"to"` (index 1) flat keyframe object. If `negator[key]` is truthy, prepends `"-"` to that value. |
| `getProgressionData(progression, chars, words, lines, speed, playOnScroll)` | Picks which nodes to animate (`"char"` / `"word"` / `"line"` / `"char_line"` / `"word_line"`), returns `{ set, animate, speed }`. Combined modes flatten per-line using `line.contains(node)`. |
| `countNumbers(arg)` | Number → `[0, 1, …, n-1]`. Anything else → `[...arg]`. |
| `getLayerWidth(parent, count, dimension)` | Splits a parent container into `count` equal slices; returns `{ lastWidth, eachWidth }` (the last slice absorbs any rounding remainder). |
| `getScrollHeight(containerRef, setHeight)` | Sums the children's `width`s and writes the result to React state. Used for horizontal scroll triggers. |
| `getBiggerScrollHeight({ ref, ref_2, which, setHeight })` | Same idea, but for **two** containers — returns `{ max, con1, con2, each1, each2 }` for whichever axis (`width`/`height`) you pass via `which`. |
| `randomizeArray(arr)` | In-place Fisher–Yates shuffle. Returns the same array. |
| `value_negator(obj, key)` | Negates a numeric value (number **or** numeric CSS string like `"150%"`, `"-12px"`, `"1.5"`); preserves the unit. Safe on `null` / `undefined` / non-numeric strings. |
| `justSayHello({ name })` | `console.log("Hey!!! Hello", name, ". Package is updated!!!")` — the friendly smoke-test helper. |

---

## Build

Source lives in `src/` (TypeScript) and is bundled by Rollup into:

- `dist/index.js` — CJS
- `dist/index.mjs` — ESM
- `dist/index.d.ts` — types

```bash
npm run build            # rollup -c
npm run build-lib        # rollup -c --bundleConfigAsCjs
npm run build-lib2       # rollup -c (alias)
```

Publish:

```bash
npm run publish_access   # npm publish --access public
npm run build-publish    # build + git commit + publish
npm run push             # git commit + publish
```

---

## License

MIT — © [Akinola Victor](https://github.com/AkinolaVictor)

[docs-url]: https://z-flux.vercel.app/
[logo-url]: https://z-flux.vercel.app/z-flux-1.png
