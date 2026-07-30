# Creative Lab Notebook — Website Ideation

## Date: 2026-07-30
## Rounds: 5 (Diverge → Collide → Paradigm-Shift → Ground → Stress-Test)
## Panel: GPT-5.5 (×2), Gemini 3.1 Pro, Claude Fable 5, Nemotron Ultra 550B

---

## Round 1: Divergence — "What should a self-adversarial researcher portfolio BE?"

### Hypotheses Generated

1. **Liability Ledger** — Foreground failed predictions, retracted beliefs, negative results. Hiring signal = calibrated epistemic depreciation, not polish.

2. **Contested Dossier** — Ingest external critiques, rejected papers, reviewer comments, collaborator annotations as first-class content. The portfolio becomes a contested document you don't fully control.

3. **Live Evaluation Environment** — Claims expire unless revalidated. Old beliefs decay. Identity is a continuously tested model, not a static resume.

4. **Adversarial Hiring Simulator** — Visitors choose roles (PI, red-teamer, policy lead, skeptic) and the site changes what it reveals and challenges.

5. **Immune System** — Criticisms become antibodies stored in memory. Repeated attacks strengthen or kill claims. Novel attacks trigger visible adaptation.

6. **Stress-Strain Diagram of Thought** — Not "what I believe" but where each belief bends, fractures, or remains elastic under pressure.

7. **Active Adversary Audience** — Readers place confidence bets, submit counterexamples, earn reputation for breaking claims, unlock content by finding contradictions.

8. **Inhabitable Adversary** — A fine-tuned model of the researcher that visitors interrogate. Hiring signal = gap between claims and what the model concedes.

9. **Decaying Artifact** — Claims have half-lives. Unverified claims visibly rot. The site degrades daily without epistemic maintenance.

10. **Forecast Contract** — Every belief becomes a dated prediction with confidence, resolution criteria, and public scoring.

### Missing Premise (Round 1)
The portfolio optimizes for *what*? Hiring, trust, collaboration, intellectual legacy, community epistemics? The biggest shift: is the site meant to *persuade* evaluators or *evaluate them back*?

---

## Round 2: Collision — Combining and Inverting Seeds

### Second-Order Mutations

1. **The Litigation Portfolio** (Co-authorship × Bounty) — Every claim has rival counsel and a bounty court. Visitors enter trials. Surviving claims gain "case law." Hiring = inspecting adversarial jurisprudence.

2. **The Rotting Doppelganger** (Adversary × Decay × Theater) — A decaying third-party model of you, trained on public attacks. You cannot update it directly; you can only publish work that changes its predictions. Reputation as externally maintained wound.

3. **The Decaying Adversary** (Adversary × Decay) — Freeze your adversary model, then keep publishing. The frozen adversary ages; the diff between versions IS the portfolio. Growth = measured adversarial obsolescence.

4. **The Bounty Marriage** (Co-authorship × Bounty) — Anyone who breaks a claim earns permanent column-inches. Your named rival = whoever holds the most inches. A leaderboard of people who beat you.

5. **Epistemic Short-Selling** (Bounty × Theater) — Outsiders profit by exposing overvalued claims; the author is forbidden from marking their own assets.

6. **Cross-Examination Records Only** (Theater inversion) — No testimony, only hostile depositions, failed objections, and admissible surviving claims.

### Key Failure Modes Identified

- **Goodhart's Law**: Any self-adversarial signal becomes performative once it's a hiring metric. Researchers tune adversaries to "lose convincingly."
- **Blind-Spot Inheritance**: Your own adversary inherits your blind spots — it cannot attack what you cannot imagine. Mirror, not critic.
- **Prestige Cartels**: Requiring elite enemies for credibility excludes newcomers.
- **Troll DoS**: Bounty systems attract cheap refutations that farm access.
- **Platform Dependency**: Distributed portfolio dies when APIs change.

### Resolution Candidate
Third-party choreography — pre-committed rules (hash-published, pre-registered), author cannot intervene. Like clinical trial preregistration. Commitment device converts performance into evidence.

