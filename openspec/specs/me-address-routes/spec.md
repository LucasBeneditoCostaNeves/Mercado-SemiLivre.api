## Purpose

Defines the requirements for the `/me/addresses` routes, which allow any authenticated user to manage their own addresses without admin privileges. The `userId` is always derived from the JWT token, never from the URL.

---

## Requirements

### Requirement: Authenticated user can create their own address via /me route
The system SHALL allow any authenticated user to create an address via `POST /me/addresses`. The `userId` MUST be extracted from the JWT token, not from the URL. All validation rules from the admin route apply.

#### Scenario: Successful address creation via /me
- **WHEN** an authenticated user POSTs a valid address payload to `/me/addresses`
- **THEN** the system persists the address linked to the token's userId and returns HTTP 201

#### Scenario: Address creation with missing required field via /me
- **WHEN** the user omits any required field (CEP, state, city, street, or number)
- **THEN** the system returns HTTP 422 Unprocessable Entity

---

### Requirement: Authenticated user can list only their own addresses via /me route
The system SHALL allow any authenticated user to retrieve their addresses via `GET /me/addresses`. The response MUST contain only addresses belonging to the authenticated user.

#### Scenario: User has addresses
- **WHEN** an authenticated user sends GET to `/me/addresses`
- **THEN** the system returns HTTP 200 with only that user's addresses

#### Scenario: User has no addresses
- **WHEN** an authenticated user sends GET to `/me/addresses` and none exist
- **THEN** the system returns HTTP 200 with an empty array

---

### Requirement: Authenticated user can retrieve one of their own addresses via /me route
The system SHALL allow any authenticated user to fetch a specific address via `GET /me/addresses/:id`, provided the address belongs to them.

#### Scenario: Address exists and belongs to the authenticated user
- **WHEN** the user requests an address by ID that belongs to them
- **THEN** the system returns HTTP 200 with the address data

#### Scenario: Address belongs to a different user
- **WHEN** the user requests an address by ID that belongs to another user
- **THEN** the system returns HTTP 404 Not Found (information hiding — existence is not revealed)

#### Scenario: Address does not exist
- **WHEN** the user requests an address by ID that does not exist
- **THEN** the system returns HTTP 404 Not Found

---

### Requirement: Authenticated user can update one of their own addresses via /me route
The system SHALL allow any authenticated user to update an address via `PUT /me/addresses/:id`, provided the address belongs to them.

#### Scenario: Successful update via /me
- **WHEN** the user submits valid updated fields for their own address
- **THEN** the system persists the changes and returns HTTP 200

#### Scenario: Attempt to update another user's address via /me
- **WHEN** the user submits an update for an address belonging to another user
- **THEN** the system returns HTTP 404 Not Found

---

### Requirement: Authenticated user can delete one of their own addresses via /me route
The system SHALL allow any authenticated user to delete an address via `DELETE /me/addresses/:id`, provided the address belongs to them.

#### Scenario: Successful deletion via /me
- **WHEN** the user deletes their own address
- **THEN** the system removes the address and returns HTTP 204 No Content

#### Scenario: Attempt to delete another user's address via /me
- **WHEN** the user attempts to delete an address belonging to another user
- **THEN** the system returns HTTP 404 Not Found

---

### Requirement: Authenticated user can set their default address via /me route
The system SHALL allow any authenticated user to mark one of their addresses as default via `PATCH /me/addresses/:id/default`.

#### Scenario: Set default via /me
- **WHEN** the user sets an address as default via `/me/addresses/:id/default`
- **THEN** the system marks it as `isDefault: true` and clears the previous default

#### Scenario: Attempt to set another user's address as default
- **WHEN** the user attempts to set as default an address that belongs to another user
- **THEN** the system returns HTTP 404 Not Found

---

### Requirement: /me/addresses routes require JWT authentication
All routes under `/me/addresses` MUST require a valid JWT token. No admin profile is required.

#### Scenario: Request without JWT
- **WHEN** a request is made to any `/me/addresses` route without a valid JWT
- **THEN** the system returns HTTP 401 Unauthorized
