## MODIFIED Requirements

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