---

## Round 3: Paradigm Shift — Inverting Hidden Premises

### Premise 1 Inverted: "Portfolio is NOT about the researcher"

- **Epistemic Weather Report**: "Questions that became more/less tractable because I passed through them." Unit = field-state delta, not personal narrative.
- **Problem Dossier**: Living map of unsolved questions with all failed approaches. Researcher visible only through curation quality.
- **Situated Output Dossier**: What changes when this person enters the system — collaborations formed, questions killed, dependencies exposed.

### Premise 3 Inverted: "Researcher evaluates the AUDIENCE"

- **Reverse Hiring Dossier**: Committees receive staged ambiguities and traps. Their responses reveal whether they reward rigor, conformity, or speed.
- **Committee Due-Diligence Packet**: Questions the institution must answer before earning the right to judge — replication norms, authorship ethics, treatment of dissenters.

### Premise 5 Inverted: "Portfolio is NOT for consumption"

- **Non-Readable Research Organism**: Mutates only when experiments fail or predictions expire. Growth tool for the researcher, not spectators.
- **Research Haunting**: Preserves what the researcher *cannot yet explain*. Committees meet unresolved problems before meeting the candidate.
- **Epistemic Escrow**: Cryptographically timestamped predictions committed privately. Opened at chosen intervals. Calibration becomes private discipline immune to Goodhart.

### Key Insight
The biggest shift: whether the site's primary audience is *hiring committees* or *the researcher's own future self*. The latter dissolves all theater concerns.

---

## Round 4: Grounding — Implementable Essence (Static HTML constraints)

### Unified Design Principle (Panel Consensus)
**Every statement on the site is a first-class, dated, statused claim object.** Four attributes: status (alive/dead/haunting/probe), verified-date, confidence, owner (field vs. me). One schema, four mechanisms as views.

### Mechanism MVPs

**Field Wound Map**: Homepage = annotated graveyard. "The 9 ways [problem] has been attacked, and why each died." CV = one modest line at bottom.

**Epistemic Decay**: `data-verified="2024-11-03"` on each claim. JS computes age → applies CSS (crisp → desaturated → struck-through past half-life). Git commit dates = honest clock. Cost: ~40 lines of JS.

**Research Ghosts**: Section "Things I cannot explain" with 3 items, each with attempt logs: "tried X (2024-11), failed because Y." Restraint IS the mechanism.

**Reverse Evaluation**: One footnote: "this claim is subtly wrong — email me why." No tracking needed; the email itself is the probe result.

**Progressive Disclosure**: 30-sec scan = status badges, dates, one-line epitaphs. 5-min = expandable evidence, annotations, ghosts.

### Proposed Interaction Models

1. **Confidence/Doubt Slider** (Gemini): Global slider from 100% confidence → 100% doubt progressively reveals deeper layers (probes → wound map → decay → ghosts).

2. **Evidence Card System** (GPT consensus): Every item = same component with different states. Claims, wounds, ghosts, probes share one card format.

3. **Forensic Wall / Triage Board** (Theater): Muted background, sharp status tags, evidence threads, red "needs inspection" stamps, expandable drawers.

4. **Scrim Technique** (Claude): Field is downstage, brightly lit; researcher is silhouette behind gauze, visible only in marginalia glimpses.

---

## Round 5: Stress Test — Where It Fails

### Critical Failures

1. **10-Second Bounce**: If credentials (3 preprints, CSA 4yr, deployed systems) are buried behind conceptual framing, hiring managers close the tab.
2. **Epistemic Theater**: Badges, decay, ghosts may read as clever UX rather than research substance. "Confidence: 0.71" = gimmick.
3. **Reverse Eval Trap**: Planted flaws are dangerous. 90% of spotters think "error" not "clever test." Reads as smug.
4. **Decay Punishes During Job Search**: Month 3 of searching, site looks rotten. Metaphor works against user at worst moment.
5. **Pretension Risk**: MS + 4yr + preprints framing entire field as "wound map" with self as lone annotator = arrogant.
6. **Ghosts Ending Mid-Sentence**: Reads as "didn't finish things" to skimmers. Need attempt logs, not poetry.

