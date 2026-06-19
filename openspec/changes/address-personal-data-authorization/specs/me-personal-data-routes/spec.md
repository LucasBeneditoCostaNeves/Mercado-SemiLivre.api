## ADDED Requirements

### Requirement: Authenticated user can create their own personal data via /me route
The system SHALL allow any authenticated user to submit their personal data via `POST /me/personal-data`. The `userId` MUST be extracted from the JWT token. All validation rules from the admin route apply (CPF format, phone format, birthDate, gender enum).

#### Scenario: Successful creation via /me
- **WHEN** an authenticated user POSTs valid personal data to `/me/personal-data`
- **THEN** the system persists the record linked to the token's userId and returns HTTP 201 with masked CPF

#### Scenario: Duplicate creation attempt via /me
- **WHEN** an authenticated user POSTs to `/me/personal-data` and a record already exists
- **THEN** the system returns HTTP 409 Conflict

---

### Requirement: Authenticated user can retrieve their own personal data via /me route
The system SHALL allow any authenticated user to fetch their personal data via `GET /me/personal-data`. The response MUST contain only the data belonging to the authenticated user.

#### Scenario: Record exists
- **WHEN** an authenticated user sends GET to `/me/personal-data`
- **THEN** the system returns HTTP 200 with the user's personal data (CPF masked)

#### Scenario: Record does not exist
- **WHEN** an authenticated user sends GET to `/me/personal-data` and no record exists
- **THEN** the system returns HTTP 404 Not Found

---

### Requirement: Authenticated user can update their own personal data via /me route
The system SHALL allow any authenticated user to update their personal data via `PUT /me/personal-data`. The `userId` MUST be extracted from the JWT token.

#### Scenario: Successful update via /me
- **WHEN** the user submits valid updated fields to `/me/personal-data`
- **THEN** the system persists the changes and returns HTTP 200

#### Scenario: Update with no existing record via /me
- **WHEN** the user attempts to update personal data but none exists
- **THEN** the system returns HTTP 404 Not Found

---

### Requirement: /me/personal-data routes require JWT authentication
All routes under `/me/personal-data` MUST require a valid JWT token. No admin profile is required.

#### Scenario: Request without JWT
- **WHEN** a request is made to any `/me/personal-data` route without a valid JWT
- **THEN** the system returns HTTP 401 Unauthorized
