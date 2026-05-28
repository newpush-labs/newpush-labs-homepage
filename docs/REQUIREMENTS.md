# NewPush Labs Homepage — Requirements

> Canonical specification for [newpush-labs-homepage](https://github.com/newpush-labs/newpush-labs-homepage).
> All PRs and implementations should be validated against this document.

## Project Overview

The **NewPush Labs Homepage** is the public documentation website for [NewPush Labs](https://labs.newpush.com/), a platform that lets users experience, test, and learn trending open-source tech stacks. Built with VitePress, the site serves as the primary reference for guides, component documentation, application catalogues, and onboarding materials.

**Key facts:**

- 475+ Markdown pages, 830+ images
- Three main content sections: Guides, Reference, Applications
- Published at `https://labs.newpush.com/`
- MIT-licensed, open-source

---

## FR-1 — VitePress Static Site Generation

The site **must** be built using VitePress (≥ 1.3.4) and produce a fully static output suitable for hosting on any CDN or static file server.

**Acceptance criteria:**

- `npm run docs:build` completes without errors or warnings
- Output is a self-contained static site with no server-side runtime dependency
- `npm run docs:preview` serves the built output correctly

---

## FR-2 — Content Sections

The site **must** organize content into three primary sections reflected in the top navigation bar:

| Section | Path | Description |
|---|---|---|
| Guides | `/guides/` | Getting-started walkthroughs, tutorials, and how-to content |
| Reference | `/reference/` | Component documentation (SSO, ingress, monitoring, templates, etc.) |
| Applications | `/applications/` | Per-application pages for the 475+ supported lab applications |

**Acceptance criteria:**

- Each section has a landing `index.md`
- Navigation bar links resolve to the correct section
- Sidebar auto-generates from file structure via `vitepress-sidebar`

---

## FR-3 — Sidebar Auto-Generation

The sidebar navigation **must** be auto-generated using `vitepress-sidebar` (≥ 1.27.1) for each of the three content sections.

**Acceptance criteria:**

- Sidebar titles derive from file headings or frontmatter (`useTitleFromFileHeading`, `useTitleFromFrontmatter`)
- Folder titles derive from their `index.md` (`useFolderTitleFromIndexFile`)
- Underscores in filenames convert to spaces
- Sort order respects frontmatter `order` field (`sortMenusByFrontmatterOrder`)

---

## FR-4 — Mermaid Diagram Support

The site **must** render Mermaid diagrams embedded in fenced code blocks using `vitepress-plugin-mermaid` (≥ 2.0.17).

**Acceptance criteria:**

- Fenced `mermaid` code blocks render as SVG diagrams in the browser
- Diagrams are readable on both desktop and mobile viewports

---

## FR-5 — Search

The site **must** provide full-text local search across all content using VitePress built-in local search.

**Acceptance criteria:**

- Search is accessible from any page
- Results include page titles and relevant content excerpts
- Search indexes all Markdown content at build time

---

## FR-6 — Homepage Feature Showcase

The homepage (`index.md`) **must** present the core platform features using VitePress home layout with hero section and feature cards.

**Acceptance criteria:**

- Hero section displays logo, tagline, and primary call-to-action buttons (Get Started, Pitch Deck, Learn More)
- Feature cards link to corresponding reference documentation
- Feature icons load correctly (SVG/PNG from `/images/apps/`)

---

## FR-7 — Edit Links

Every content page **must** display an "Edit this page on GitHub" link pointing to the correct file in the repository.

**Acceptance criteria:**

- Edit link pattern: `https://github.com/newpush-labs/newpush-labs-homepage/edit/main/:path`
- Link resolves to the correct Markdown source file

---

## FR-8 — SEO and Metadata

The site **must** include basic SEO metadata.

**Acceptance criteria:**

- Favicons configured for multiple sizes (16×16, 32×32, webmanifest)
- Theme colour meta tag set
- Content pages include `title` and `description` in frontmatter where applicable

---

## NFR-1 — Performance

**Acceptance criteria:**

- Static build completes in under 120 seconds on CI
- Page load time under 3 seconds on standard broadband (first meaningful paint)
- Images should be compressed; no single image exceeds 1 MB

---

## NFR-2 — Accessibility

**Acceptance criteria:**

- Site is navigable via keyboard
- Heading hierarchy is correct (no skipped levels)
- Images include alt text where meaningful

---

## NFR-3 — Maintainability

**Acceptance criteria:**

- All VitePress, Mermaid, and sidebar plugin versions are pinned in `package.json`
- No hardcoded navigation — sidebar is auto-generated from file structure
- Content uses standard Markdown with VitePress-compatible extensions only
- No custom Vue components unless strictly necessary

---

## NFR-4 — Portability

**Acceptance criteria:**

- The site builds and serves on any system with Node.js (LTS) and npm
- No platform-specific dependencies
- CI/CD pipeline defined via GitHub Actions (`deploy.yml`)

---

## NFR-5 — Branch Workflow and CI

**Acceptance criteria:**

- PRs to `main` must originate from `develop` (enforced by `require-develop-source.yml`)
- Feature branches follow the naming convention: `docs/topic-description` or `fix/description`
- Deploy workflow triggers on push to `main`

---

## Integration Requirements

### IR-1 — GitHub Pages / Static Hosting

The built site is deployed as a static site. Deployment configuration is managed via GitHub Actions.

### IR-2 — NewPush Labs Ecosystem

The documentation site references and links to the following ecosystem projects:

- [newpush-labs](https://github.com/newpush-labs/newpush-labs) — core platform
- [newpush-labs-pitchdeck](https://github.com/newpush-labs/newpush-labs-pitchdeck) — investor/partner slide deck
- Component-specific repos for SSO (Casdoor), ingress (Traefik), monitoring (Grafana/Loki), etc.

---

## Implementation Gaps

| ID | Gap | Priority | Notes |
|---|---|---|---|
| GAP-1 | No automated link-checking | High | Recommend `markdown-link-check` or similar in CI |
| GAP-2 | No automated tests | High | At minimum, verify `docs:build` succeeds in CI |
| GAP-3 | Missing frontmatter on many pages | Medium | `title` and `description` fields needed for SEO |
| GAP-4 | No image compression pipeline | Medium | Some images may exceed 1 MB |
| GAP-5 | VitePress example pages still present | Low | `api-examples.md` and `markdown-examples.md` are VitePress scaffolding, not project content |
| GAP-6 | Copyright year hardcoded to 2024 | Low | Footer copyright should be dynamic or updated annually |

---

## Acceptance Criteria — Contributions

All contributions **must**:

1. Pass `npm run docs:build` without errors or warnings
2. Follow existing Markdown formatting conventions
3. Include images in the appropriate subdirectory with descriptive filenames
4. Not introduce unpinned dependencies
5. Target `develop` branch (not `main` directly)

## Acceptance Criteria — Releases

A release to `main` **must**:

1. Pass all CI checks
2. Originate from the `develop` branch
3. Not break any existing internal links
4. Render correctly in `npm run docs:preview`