### What Makes It Land

- Dated self-refutations (claims that DIED with documented cause of death)
- Epistemic changelog showing recent status flips (alive→dead = money shot)
- Claims mapped to buyer pain points (robustness eval, red-team, deployment safety)
- Maintenance discipline visible through real timestamps
- Marginalia voice that sounds like "Confidence 0.6: bound assumes i.i.d. — violated in production" not "I think..." or "Interesting!"

### Structural Fix (Panel Consensus)

1. **Header**: Name, one-line thesis, 3 status-badged proof objects (preprints/systems) — the 30-second read
2. **Body**: Wound map / claim registry as main content, researcher visible through annotations
3. **Sidebar**: Existing probe-depth gauge; claim objects open in-place
4. **Ghosts**: Own route or section, each with attempt log (not mystery)
5. **Toggle**: Merge existing CLAIMS/RED-TEAM into the claim object itself (each card flips steelman/break)

### Collapse Elements (what's load-bearing)

- **Remove dated/statused claim registry** → collapses to aesthetic packaging
- **Remove field wound map** → collapses to fancy CV
- **Remove marginalia voice** → collapses to blog comments
- All three needed; but dated status lifecycle is THE substrate

### The Moat

"Every other researcher portfolio performs *competence*. This performs *epistemic hygiene*." Hygiene = "I know how well I know X, when I last checked, and where the edges fray." Costly signaling: you can't fake a retraction history you don't have.

---

## Idea Clusters (unranked, preserved)

### Cluster A: Temporal Epistemics
- Decaying claims, half-lives, inspection dates, verified-date metadata, epistemic changelog, claim CI pipeline

### Cluster B: Field Cartography
- Wound map, problem dossier, dead-end taxonomy, researcher-as-annotator, situated output dossier

### Cluster C: Audience Inversion
- Reverse evaluation, committee due-diligence, institutional auditing, embedded probes, staged ambiguity

### Cluster D: Externalized Adversary
- Inhabitable model, frozen adversary, bounty marriage, adversarial co-authorship, contested dossier

### Cluster E: Private Growth Tools
- Epistemic escrow, non-readable organism, research haunting, compost layer, anti-portfolio engine

### Cluster F: Living Infrastructure
- Claim registry, evidence cards, status lifecycle, one-schema-many-views, claim CI pipeline, CRDT epistemic log

---

---

## Round 6: Interaction Paradigms — "What mechanisms exist beyond binary toggle?"

### Hypotheses Generated (10 interaction models)

1. **The Ratchet** — Once you enter red-team mode, you can't go back this session. Choosing to see criticism is permanent, like reading a retraction.

2. **Inverted Default** — Site loads in red-team mode. Visitors must click "show me the polished version." A visible counter shows how many chose flattery.

3. **Scroll Degradation** — No toggle. Claims start polished; caveats physically surface as you scroll deeper. Time/attention = depth. Skimmers see marketing; careful readers see truth.

4. **Scrutiny as Currency** — Refutations unlock by engagement (dwell time, hovering citations, scrolling to methodology). Site rewards the epistemic behavior the researcher values.

5. **Interwoven Text** — No separate modes. Polished claim and critique coexist in same prose (serif for claims, monospace for caveats). Critique density increases down-page.

6. **Confession Receipt** — After browsing, site summarizes what visitor chose to ignore/expand/challenge. "Would you hire me based on the version you chose?"

7. **Per-Visit Randomization** — Hash assigns CLAIMS or RED-TEAM with no switch. "Other visitors see the other version. Compare notes."

8. **Difficulty Modes** — Not claims/red-team but "Recruiter," "Collaborator," "Adversary," "Future Me." Visitor chooses role, not UI state.

