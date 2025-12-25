# Unit of Work 9: Company and Application Management

## Overview

This unit handles company information management, job application tracking, and company-related functionality for both admin and user interfaces.

## User Stories

### Company Management (Admin)

- **Company Management**: As an admin, I want to manage company information and job postings
- **CSV Upload Function**: As an admin, I want to upload company data via CSV files based on Circus data to populate company information
- **Company List**: As an admin, I want to view a list of all companies with their profile information
- **Company Details**: As an admin, I want to view detailed company information and track application processes between companies and users

### Application Status Management

- **Application Status Management**: As an admin, I want to track and manage the application process stages between users and companies to analyze conversion rates and process effectiveness

### Recommended Companies (User)

- **Recommended Companies**: As a user, I want to view a list of recommended companies with the ability to view details and send messages, similar to Circus platform functionality

### Company Analytics

- **Company Analytics Functions**: As a user, I want to access company analysis tools to research potential employers (scope to be confirmed)

## Acceptance Criteria

### Company Management

- Admin can upload company data via CSV files
- CSV upload supports company information fields based on Circus data structure
- Admin can view paginated list of all companies
- Admin can search and filter companies
- Admin can view detailed company profiles including:
  - Company basic information
  - Job postings and requirements
  - Application statistics
  - User interaction history

### Application Tracking

- System tracks application process stages between users and companies
- Admin can view application funnel analysis showing:
  - Application submission rates
  - Interview invitation rates
  - Interview completion rates
  - Offer rates
  - Acceptance rates
- Process tracking enables future analysis and optimization
- Application status is updated in real-time

### User Company Interaction

- Users can view personalized company recommendations
- Users can access detailed company information
- Users can send messages to companies through the platform
- Users can track their application status with each company
- Company recommendations are based on user profile and preferences

### Company Analytics

- Users can access company research tools (scope to be defined)
- Analytics may include company culture, growth metrics, employee satisfaction
- Integration with external data sources for comprehensive company insights
- Analytics help users make informed application decisions
