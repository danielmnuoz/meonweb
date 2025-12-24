PLAN.MD — Thoughts Page

This plan defines the implementation of the Thoughts page in clear, sequential phases. The goal is to allow Claude Code to execute each phase without guessing or overreaching.

The Thoughts page is a text-first, editorial stream of short-to-medium posts. Images are optional but secondary.

⸻

Phase 1 — Frontend (Read-Only, No Auth, No DB)

Goal: Build the public Thoughts UI using dummy data.

Scope
	•	/thoughts page
	•	Editorial layout consistent with the home page
	•	No authentication
	•	No real backend persistence

Behavior
	•	Thoughts rendered in reverse chronological order
	•	Each thought contains:
	•	Date (quiet, small text)
	•	Body text (primary content)
	•	Optional image placeholder support (not required yet)

Data Source
	•	Dummy thoughts defined in code (array or static file)
	•	Data structure should mirror the eventual database schema

Output
	•	A visually complete Thoughts page
	•	Dummy thoughts visible on load
	•	No write or edit UI exposed

⸻

Phase 2 — Backend Write Path + Authentication (No DB Yet)

Goal: Enable authenticated posting flow without persistence.

Scope
	•	Private write endpoint (API route)
	•	Secret token–based authentication
	•	Simple write UI (author-only)

Authentication Model
	•	Token-based auth via Authorization: Bearer <TOKEN>
	•	Token stored in environment variables
	•	No user accounts
	•	No public login UI

Write Flow
	•	Author-only page or endpoint for submitting a thought
	•	Accepts:
	•	Text (required)
	•	Optional image (single file)
	•	Submission validates token
	•	Response confirms success

Persistence
	•	Still uses in-memory or dummy storage
	•	No database writes yet

Output
	•	Authenticated write path exists
	•	UI for posting (author-only)
	•	Public page remains read-only

⸻

Phase 3 — Database Integration (Persistence)

Goal: Replace dummy storage with real SQL persistence.

Database
	•	Cloud-hosted SQL (free tier)
	•	Example: Neon Postgres

Schema (Conceptual)
	•	thoughts table:
	•	id
	•	content (text)
	•	image_url (nullable)
	•	created_at

Changes
	•	Read endpoint fetches thoughts from DB
	•	Write endpoint inserts new thoughts into DB
	•	Dummy data removed

Images
	•	If enabled:
	•	Uploaded to object storage
	•	Stored as URL in DB
	•	Images remain optional

Output
	•	Fully functional Thoughts system
	•	Persistent reads and writes
	•	Auth remains write-only

⸻

Non-Goals
	•	Public comments
	•	Likes or metrics
	•	Editing or deleting posts
	•	Rich formatting

⸻

Guiding Principles
	•	Text-first
	•	Minimal UI
	•	Low friction for writing
	•	No visible admin surface

End of plan.