9. **Corrections Column** — No toggle. Each claim has a visible "since publication" ticker. Clicking opens editorial correction trail.

10. **Peer Review Overlay** — Cards carry reviewer badges (R1: major revisions). Clicking reveals signed critiques mimicking eLife/OpenReview norms.

### Panel Kills (what fails)

- **Confession Receipt**: Passive-aggressive guilt-tripping. Portfolio is an audition, not an ethics exam.
- **Fake counter ("73%...")**: No backend = fabricated number. Lying on an epistemic honesty site.
- **Per-visit randomization**: Breaks shareability. Recruiters get one visit, never "compare notes."
- **Scrutiny as currency gamification**: Goodhart's law again. Visitors hover to unlock, not to read.

---

## Round 7: Collision — Interaction Mutations

### Strongest Combinations

1. **C + D (Scrutiny-Gated Stratigraphy)** — Scroll depth reveals caveats; dwelling excavates full refutations. Attention → truth as mechanic.

2. **A + E (Irreversible Interwoven)** — Click any monospace critique, all critiques permanently expand session-wide. Pandora's box as typography.

3. **C + F (Diagnostic Scroll)** — Caveats surface with depth; end mirrors back the epistemic version of you. Professional and unsettling.

### Panel Consensus on Failures

- **B + F** = moral theater. Shaming visitors is pretentious.
- **E alone** = "critical-design portfolio cosplay" if overdone. Ransom-note risk.
- **D alone** = gamifies truth. IntersectionObserver dwell-time is trivially spoofed.
- **Any combo that judges visitor behavior** → pretension. Drop it.

### Surviving Candidates (3 models carried forward)

- **Model X: Scroll Degradation** — Clean top, strata emerge with depth. No toggle. Time = truth.
- **Model Y: Interwoven Text** — Critique is structural, in the prose. No interaction needed.
- **Model Z: Evolved Toggle** — Keep existing toggle + per-card ratchets + verified dates + changelog.

---

## Round 8: Final Comparison (all 8 models responded)

### Model Y Wins (6/8 models)

**Why:** Caveats travel with any screenshot/share (ungameable). Feels researcher-made, not designer-made. Signals red-team thinking structurally. "The medium enforces the message."

**30-second experience:** Clean serif headline, sparse monospace caveats read as footnotes. Thesis + credentials legible.

**5-minute experience:** Critique density ramps up. By the end, it's raw lab notes. Typography IS the toggle.

**Key quotes:**
- "Model Y is constitutional AI incarnate" (Anthropic strategist)
- "The only model where the medium enforces the message" (DeepMind strategist)
- "No cheat code — caveats are in the text you screenshot" (METR strategist)
- "It feels like it was compiled from LaTeX" (DeepMind)

### Critical Grafts (unanimous)

1. **Z's epistemic changelog** — Dated revisions: "2024-03: revised after METR replication failure"
2. **Z's verified-dates** — Per-claim timestamps making inline honesty auditable
3. **X's depth gradient** — Critique density LOW at top, HIGH at bottom (mimics paper structure: abstract → limitations)

### Dissent (Nemotron/METR strategist)

**Z actually wins** if you graft Y's inline caveats into it. Reasoning: hiring managers cmd+F for keywords, read non-linearly, want the changelog as primary signal. The toggle is a commitment device, not a gimmick.

### Accessibility Concerns Raised

- Y's monospace at 0.85em needs `color: #595959` minimum for WCAG AA
- X's IntersectionObserver fails if JS disabled (serves only polished claims)
- Z's `<details>`/`<summary>` is the most robust pattern for assistive tech
- Deep-linking: all models need URL-encoded state for team sharing

---

## CONVERGENCE: Final Recommendation

### Keep the toggle. Evolve it.

Model Y is intellectually pure but requires a full rewrite of voice and structure. The current site already solves the 30-second scan, has a memorable signature interaction (the toggle), and a working fracture table. The strongest move is incremental evolution, not a rebuild.

### Ship These (afternoon of work)

