# Unit of Work 6: Messaging and Communication

## Overview

This unit handles all messaging functionality including admin-to-user messages, announcements, and user-to-company communication.

## User Stories

### Message Management (Admin)

- **014_Message List**: As an admin, I want to view a list of all sent messages to users showing message ID, registration date, recipient (all or individual), title, and content
- **015_New Message Creation/Preview**: As an admin, I want to create new messages for users (all or individual) with message ID, date, recipient selection, title, and content, then preview before sending
- **016_Message Preview/Send**: As an admin, I want to review and send created messages to selected users

### Announcement Management (Admin)

- **019_Announcement List**: As an admin, I want to view a list of all sent announcements showing announcement ID, registration date, number of recipient users, title, and message content
- **020_New Announcement Creation/Preview**: As an admin, I want to create new announcements for all users with automatic user count, title, and content, then preview before sending
- **021_Announcement Preview/Send**: As an admin, I want to review and send created announcements to all users

### User Recommendation Management (Admin)

- **017_User Recommendation List**: As an admin, I want to view self-recommendation letters submitted by users with action buttons for details, status management, and deletion
- **018_User Recommendation Details (View)**: As an admin, I want to view detailed self-recommendation letters with status management (unread, pending, completed) and deletion options

### Company Messaging (User)

- **052_Company Message List**: As a user, I want to view my self-recommendation letters sent to companies with status information and management options
- **053_New Company Message Creation**: As a user, I want to create self-recommendation letters for specific companies with title and content
- **054_Company Message Preview/Send**: As a user, I want to preview and send my self-recommendation letters to companies
- **055_Send Complete**: As a user, I want to see confirmation that my message has been sent successfully

## Acceptance Criteria

### Admin Messaging

- Admin can view all sent messages with proper filtering and sorting
- Admin can create messages for all users or specific individuals
- Admin can preview messages before sending
- Admin can track message delivery and status
- Message creation includes proper validation

### Admin Announcements

- Admin can view all sent announcements
- Admin can create announcements for all users
- Admin can preview announcements before sending
- System automatically counts recipient users
- Announcements are properly delivered to all active users

### User Recommendation Management

- Admin can view all user-submitted recommendation letters
- Admin can manage status of recommendations (unread, pending, completed)
- Admin can delete inappropriate recommendations
- Admin has backend-only access to auto-generated company recommendations
- Admin can export recommendations as PDF for company distribution

### User Company Communication

- Users can create self-recommendation letters for companies
- Users can preview letters before sending
- Users can track status of sent recommendations
- Users receive confirmation of successful sends
- System maintains proper threading and organization of company communications
