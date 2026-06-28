## MODIFIED Requirements

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

---

## REMOVED Requirements

### Requirement: Address belongs to a different user returns 403
**Reason**: With admin-only access on `:userId` routes, the admin is expected to operate on any user's data. The 403 ownership check for same-authenticated-user is superseded by the admin guard at the controller level. Ownership protection for regular users is now handled exclusively by the `/me/addresses` routes.
**Migration**: Use `/me/addresses/:id` for user-scoped access. Admin routes no longer perform per-address ownership checks beyond the userId URL parameter.