1. **Add `data-verified` dates** to each claim in the fracture table. ~40 lines of JS computes staleness, applies CSS badges (FRESH / STALE / OVERDUE). Git commit = honest clock.

2. **Add an epistemic changelog** — small section showing 2-3 dated belief changes. "Claim X: ALIVE → WEAKENED (2026-03, after [paper])." This is the moat. You can't fake a retraction history.

3. **Per-card ratchets** — once you open a card's refutation, it stays open (sessionStorage). Knowledge can't be unread. Existing toggle remains as the global "reveal all" shortcut.

4. **Sprinkle Y's inline voice** — 2-3 struck-through adjectives or inline monospace caveats in claims-mode text. Just enough to signal mid-sentence self-correction without rebuilding everything.

5. **Add 2 research ghosts** with attempt logs at bottom. Not poetry: "Tried X (2024-11), failed because Y. Next: Z." Signals tolerance for ambiguity + research taste.

### The Moat (why this works)

- Dated self-refutations are costly signaling you can't fake
- The toggle remains memorable and distinctive
- Temporal metadata turns the site from brochure into audit trail
- Per-card ratchets make the toggle feel consequential, not theatrical
- Inline caveats prove the red-team mindset lives in the prose, not just the UI

### Future Exploration (if the site grows)

- Model Y as a full rewrite if you accumulate 5+ papers and want to rebuild from scratch
- Epistemic changelog as its own route (`/changelog`) once you have 10+ status changes
- Research ghosts as a living section that grows with each failed experiment
- Claim CI pipeline: GitHub Action that opens issues when `data-verified` > 90 days stale

---

## Round 9: Personality — "What EMOTIONAL WORLD should this site inhabit?"

### Worlds Generated (10 aesthetic universes)

| # | World | Temp | Metaphor | Smell |
|---|-------|------|----------|-------|
| 1 | The Failure Oracle | Cold | Machine that predicts where systems die | Ozone, freezer air |
| 2 | The Glitch Monastery | Warm | Obsessive solitary practice in sacred debugging chamber | Hot dust, coffee, old electronics |
| 3 | The Containment Breach | Uncomfortable | Millisecond a system realizes it's compromised | Burnt plastic, adrenaline |
| 4 | The Crash Test Lab | Neutral | Models slammed into walls on purpose, with instrumentation | Ozone, burnt rubber |
| 5 | The Radiology Reading Room | Clinical | Diagnosing pathologies in models. "The scan shows a mass." | Antiseptic, chilled air |
| 6 | The Beautiful Breach | Warm | Danger made seductive. Velvet security alarm | Warm dust, solder, old leather |
| 7 | The Redacted Dossier | Cold | Classified after-action report of catastrophic failure | Dry toner, filing cabinets |
| 8 | The Luminol Grid | Uncomfortable | Revealing invisible bloodstain on a clean floor. UV flashlight cursor | Bleach, latex, copper |
| 9 | The Overdriven Signal | Warm | Modular synth pushed until signal clips. Exploits as patches | Warm cables, club fog |
| 10 | The Diagnostic Slice | Cold | MRI scan of a black-box neural network. Scrolling = Z-axis depth | Liquid helium, antiseptic |

### Panel Consensus (shared traits)

- Lone, obsessive expert who destroys with documented precision
- Violence/danger paired with clinical precision
- Dark palettes, monospaced/annotated typography
- Immersive "live" spaces — visitor walks in mid-experiment
- Fatalistic, calm-yet-serious tone

---

## Round 10: Authenticity Filter — "Cosplay vs. Real"

### Killed (costume, not identity)

- **Glitch Monastery** — Romanticizes what is actually just discipline. Candles are a lie; it's fluorescent light.
- **Containment Breach** — Hacker-drama LARP. This person writes pre-registrations; they've never panicked at a keyboard.
- **Crash Test Lab** — Playful-adjacent. Hiring manager smells "personal brand exercise."
- **Beautiful Breach** — "Danger made seductive" is who they wish they were, not who they are.

