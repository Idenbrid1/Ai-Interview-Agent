# Unit of Work 7: Document and Profile Management

## Overview

This unit handles user profile management, document uploads, and the drive functionality for storing and managing career-related documents.

## User Stories

### Profile and Document Management (User)

- **043_New Creation/Upload (Create)**: As a user, I want to update and upload profile information and documents including resume, entry sheets, and ID photos, with separate directories for job hunting vs career change
- **044_Preview/Register**: As a user, I want to preview my uploaded profile information and documents before registering them, including user ID, full name, gender, birth date, and uploaded documents
- **045_Details (View/Edit)**: As a user, I want to view and edit my registered profile and document information with confirmation of successful updates

### Document Drive Functionality

- **Doc Drive Function**: As a user, I want to access a document drive system to store and manage my career-related documents organized by job hunting or career change categories

### Document Categories

- **Job Hunting Documents**: Resume, Entry Sheets
- **Career Change Documents**: Resume, Career History/Work Experience Records

## Acceptance Criteria

### Profile Management

- Users can update comprehensive profile information including:
  - User ID (auto-generated)
  - Full name
  - Gender selection
  - Birth date selection
  - Additional profile fields as confirmed with client
- All profile updates are properly validated
- Users receive confirmation of successful profile updates

### Document Upload and Management

- Users can upload multiple document types:
  - Resume files
  - Entry sheet documents
  - ID photos
  - Career history documents (for career change users)
- Documents are organized in separate directories for job hunting vs career change
- Users can preview all uploaded content before final registration
- System supports common file formats (PDF, DOC, DOCX, JPG, PNG)
- File size limits are enforced and communicated to users

### Document Drive System

- Users have access to a personal document drive
- Documents are categorized appropriately based on user type (job hunting vs career change)
- Users can view, download, and manage their stored documents
- Document versioning is supported for updates
- Secure storage with proper access controls

### Document Creation Support

- System supports both document upload and document creation functionality
- Users can create documents within the platform as well as upload existing ones
- Document templates may be provided for common document types
