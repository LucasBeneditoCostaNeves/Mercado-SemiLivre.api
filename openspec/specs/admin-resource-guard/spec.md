## Purpose

Defines the requirements for the `AdminProfileGuard` and related decorators that restrict access to admin-only routes based on the authenticated user's `profileId`.

---

## Requirements

### Requirement: Admin profile guard restricts access based on JWT profileId
The system SHALL provide an `AdminProfileGuard` that allows a request to proceed only if the authenticated user's `profileId` matches the `ADMIN_PROFILE_ID` environment variable.

#### Scenario: Request from admin user
- **WHEN** an authenticated user whose `profileId` equals `ADMIN_PROFILE_ID` sends a request to a guarded route
- **THEN** the system allows the request to proceed

#### Scenario: Request from non-admin user
- **WHEN** an authenticated user whose `profileId` does NOT equal `ADMIN_PROFILE_ID` sends a request to a guarded route
- **THEN** the system returns HTTP 403 Forbidden

#### Scenario: ADMIN_PROFILE_ID not configured
- **WHEN** the `ADMIN_PROFILE_ID` environment variable is not set and any user sends a request to a guarded route
- **THEN** the system returns HTTP 403 Forbidden (fail-secure behavior)

---

### Requirement: Admin guard runs after JWT authentication
The `AdminProfileGuard` SHALL only be applied after a valid JWT has been verified. An unauthenticated request MUST be rejected by the JWT guard before the admin check runs.

#### Scenario: Unauthenticated request to admin route
- **WHEN** a request without a valid JWT token reaches an admin-guarded route
- **THEN** the system returns HTTP 401 Unauthorized (not 403)

---

### Requirement: CurrentUser decorator extracts authenticated user from request context
The system SHALL provide a `@CurrentUser()` parameter decorator that returns the `AuthenticatedUser` object populated by the JWT strategy, without exposing the full HTTP `Request` object to the controller.

#### Scenario: Decorator used in a controller method
- **WHEN** a controller method annotated with `@CurrentUser()` is invoked with a valid JWT
- **THEN** the injected value is the `AuthenticatedUser` object with `id`, `email`, `name`, `createdAt`, and `profileId`
