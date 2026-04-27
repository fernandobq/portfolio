# Design System — febaqui.dev

Reference this when adding new sections or components. All tokens live in `src/index.css`.

---

## Color tokens

| Variable | Value | Use |
|---|---|---|
| `--bg` | `#0b0716` | Page background |
| `--bg-elev` | `#150b29` | Cards, panels, modals |
| `--ink` | `#f5f1ff` | Primary text |
| `--muted` | `#a89fc7` | Secondary text, descriptions |
| `--dim` | `#6b6388` | Tertiary — labels, line numbers |
| `--line` | `rgba(198,172,250,0.12)` | Subtle borders, dividers |
| `--line-strong` | `rgba(198,172,250,0.22)` | Emphasized borders, card edges |
| `--primary` | `#b69cff` | Brand accent, hover states, highlights |
| `--primary-2` | `#8b5cf6` | Deeper purple, gradients |
| `--accent` | `#c0fa6b` | Neon lime — use sparingly for emphasis |
| `--warn` | `#ff7ab6` | Hot pink — alerts, syntax highlights |

---

## Typography

| Variable | Font | Use |
|---|---|---|
| `--serif` | Space Grotesk | Display headings (h1, h2, h3) |
| `--sans` | Space Grotesk | Body text |
| `--mono` | JetBrains Mono | Labels, tags, code, eyebrows |

### Helper classes
```html
<span class="serif">Display heading</span>
<span class="mono">Code label</span>
<span class="eyebrow">Section label</span>   <!-- mono + uppercase + tracked -->
<span class="muted">Secondary text</span>
<span class="dim">Tertiary text</span>
<span class="ink">Override to primary color</span>
```

---

## Buttons

```html
<a href="#" class="btn">Default outline</a>
<a href="#" class="btn primary">Filled primary</a>
<a href="#" class="btn ghost">Borderless</a>
```

---

## Chips / tags

```html
<span class="chip">Vue</span>
<span class="chip solid">Active / selected</span>
<button class="chip">Clickable filter</button>
```

---

## Section header

Every numbered section uses this pattern:

```html
<div class="section-head reveal">
  <span class="num">(0X)</span>
  <h2>Section <em>title</em>.</h2>
  <span class="num">/slug</span>
</div>
```

- `<em>` inside `h2` renders in `--primary` color, normal weight.
- Current section numbers: 02 About · 03 Stack · 04 Work. Next section = 05.

---

## Layout

```html
<!-- Full-width section -->
<section id="section-id" class="section-wrapper">
  <div class="wrap">
    <!-- content -->
  </div>
</section>
```

- `.section-wrapper` — `padding: 120px 0 60px` (80px/40px on mobile).
- `.wrap` — max-width 1280px, centered, 32px horizontal padding (20px mobile).
- All content sits at `z-index: 1` via `.wrap`; background layers are `z-index: 0`.

---

## Scroll reveal

Add `.reveal` to any block-level element to animate it in when scrolled into view.
The observer is registered in `App.vue` via `IntersectionObserver`.

```html
<div class="reveal">Animates in — opacity + translateY → 0</div>
```

Motion speed is controlled globally by `data-motion` on `<html>` (set in `index.html`):
- `subtle` — fast, minimal movement
- `medium` — default (800ms, 20px)
- `heavy` — slow, large movement (1200ms, 40px)

---

## Cursor blink

```html
<span class="cursor"></span>   <!-- blinking block cursor -->
```

Used in the Logo wordmark. Color = `currentColor`.

---

## Background effects

The `.bg-fx` (gradient blobs) and `.bg-grid` (dot grid) are `position: fixed` layers in `App.vue`.
They sit at `z-index: 0` and are `pointer-events: none`. Do not put content there.

---

## Adding a new section — full template

```vue
<!-- In HomeView.vue, add after the last section and before #contact -->

<section id="new-id" class="section-wrapper">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="num">(05)</span>
      <h2>New <em>section</em>.</h2>
      <span class="num">/new-id</span>
    </div>

    <!-- Main content — use .reveal on major blocks -->
    <div class="reveal">
      <!-- Your content here -->
    </div>
  </div>
</section>
```

Then add the nav link in `src/components/Navigation/Header.vue`:
```ts
const sections = [
  { id: 'about',   label: 'About',   num: '01' },
  { id: 'tech',    label: 'Stack',   num: '02' },
  { id: 'work',    label: 'Work',    num: '03' },
  { id: 'new-id',  label: 'New',     num: '04' },  // ← add here
  { id: 'contact', label: 'Contact', num: '05' },
]
```

---

## Common card pattern

```html
<div class="card reveal">
  <div class="eyebrow">Category label</div>
  <h3 class="serif">Card title</h3>
  <p class="muted">Description text.</p>
  <div class="chip-row">
    <span class="chip">Tag</span>
  </div>
</div>
```

```css
/* In your component's <style scoped> */
.card {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 24px;
  background: var(--bg-elev);
  transition: border-color 200ms, transform 200ms;
}
.card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}
.chip-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
```
