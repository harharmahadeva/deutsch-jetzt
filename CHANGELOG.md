# Changelog

## [1.7.0] - 2026-06-25
### Added
- **Week strip** — M D M D F S S day circles in the progress card
  - Today's day always highlighted: light blue fill + blue border ring, bold blue label
  - Study days (lessons passed) shown as filled blue circles with ✓
  - Non-study, non-today days shown in grey
  - `studyDates` array added to user progress — populated on every test pass
### Changed
- **Back buttons** — `exam-back-btn` (Sprechen, Fragewörter screens) now renders as a proper outlined button (border + padding) instead of plain text

## [1.6.0] - 2026-06-25
### Added
- **Tägliche Wörter** — standalone Daily Words practice module
  - Entry card on main screen ("🗣️ Tägliche Wörter — Arbeit · Krankenhaus · Bahnhof · Supermarkt · mehr")
  - 10 topic packs × 12 words each = 120 real-life German words
  - Topics: Arbeit, Krankenhaus, Bahnhof & Zug, Bus & Straßenbahn, Flughafen, Supermarkt, Behörde, Schule & Bildung, Einkaufszentrum, Wohnen
  - Word card pager: large gradient word, phonetic guide, English meaning, example sentence
  - 3 action buttons: 🔊 Hören (rate 0.85), 🐢 Langsam (rate 0.65), 🎤 Nachsprechen
  - Auto-play TTS on card load (400ms delay, de-DE)
  - Speech recognition scoring with German feedback (Ausgezeichnet / Fast richtig / Nochmal versuchen)
  - Completion screen with Wiederholen / Anderes Thema buttons
  - Full-screen overlay with back navigation; cancels TTS + mic on nav

## [1.5.0] - 2026-06-24
### Changed
- **Bilingual sentence scaffold** — word card example sentences now show an English translation line (🇬🇧) for Days 1–10 only; Day 11+ shows German sentence only
  - Applies to both vocab words and spaced-repetition review words
  - Example sentence rendered in italic accent color (💬) for visual clarity
  - Matches Android app v1.6.6 and Dutch PWA scaffolding logic

## [1.4.0] - 2026-06-24
### Added
- **Sprechen module** — Goethe A2 Sprechen practice in the Exam Prep tab
  - 16 tasks: 4 Video, 4 x 1 Foto, 4 x 2 Fotos, 4 x 3 Fotos — all with Berlin/German context
  - 60s timer per task (90s in full test mode), live speech recognition (de-DE)
  - Word-overlap scoring vs. example answer with visual progress bar
  - Practice mode (4 tasks, one per type) and Full Test mode (all 16)
- **Mini-quiz** — 3-question vocab quiz appears after completing each lesson day
  - Pick the German word for an English prompt; 4 multiple-choice options
  - Color-coded right/wrong feedback with 700ms delay before next question
  - Score summary with emoji + German messages
- **Reading cards** — German A2 reading comprehension for Days 15–25
  - Real-world texts: Anmeldung, Jobcenter, Krankenversicherung, Hausversammlung, Stellenangebot, BVG, Arzttermin, Bewerbung, Konto, VHS, Mülltrennung
  - Multiple-choice question per card; leads into mini-quiz on completion
- **Fragewörter-Guide** — Question word reference card in Exam Prep tab
  - 14 German question words (Was, Wo, Wann, Wer, Warum, Welche, Wie viel, Wie, Darf, Muss, Kann, Ist, Sind, Hat) with English and exam example
- **Exam relevance tag** — Goethe A2 module label (Wortschatz / Grammatik / Lesen etc.) shown on lesson intro page
- **DAY_MODULE_MAP** — maps all 60 days to Goethe A2 exam modules
- **Day 60 completion banner** — replaces lesson with a congratulations card + link to Exam Prep when all 60 days are done
### Changed
- Lesson final page "Done!" button now triggers mini-quiz/reading card flow instead of being disabled
- `shuffleArray()` utility function added (required by mini-quiz)
- CSS: added `.exam-section-hdr`, `.exam-section-title`, `.exam-section-sub`, `.exam-back-btn` styles for sprechen/fragewörter screens

## [1.3.0] - 2026-06-24
### Added
- **Exam Prep tab** — new 🎓 Exam Prep tab with full Goethe-Zertifikat A2 / TELC A2 exam structure
  - All 4 skills: Lesen, Hören, Schreiben, Sprechen — each with exam format, parts breakdown, time, strategies
  - Schreiben: formal and informal writing templates built in
  - Sprechen: Teil 1 self-introduction template with TTS playback
  - AI-generated practice per skill (Lesen text + questions, Hören phone message + form, Schreiben prompt + model answer, Sprechen role-play + topic card)
  - Full A2 Mock Test — all 4 skills in one AI-generated exercise
