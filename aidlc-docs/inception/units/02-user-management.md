# Unit of Work 2: User Management

## Overview

This unit handles all user management functionality from the admin perspective, including user listing, detailed views, and account management.

## User Stories

### User Administration

- **007_User List**: As an admin, I want to view a list of all registered users with their basic information (User ID, registration date, name, gender, age, level/class, email, phone) and action buttons for details and account suspension
- **008_User Details (View)**: As an admin, I want to view detailed information about a specific user including profile details, subscription plan, payment history, application status, and links to related management pages
- **CSV Upload Function**: As an admin, I want to upload user data via CSV file to bulk import user information

### User Profile Management

- **056_Registration Details Confirmation**: As a user, I want to view my registered profile information
- **057_Edit Page**: As a user, I want to edit my registered profile information
- **058_Changes Complete**: As a user, I want to see confirmation that my profile changes have been saved

## Acceptance Criteria

### User Administration

- Admin can view paginated list of all users
- Admin can search users by name
- Admin can sort users by ID, registration date, or name
- Admin can view detailed user information including:
  - Profile information
  - Subscription details and payment history
  - Application status with companies
  - Interview schedules
  - Links to interview reports, messages, and user content
- Admin can suspend user accounts
- Admin can upload CSV files to import user data

### User Profile Management

- Users can view their complete profile information
- Users can edit their profile details
- Users receive confirmation when changes are saved
- All profile changes are validated before saving
