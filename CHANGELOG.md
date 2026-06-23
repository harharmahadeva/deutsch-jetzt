# Changelog

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