- **Spaced repetition** — each lesson (Day 8+) now includes 3 review words from earlier days
- **Plural forms** — all nouns now include plural form (die Häuser etc.) on word cards
- **Separable verb badge** — trennbar verbs show a purple "trennbar" label on word cards
### Changed
- **60-day curriculum overhauled** — revised based on full Goethe A2 audit:
  - Day 7: Pronunciation lesson (ä/ö/ü, ich-Laut vs ach-Laut, sch/st/sp, German R) — replaces Week 1 review
  - Day 10: Enhanced with Körperbeschreibung (appearance vocab for Sprechen Bildbeschreibung)
  - Day 11: Adds explicit Akkusativ-only prepositions (durch/für/gegen/ohne/um)
  - Day 14: Hobbies & Leisure (Freizeit) — replaces Week 2 review
  - Day 21: Celebrations & Events (Feste, Einladungen) — replaces Week 3 review
  - Day 28: School & Education (Schule, Kita, Ausbildung) — replaces Week 4 review
  - Day 31: Travel & Holiday (Urlaub, Flughafen, Hotel) — replaces standalone IT/Cybersecurity day
  - Day 35: Grammar — Imperativ (command form) — replaces Week 5 review
  - Day 41: Grammar — Präteritum (war, hatte, konnte, musste) — replaces Culture day (moved to Day 55)
  - Day 42: Grammar — Infinitiv mit zu — replaces Week 6 review
  - Days 43–44: Lesen/Hören updated to name exact Goethe A2 text types and audio formats
- **AI lesson prompt improved**:
  - Word count raised from 8 → 15 per lesson
  - Word schema adds `pl` (plural) and `sep` (separable verb flag)
  - Spaced repetition instruction added (3 review words from prior days)
  - Removed forced IT/cybersecurity angle from strict rules
  - Präteritum added to Day 29–42 level rules
### Fixed
- `safeParseLesson` now parses and sanitises `pl`, `sep`, and `review_words` fields

## [1.2.0] - 2026-06-23
### Fixed
- Disclaimer screen now always shows on first visit for new users
- Dead demo modal (was CSS-blocked with `display:none!important`) removed entirely
- Removed duplicate/conflicting `dj2_disclaimer` localStorage key — unified to `speako_disc`
- "View disclaimer" link in footer now correctly re-opens disclaimer screen (was pointing to dead modal)
### Removed
- Dead `demoModal` HTML, CSS, and `acceptDemo()` / `dj2_disclaimer` JS

## [1.1.0] - 2026-06-23
### Removed
- Sakshi (`sharmsa`) Dutch user account
- `DAY_TOPICS_NL` Dutch curriculum (45-day inburgering plan)
- Dutch AI prompt from lesson generation
- All `isNL` conditionals throughout the app
### Changed
- TTS and speech recognition hardcoded to `de-DE`
- `TOTAL_DAYS()` simplified to always return 60
### Notes
- Manisha and Nikhil accounts and saved progress unaffected
- App is now German-only (60-day Goethe/TELC A2 curriculum)

## [1.0.9] - prior
### Changed
- Fix Say it: mic opens immediately, no auto-play; speech recognition uses correct language

## [1.0.8] - prior
### Changed
- Brighter colors, larger fonts throughout — mobile-friendly refresh

## [1.0.7] - prior
### Changed
- Remove language suffix from title tag — app name is just "Speako"

## [1.0.6] - prior
### Fixed
- Listen button broken by stray `}` in onclick
- TTS was not language-aware (Dutch/German)

## [1.0.5] - prior
### Added
- Sound feedback on correct/wrong/congrats answers via Web Audio API
- Mute button in header

## [1.0.4] - prior
### Changed
- Removed arrows from Back/Next navigation buttons

## [1.0.3] - prior
### Changed
- All buttons min-height 44px, larger padding — thumb-friendly mobile layout

## [1.0.2] - prior
### Changed
- Word card action buttons redesigned: centered grid tiles, large emoji icons

## [1.0.1] - prior
### Fixed
- Dutch prompt: articles only on nouns, not greetings/verbs/pronouns
- Dutch UI: greeting, chip, journey title, motivation banners all language-aware

## [1.0.0] - Initial release
- Multi-language PWA with German (Manisha, Nikhil) and Dutch (Sakshi) users
- 60-day Goethe/TELC A2 German curriculum
- AI-generated lessons via Claude API (Vercel proxy)
- iOS PWA: manifest, service worker, apple-touch-icon, standalone display
- Disclaimer screen on first visit
- Speech recognition + TTS per language
- Immersion-first lesson flow: Listen, Say, Write