### Survived (stripped of melodrama)

- **Radiology/Diagnostic** — Closest to the actual workflow: scan, flag, document, report. But medical metaphor is borrowed authority.
- **Failure Oracle** (partially) — Probabilistic coldness is real. "Oracle" is cosplay language.

### The Unnamed Surviving World

**THE INSTRUMENTED NULL / THE PRE-REGISTERED AUTOPSY BENCH**

A 3am research environment where most experiments fail, but every failure is timestamped, pre-registered, logged, and made useful. Not cyberpunk, not lab cosplay. A dark, precise interface where models are treated like specimens, failures like evidence, and every claim has a run ID.

- Palette: charcoal terminal, DICOM gray, dull lab yellow for warnings only, surgical cyan for "finding"
- No flames, no corrupted text, no fake danger
- Smell: cold coffee, warm laptop metal, spreadsheet open for six hours
- The restraint IS the credential

**First 3 seconds:** Near-black (#0a0e12). One line of monospace: `n=28,412 experiments. 3 mattered. Here's why.`

---

## Round 11: Brand Commitment — "The HOT NOW Sign for Epistemic Rigor"

### The Problem Solved

"Quiet restrained dark portfolio" is dangerously generic. Every tasteful dev portfolio looks like this. The question: how do you make restraint into BRAND COMMITMENT as unmistakable as Krispy Kreme's glazed maximalism?

### The HOT NOW Sign (Panel Consensus)

**A live falsification counter / kill ledger.** Not "latest posts." A persistent status element:

```
CLAIMS HELD: 3 | CLAIMS KILLED: 5 | UNDER ATTACK: 1
```

The sign works because:
- It signals *state*, not statement (changes over time, so you check it)
- It only lights when certainty is *damaged* — the brand is alive when claims break
- Nobody else timestamps their own attempts to destroy their work
- The homepage defaults to the failure queue, not the trophy room

### Brand-Level Visual Commitments

1. **Cyan is sacred.** Reserved ONLY for findings/anomalies. Never decoration. One accent color = one meaning.
2. **Falsified claims are struck through but NEVER deleted.** The graveyard is visible, scrollable, dated.
3. **Per-claim survival badges:** `SURVIVED 14 ATTACKS · LAST ATTEMPTED 2026-06-19`
4. **Zero rounded corners. Zero shadows. Zero transitions.** But selection highlight = surgical cyan, character-by-character.
5. **Font weight tied to epistemic confidence** (if using variable font): thin=unproven, bold=survived-adversarial-load.

### Brand Voice (the actual sentences)

**Rules:**
- No hedging. No "suggests," "indicates," "may." Only "I predicted X. I found Y. The difference is Z."
- Never adjectives, always counts. Not "rigorous" — "n=28,412. 3 mattered."
- Autopsy-report deadpan. "Claim 4 died on a Tuesday. Cause: confound in the eval harness."
- Past-tense accountability on all microcopy. Not "View Data" — "Data examined 2024-10-12."

**Signature lines:**
- "n=28,412 experiments. 3 mattered. Here's why."
- "Do not trust the conclusion. Trust the damage it survived."
- "Most runs were noise. I'm showing you the three that bled."
- "This claim has not been proven. It has merely failed to die cleanly."
- "I found the crack before it became someone else's replication failure."
- "I have 47 live hypotheses. 31 are already wrong. I update this page when the count changes."

### The Graveyard as Hero

The homepage enters through the autopsy bay, not the trophy room. Visitors see:
- How many claims currently survive
- How many have been killed (and by what)
- Which ones are under active attack

The nav includes a first-class "Graveyard" link. Each dead claim: cause of death, date, one-sentence lesson. You curate the deaths. The wins are secondary.

### What Makes It Screenshottable

- The kill ledger in the header (no one else has this)
- A wall of struck-through dead claims with dates (viscerally honest)
- The line: `n=28,412 experiments. 3 mattered.`
- Survival badges on living claims (attack count + last-tested date)

---

## Round 12: Voice & Microcopy — "The humor and warmth inside clinical precision"

### Anti-Performance Rules (what keeps it honest)

- Include boring, embarrassing, low-status failures alongside elegant ones
- Ban martyr verbs: "brutal," "ruthless," "destroyed." Use lab verbs: failed, held, narrowed, repeated, withdrawn
- Pair every big number with a constraint (compute budget, false starts, wasted weeks)
- Never adjectives about self, only counts and dates
- Warmth = admitting cost, not adding softness
- One human aside per page, max. Rationing IS the joke
- "We do not publish failures that did not teach us anything. That would be content."

### The Comedic Engine

The joke is not "AI is scary." The joke is "someone built a spreadsheet for the funeral." Humor emerges from: exhaustion, procedural understatement, the bookkeeping tone applied to self-inflicted damage. Never wink. State the absurd number, then move on like it's a Tuesday.

### Winning Microcopy (best from 5 models)

| Moment | Copy | Effect |
|--------|------|--------|
| **Hero** | "I killed 14 of my own ideas so far. The survivors are below." | Trust |
| **About** | "I run experiments on my own claims until they break or don't. 28,000 runs, one person, 0 execution errors — a number I'm proud of in a way that probably warrants discussion. Everything dead stays visible. This is either rigor or a coping mechanism. The data doesn't distinguish." | Uncomfortable |
| **404** | "This page failed replication." | Smile |
| **Footer** | "No claims above this line survived by accident." | Trust |
| **Tab title** | `Kill Ledger — 3 alive / 5 dead` | Brand |
| **og:image** | "28,000 experiments. 14 dead ideas. Full autopsy inside." | Screenshot |
| **Dead claim hover** | "Deceased 2024-03-11. Cause: contradicting data, n=412. I liked this one." | Warmth |
| **Email CTA** | "I respond faster to bug reports than compliments." | Smile |
| **Last updated** | "Last audited: [date]. If that's stale, treat everything here as a hypothesis." | Trust |
| **console.log** | "You checked the console. Correct instinct. The methodology holds up here too." | Smile |

### Runner-Up Lines Worth Keeping

- "Claims enter alive. Most do not leave that way."
- "Send the objection I should have tested already."
- "No newsletter funnel. No thought leadership. Last claim killed: 11 days ago."
- "Built by one person, many failed hypotheses, and a quiet suspicion of clean narratives."
- "Yes, 28,000 experiments is a lot. No, that was not the original plan."
- Hover on dead claim: "Killed by batch-order control." / "I spent three weeks on this and it was a typo."

### Tone Target

"A coroner who genuinely liked the deceased." Precision is default; warmth leaks through in small procedural cracks. The humor is structural — not punchlines, but the *exhaustion of the scientific method* applied to yourself.

---

## Round 13: Visual Identity System — "The page as object"

### Core Visual System (Panel Consensus)

**Background:** #080B0F to #0B0F14 range (near-black, not pure). Flat or with barely-perceptible 1px ruling grid every 24px in #111820. No gradients, no noise beyond optional film grain at 0.5%.

**Layout:** Kill the cards. Single continuous document. One column, hard-ruled sections. Sections divided by 1px rules in #1C2228–#26313A. Severe margins: 88–96px desktop, 24px mobile. No cards, no containers, no shadows. Content sits on a hard left datum.

**Type Scale (compressed):**
- 13px body / 20px leading (Inter Variable or keep Inter 400)
- 16px section subheads
- 20px section titles (JetBrains Mono, uppercase, letterspaced)
- 28px page title
- 40–64px only for kill-count/state numbers
- Strict 4–8px baseline grid

**Type Weight = Epistemic Confidence:**
- 300 = hypothesis/deprecated/struck
- 420 = observation/provisional
- 550–650 = finding/confirmed
- 700+ = survived adversarial replication

**Color (exact hex):**
- Text: #D7DEE5 (primary) / #7E8A95 (muted) / #3A4149 (dim/gutter)
- Rules: #1C2228 to #26313A
- Sacred cyan: #00D9FF or #00E5FF — ONLY for findings, verified data, kill-ledger state
- Dead/struck: #566068 text, 1px line-through in #8B3A3A (dried-blood red, not alert)
- Amber: #B88A2A or #C28A2E (under investigation only)
- Green: #5D8F72 or #6EA56F (verified/operational only, never decoration)

**The Sacred Cyan Rule:** Appears at ~2% of page area. Squint test: near-black field with 3–4 cyan slivers, like instrument readouts in a dark cockpit. Never borders, never backgrounds, never UI chrome.

### Spatial Feel & Negative Space

- Negative space = withheld evidence, not luxury. Emptiness means "we lack the data to fill this void"
- Section breaks: 64px above, 24px below (asymmetric, like a form)
- Information density: 2× current. Tables replace cards. Visible gridlines at #1A1F2A, 0.5px
- Content max-width: 65ch for prose (research paper measure)
- Left gutter (88px): line numbers, section IDs, timestamps, revision counts in 10px mono #3A4149

### Micro-Interactions (procedural, not decorative)

- **Zero easing, zero fades.** State changes snap in 80ms linear or 0ms (instant frame swap)
- **Hover:** reveals timestamps, confidence intervals, "last contradicted by..." notes. Appears instantly.
- **Click:** expands evidence row inline like terminal log being unsealed. Content slams down without transition.
- **Kill ledger:** persistent strip (24px tall, fixed footer or sidebar). Ticks. Never animates. Never celebrates.
- **Selection highlight:** cyan-on-black inverted. The act of reading closely IS the decoration.
- **Focus states:** 1px solid #00E5FF outline, square, no offset.

### Cross-Domain Imports

**Scientific paper:** Numbered findings, footnote gutters, figure captions ("Fig. 3 —"), abstract-style summary box, 65ch measure, reference density.

**Aviation black-box:** UTC timestamps on every section. Status glyphs: ● live, ◐ under revision, ✕ struck. Dense telemetry bands. Persistent header: `[BUILD: a1f3e9] [UPTIME: 347d] [STATUS: NOMINAL]`.

**Archival photography:** Registration crop marks at four corners. Monochrome imagery with metadata printed on image edge (hash, date). 1px white keylines on images. Print stylesheet IS primary design.

### The Thumbnail Test (recognizable from a screenshot)

From 10 feet away: a dark rectangle with a hard left spine, dense text, cyan incident marks (2% of area), and visible struck-through lines mid-page. A thin bright-cyan band at the bottom (kill ledger). No other site shows its own dead claims. That's the fingerprint.

---

## Open Questions (not yet resolved)

1. How much "field wound map" can you credibly curate with 4yr experience + MS?
2. Should decay be visual (degrading typography) or metadata-only (badges/timestamps)?
3. Is the existing red-team toggle worth keeping as separate interaction, or should it merge into per-claim flips?
4. What's the right ratio of "about the field" vs "about me" for the 30-second scan?
5. Can the fracture table (current site's signature visual) survive as the "epistemic changelog" in the new model?
6. Does "research haunting" work if you only have 3 preprints worth of territory?
7. **NEW:** Should the next version rebuild around the "kill ledger as hero" concept, or layer it onto the current toggle-based architecture?
8. **NEW:** How do you make the graveyard feel like confidence rather than self-deprecation? (Brand strategist answer: the damage report IS the credential. You don't apologize; you document.)
9. **NEW:** Is the thermal-drift line (1px hue shift over 24h tied to local time) worth implementing as the site's one ambient detail?
10. **NEW:** Inter Variable vs. serif (Newsreader) for body prose? Panel split — Inter is safe, serif says "paper not portfolio."
11. **NEW:** Kill ledger placement: fixed footer strip vs. left/right rail vs. persistent header?
12. **NEW:** Should the page literally have line numbers in the left gutter (lab notebook) or is that too much?
