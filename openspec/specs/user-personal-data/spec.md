## Purpose

Defines the requirements for managing a user's personal data (CPF, birthDate, phone, gender). Covers one-time creation, CPF encryption and masking, retrieval, update, cascade deletion, input validation, and authentication guards.

---

## Requirements

### Requirement: User can create personal data
A user SHALL be able to submit their personal data (CPF, birthDate, phone, gender) exactly once after account creation. The system MUST reject any attempt to create a second record for the same user.

#### Scenario: Successful creation
- **WHEN** an authenticated user POSTs valid personal data to `/users/:userId/personal-data`
- **THEN** the system persists the record and returns HTTP 201 with the created data (CPF masked)

#### Scenario: Duplicate creation attempt
- **WHEN** an authenticated user POSTs to `/users/:userId/personal-data` and a record already exists
- **THEN** the system returns HTTP 409 Conflict

#### Scenario: Duplicate CPF
- **WHEN** a user submits a CPF that is already registered by another user
- **THEN** the system returns HTTP 409 Conflict

---

### Requirement: CPF is stored encrypted and returned masked
The system MUST encrypt the CPF at rest using AES-256-CBC. The API MUST never return the full CPF; responses MUST return the CPF masked as `***.XXX.XXX-**` (digits 4–9 visible).

#### Scenario: CPF in response is masked
- **WHEN** any endpoint returns personal data
- **THEN** the `cpf` field in the response body matches the pattern `***.XXX.XXX-**`

#### Scenario: CPF is not stored in plaintext
- **WHEN** a personal data record is persisted
- **THEN** the `cpf` column in the database does NOT contain the original plaintext digits

---

### Requirement: User can retrieve their personal data
An authenticated user SHALL be able to fetch their own personal data via `GET /users/:userId/personal-data`.

#### Scenario: Record exists
- **WHEN** the user requests their personal data and a record exists
- **THEN** the system returns HTTP 200 with the personal data (CPF masked)

#### Scenario: Record does not exist
- **WHEN** the user requests their personal data and no record has been created yet
- **THEN** the system returns HTTP 404 Not Found

---

### Requirement: User can update personal data
An authenticated user SHALL be able to update their personal data (phone, gender, birthDate) via `PUT /users/:userId/personal-data`.

#### Scenario: Successful update
- **WHEN** the user submits valid updated fields
- **THEN** the system persists the changes and returns HTTP 200 with the updated data (CPF masked)

#### Scenario: Update with no existing record
- **WHEN** the user attempts to update personal data but none exists
- **THEN** the system returns HTTP 404 Not Found

---

### Requirement: Personal data is deleted in cascade when user is deleted
The system MUST delete the user's personal data record when the user account is deleted.

#### Scenario: Cascade delete
- **WHEN** a user account is deleted
- **THEN** the associated `PersonalData` record is also deleted

---

### Requirement: Personal data input is validated at the presentation layer
The system SHALL validate CPF format (`000.000.000-00`) and phone format (`(00) 00000-0000`) using Zod schemas before any use case is invoked.

#### Scenario: Invalid CPF format
- **WHEN** the user submits a CPF that does not match `000.000.000-00`
- **THEN** the system returns HTTP 422 Unprocessable Entity before reaching the use case

#### Scenario: Invalid phone format
- **WHEN** the user submits a phone that does not match `(00) 00000-0000`
- **THEN** the system returns HTTP 422 Unprocessable Entity before reaching the use case

---

### Requirement: Personal data routes require JWT authentication
All routes under `/users/:userId/personal-data` MUST require a valid JWT token AND the authenticated user's `profileId` MUST match the `ADMIN_PROFILE_ID` environment variable.

#### Scenario: Request without JWT
- **WHEN** a request is made without a valid JWT token
- **THEN** the system returns HTTP 401 Unauthorized

#### Scenario: Request from non-admin user
- **WHEN** an authenticated user whose `profileId` does NOT match `ADMIN_PROFILE_ID` sends any request to `/users/:userId/personal-data`
- **THEN** the system returns HTTP 403 Forbidden

#### Scenario: Request from admin user
- **WHEN** an authenticated user whose `profileId` matches `ADMIN_PROFILE_ID` sends a request to `/users/:userId/personal-data`
- **THEN** the system processes the request normally
