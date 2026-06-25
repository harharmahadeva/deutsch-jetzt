# Changelog

## [2.3.0] - 2026-06-26
### Added
- **iPad breakpoint (768–1023px)** — new media query: larger word/quiz font sizes, test options capped at 560px and centred, taller buttons (50px), more padding
- **MacBook sidebar nav (1024px+)** — `.main` becomes a CSS grid (190px + 1fr); home blocks span full width; `.tabs` becomes a sticky left sidebar with vertical nav items; lesson/speak/exam/test panels occupy the right column; content max-width 1120px

## [2.2.0] - 2026-06-26
### Added
- **Pronunciation tips** — amber 💡 chips below phonetic guide on word cards showing English pronunciation rules (e.g. "'ie' sounds like 'ee'", "'w' sounds like 'v'"). Up to 2 tips per word, shown on Daily Words topic cards AND main lesson word cards (including review words)
- **Quiz stop button** — "← Stop" back button in Daily Words quiz header (P1, P2, and result screens). Resets quiz state and returns to topic picker. Not shown on auto-dismiss transition screens
- **Mic feedback inside word card** — speech recognition result now appears directly below the example sentence block (above the 3 action buttons), with color-coded backgrounds: green (#DCFCE7) ≥80%, yellow (#FEF9C3) 50–79%, red (#FFE4E6) <80%

## [2.1.0] - 2026-06-26
### Changed
- **Test tab always unlocked** — removed 60-minute session timer lock; Test tab accessible at any time
- **All Delhi/Hindi references removed** from AI prompts and UI strings:
  - Lesson prompt: removed "from New Delhi", "desi bhaiya" tone, Delhi vocabulary list (CP, DTC bus, auto-wala, Chandni Chowk, jugaad, bhai), "Delhi+Berlin humor" instruction
  - Pronunciation feedback prompt: removed "Delhi IT professional"
  - Exercise feedback prompt: removed "from Delhi", "Delhi or Berlin reference"
  - Scenario prompt: removed "compare to Delhi" instruction
  - Drill prompt: removed "from Delhi"
  - Test question prompt: removed "Delhi reference" from explanation rule
  - Pass messages: "Shabash!" → "Ausgezeichnet!", "Delhi's finest" → removed, "Arre yaar" → "Noch nicht ganz", "70% chahiye tha" → "70% needed", "DTC driver" → removed
  - Chat system prompt: removed "from New Delhi", "desi colleague", Hinglish instruction, Delhi comparisons list; "Soch raha hoon" → "Einen Moment"
  - Loading spinner: curry emoji 🍛 → ⏳

## [2.0.0] - 2026-06-25
### Added
- **30 words per topic** — all 10 Daily Words topics expanded from 12 → 30 words (180 new A2 German words total)
  - All words include `exEn` (English translation of the example sentence), shown on word cards
  - New words cover core inburgering vocabulary at A2 level (work, health, transport, authority, housing)
- **Chunked adaptive learning** — each topic now split into 3 chunks of 10 words with 5 quiz sessions:
  ```
  Learn 1–10  →  Chunk-1 Quiz
  Learn 11–20 →  Chunk-2 Quiz  →  Mix-Quiz (20 words)
  Learn 21–30 →  Chunk-3 Quiz  →  Final Mix-Quiz (30 words)  →  Complete
  ```
- **Mix-Quiz** — after chunks 2 and 3, a 2.2s intro screen ("🔀 Jetzt üben wir alles zusammen!") leads into an adaptive quiz over the full cumulative word pool
- **Cumulative scoring** — score accumulates across all 5 quiz sessions; final complete screen shows total correct / total questions with medal
- **Chunk result screen** — after each non-final quiz: shows chunk score + mastered count + "Gesamt bisher" running total + "Weiter →" button to next step
- **Word card header** — now shows "Teil X von 3 · Wort N / 10" for chunk-aware progress
- **English example translation** — 🇬🇧 line shown below each German example sentence on word cards
### Changed
- `renderDWWord` redesigned: chunk/position tracking, chunk-boundary "Quiz →" button, exEn display
- `startDWQuiz(ti)` replaced by `startDWChunkQuiz(ti, chunk)` + `startDWAdaptiveQuiz(ti, quizWords)` + `startDWMixQuiz(ti, chunk)`
- `dwSession` module state tracks `{ti, chunk, isMixing, cumCorrect, cumTotal}` across the full topic session
- Topic home card shows "30 Wörter je · 3 Chunks + Mix-Quiz"

## [1.9.0] - 2026-06-25
### Added
- **Adaptive MCQ Quiz** — two-phase adaptive quiz after every Daily Words topic (matches Android v1.6.17)
  - Phase 1: All 12 words, English → German MCQ, 4 options, 3-second speed bar per question
    - Answer in < 2s correct → word marked as mastered (⚡ Blitzschnell), skipped in Phase 2
    - Answer correct but slow → word queued for Phase 2 with feedback "kommt nochmal in Phase 2"
    - Wrong answer → word queued for Phase 2; red highlight on chosen, green on correct
  - Transition screen: 2.2s interstitial with 🇩🇪 flag + "Jetzt auf Deutsch!" + word count
    - If all words mastered in Phase 1: transition skipped, goes straight to complete screen
  - Phase 2: Unmastered words only — fill-the-blank MCQ using the example sentence with word replaced by ___
    - Phonetic hint shown below the sentence
    - Same speed bar + feedback logic as Phase 1
  - Complete screen: medal 🥇≥90% / 🥈≥70% / 🥉 below, score X/Y, % correct, mastered count, animated progress bar
    - Buttons: 🔁 Quiz wiederholen / 📖 Wörter ansehen / 📚 Anderes Thema
  - `blankWordInSentence()`: strips article from word then regex-replaces stem in example sentence
  - `getDWQuizOptions()`: shuffles 3 distractors + correct word for 4-option MCQ

## [1.8.0] - 2026-06-25
### Changed
- **Logout button** — "⏻ Logout" replaced with "Abmelden" text (matches Android v1.6.16)
- **Hero spacing** — increased margin below hero card from 16px → 20px for breathing room before lesson card
- **Back buttons** — `dw-back` (Daily Words overlay) now shows "← Zurück" as a proper outlined button; `exam-back-btn` already outlined from v1.7.0
### Notes
- v1.6.15 (Firebase cloud backup) skipped — requires Firebase project credentials; IndexedDB local storage unchanged

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
