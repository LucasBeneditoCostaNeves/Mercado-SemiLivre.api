## Purpose

Defines the requirements for managing delivery addresses associated with user accounts. Covers CRUD operations, default address designation, cascade deletion, and authentication guards.

---

## Requirements

### Requirement: User can create an address
An authenticated user SHALL be able to add a delivery address via `POST /users/:userId/addresses`. CEP, state, city, street, and number are required; complement is optional. A user MAY have multiple addresses.

#### Scenario: Successful address creation
- **WHEN** an authenticated user POSTs a valid address payload
- **THEN** the system persists the address and returns HTTP 201 with the created address

#### Scenario: Address creation with missing required field
- **WHEN** the user omits any required field (CEP, state, city, street, or number)
- **THEN** the system returns HTTP 422 Unprocessable Entity

---

### Requirement: User can list their addresses
An authenticated user SHALL be able to retrieve all their addresses via `GET /users/:userId/addresses`.

#### Scenario: User has addresses
- **WHEN** the user requests their address list and at least one exists
- **THEN** the system returns HTTP 200 with the list of all addresses

#### Scenario: User has no addresses
- **WHEN** the user requests their address list and none exist
- **THEN** the system returns HTTP 200 with an empty array

---

### Requirement: User can retrieve a single address
An authenticated user SHALL be able to fetch a specific address via `GET /users/:userId/addresses/:id`.

#### Scenario: Address exists and belongs to user
- **WHEN** the user requests an address that exists and belongs to them
- **THEN** the system returns HTTP 200 with the address data

#### Scenario: Address does not exist
- **WHEN** the user requests an address that does not exist
- **THEN** the system returns HTTP 404 Not Found

---

### Requirement: User can update an address
An authenticated user SHALL be able to update an existing address via `PUT /users/:userId/addresses/:id`.

#### Scenario: Successful update
- **WHEN** the user submits valid updated fields for their own address
- **THEN** the system persists the changes and returns HTTP 200 with the updated address

---

### Requirement: User can delete an address
An authenticated user SHALL be able to delete one of their addresses via `DELETE /users/:userId/addresses/:id`.

#### Scenario: Successful deletion
- **WHEN** the user deletes their own address
- **THEN** the system removes the address and returns HTTP 204 No Content

---

### Requirement: User can set a default address
An authenticated user SHALL be able to mark one address as their default via `PATCH /users/:userId/addresses/:id/default`. Only one address per user can be the default at any time; setting a new default automatically unsets the previous one.

#### Scenario: Set default on first address
- **WHEN** the user sets any address as default and no default currently exists
- **THEN** the system marks the address as `isDefault: true` and returns HTTP 200

#### Scenario: Replace existing default
- **WHEN** the user sets a new default address and another address is already the default
- **THEN** the system sets the new address as `isDefault: true` and sets the previous default to `isDefault: false`

#### Scenario: Only one address is default at any time
- **WHEN** any address is marked as default
- **THEN** no other address for the same user has `isDefault: true`

---

### Requirement: Addresses are deleted in cascade when user is deleted
The system MUST delete all of a user's addresses when the user account is deleted.

#### Scenario: Cascade delete
- **WHEN** a user account is deleted
- **THEN** all associated `Address` records are also deleted

---

### Requirement: Address routes require JWT authentication
All routes under `/users/:userId/addresses` MUST require a valid JWT token AND the authenticated user's `profileId` MUST match the `ADMIN_PROFILE_ID` environment variable.

#### Scenario: Request without JWT
- **WHEN** a request is made without a valid JWT token
- **THEN** the system returns HTTP 401 Unauthorized

#### Scenario: Request from non-admin user
- **WHEN** an authenticated user whose `profileId` does NOT match `ADMIN_PROFILE_ID` sends any request to `/users/:userId/addresses`
- **THEN** the system returns HTTP 403 Forbidden

#### Scenario: Request from admin user
- **WHEN** an authenticated user whose `profileId` matches `ADMIN_PROFILE_ID` sends a request to `/users/:userId/addresses`
- **THEN** the system processes the request normally
