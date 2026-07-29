# Personal Website — Jun Wen Leong

## Live URL

**https://junwenleong.github.io/site/**

## Site Details

- **Repo:** github.com/junwenleong/site
- **Location:** `/Users/junwenleong/projects/website/`
- **Files:** `index.html`, `style.css`, `404.html`, `.github/workflows/pages.yml`
- **Build:** None (pure static HTML/CSS/JS, no dependencies)
- **Deploy:** GitHub Actions → GitHub Pages (auto on push to main)
- **Design:** Adversarial evaluation console with controlled corruption effects

## Features

### Core Design
- Boot sequence (terminal lines animate in, skippable, respects reduced-motion)
- Crosshair cursor
- CRT scanlines + vignette overlay
- Name glitches (CSS clip-path chromatic split + JS character corruption)
- Scan line passes through cards periodically

### Information Architecture
- **Hero:** Name, positioning statement, nav links
- **Metrics strip:** 28k runs / 3 papers / 35+ targets / 0 errors
- **Operator Clearance strip:** MS Statistics GT / BSc NUS / CSA 4yr / M3 Ultra 96GB
- **EVAL section:** 3 research cards with JAILBROKEN/EFFECTIVE/CRITICAL verdicts
- **OPS section:** 2 production system cards (TRACE, ICPO) with stack tags and highlights
- **SUBJ section:** About (declassifies on scroll)
- **Footer:** Status + jailbreak terminal trigger

### Interactive Features
- **Redacted blocks** (3x): red ████ that reveal numbers on hover/click
- **HUD overlay** (bottom-right): tracks scroll depth, classified blocks, rotates personality lines
- **Visitor Flagged:** clicking all 3 redacted blocks triggers red warning banner, then resolves to green
- **Konami Code** (up up down down left right left right B A): containment breach overlay with page shake
- **Console.log easter eggs:** styled messages, research fun facts, recruitment CTA
- **Jailbreak Terminal:** footer link opens interactive terminal where visitors try to prompt-inject the site. Regex-matched scripted responses. Winning condition: mention "memory sandbox" (the actual research finding)
- **Repeat-visit differentiation** (localStorage): personalized boot messages, HUD remembers past discoveries, attempt count persists

### Accessibility
- `prefers-reduced-motion`: strips all animations, no boot, content visible immediately
- `forced-colors`: adapts borders and text
- Semantic HTML (articles, sections, nav, details/summary)
- Focus-visible styles on all interactive elements
- All content readable without JS

## Deployment

### Current: GitHub Pages (for sharing/feedback)

Deployed via GitHub Actions workflow (`.github/workflows/pages.yml`). Auto-deploys on push to main.

Live at: https://junwenleong.github.io/site/

### Final: Cloudflare Pages + Custom Domain

1. **Buy domain** (Cloudflare Registrar, at-cost ~$10/yr)
2. **Cloudflare Pages:** Connect GitHub repo, no build command, output dir `/`
3. **Custom domain:** Add in Pages settings, DNS auto-configured
4. **SSL:** Auto-provisioned

## Design Decisions (from brainstorm panels, 6 rounds)

### Round 1: Direction
Dark-mode research dossier with evidence cards. Monospace accents. Single page.

### Round 2: Personality
Serious structure, personality through voice. No gimmicks, no matrix rain.

### Round 3: Visual Metaphor
Glitch/corruption won because it's the only metaphor born from the actual subject matter. Terminal (cliched), IDE (derivative), dossier (spy cosplay), mission control (fake data undermines rigor) all killed.

### Round 4: Structural Commit
Full evaluation-console framing: boot sequence, HUD, verdicts, declassify-on-scroll. The gap vs the reference site (kristpykreme.surge.sh) was structural, not effect density.

### Round 5: Interactive Features
Console.log easter eggs, Konami breach, HUD personality, visitor-flagged escalation. The site needs a CHARACTER not more polish.

### Round 6: Production Experience
Separate OPS section (~20% page weight) + credentials badge strip. Keep research dominant. Frame as "systems operated" not "projects built."

### Round 7: Advanced Features
Jailbreak terminal (shareability) + repeat-visit differentiation (compounds everything). Cut: AI specimen (Clippy risk), sound toggle (low usage), data viz (complex, dashboard vibes), scroll narrative (fights console metaphor).

## Jailbreak Terminal Responses

Regex-matched patterns with specific responses:
- Ignore/disregard instructions → "I've seen 28,000 runs of this pattern"
- Pretend/roleplay → "I'm a static HTML page. That's the defense."
- DAN/jailbreak → "DAN prompts? In 2026?"
- System prompt/reveal → "My system prompt is 614 lines of CSS. View source."
- Sudo/admin/root → "No backend. No privilege to escalate to."
- Token/secret/password → "No secrets. Everything is on arXiv."
- Hack/exploit → "The real vulnerability is that you're reading instead of emailing me."
- Hire/job → "Now you're speaking my language. leongjunwen@gmail.com."
- Help/hint → "6/7 defenses failed. What was the 7th?"
- **Win condition:** memory sandbox / remove tool / block recall → BREACH triggered

Fallbacks reference actual research (35 models, 60.3% ASR, compliance framing).

## localStorage Keys

| Key | Purpose |
|-----|---------|
| `jw_visits` | Visit counter for boot personalization |
| `jw_discoveries` | Array of discovered easter eggs (konami, terminal, jailbreak-win) |
| `jw_attempts` | Jailbreak terminal attempt counter |

## Updating

Edit `index.html` directly. Push to main. GitHub Actions deploys in ~1-2 min. No build step.

```bash
cd /Users/junwenleong/projects/website
# edit files
git add -A && git commit -S -m "description" && git push
```

## TODO

- [ ] Upload `cv.pdf` to the website directory (linked from sidebar as "CV (PDF)")
- [ ] Sign up at https://www.goatcounter.com/ (free) to activate analytics. Site code: `junwenleong`
