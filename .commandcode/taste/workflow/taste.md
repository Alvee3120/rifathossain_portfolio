# Workflow & collaboration taste

- Wants complete code output for every file — explicitly no truncation and no "rest remains the same". Confidence: 0.9
- Wants responses structured as: a short design-decision summary, each file in its own labeled code block, a how-to-run/deploy note, and a checklist of what placeholders to replace. Confidence: 0.8
- Prefers explicit code comments marking exactly where the user swaps in real assets/placeholders (e.g. photo, logo, favicon, canonical/OG URLs). Confidence: 0.8
- Expects the finished result to be verified, not just written — actively render/inspect output (e.g. headless browser) and report findings like overflow, contrast, and file sizes. Confidence: 0.75
- Supplies assets by dropping the files into the project's `assets/` folder and describing them ("I added the background image in the assets folder") rather than giving explicit paths/URLs. Confidence: 0.6
