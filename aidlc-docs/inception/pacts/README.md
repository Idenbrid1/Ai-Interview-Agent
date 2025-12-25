# PACT Contract Definitions

## Overview

This directory contains PACT (Provider and Consumer Tests) contract definitions for the AI Interview Platform. These contracts define the expected interactions between the Next.js frontend and AWS-based backend services.

## Contract Structure

Each PACT file represents contracts between:

- **Consumer**: NextJS-Frontend (React.js application)
- **Provider**: Specific AWS-based microservice

## Contract Files

### 1. Authentication & Authorization (`01-authentication-contracts.json`)

**Provider**: `Authentication-Service`

- User login/logout
- Admin authentication with MFA
- User registration with OTP verification
- Token refresh mechanisms
- Password reset workflows

### 2. User Management (`02-user-management-contracts.json`)

**Provider**: `User-Management-Service`

- Admin user listing and search
- User profile management
- Account suspension/activation
- CSV user data import
- Profile updates and validation

### 3. Payment & Subscription (`03-payment-subscription-contracts.json`)

**Provider**: `Payment-Subscription-Service`

- Subscription plan management
- Stripe payment integration
- Sales dashboard metrics
- Billing and invoice generation
- Usage tracking and limits

### 4. AI Interview System (`04-ai-interview-contracts.json`)

**Provider**: `AI-Interview-Service`

- Interview session management
- Real-time AI avatar interaction
- Speech-to-text transcription
- Voice settings and customization
- Interview completion workflows

### 5. Interview Management (`05-interview-management-contracts.json`)

**Provider**: `Interview-Management-Service`

- Interview report generation
- Preparation content management
- Admin content creation
- User report access
- Performance analytics

### 6. Messaging & Communication (`06-messaging-communication-contracts.json`)

**Provider**: `Messaging-Communication-Service`

- Admin-to-user messaging
- System announcements
- Company recommendation letters
- Message status tracking
- Notification management

### 7. Document & Profile Management (`07-document-profile-contracts.json`)

**Provider**: `Document-Profile-Service`

- Document upload and storage
- OCR and AI analysis
- Template-based document creation
- File management and organization
- Storage quota management

### 8. Assessment & Testing (`08-assessment-testing-contracts.json`)

**Provider**: `Assessment-Testing-Service`

- Career aptitude testing
- SPI test administration
- 16 Personality assessment
- Progress tracking
- Results analysis and storage

### 9. Company & Application Management (`09-company-application-contracts.json`)

**Provider**: `Company-Application-Service`

- Company recommendations
- Application status tracking
- Company analytics
- CSV data import
- Hiring funnel analysis

### 10. Navigation & Static Content (`10-navigation-static-contracts.json`)

**Provider**: `Navigation-Static-Content-Service`

- Dashboard data aggregation
- Dynamic navigation menus
- Static page content
- Theme management
- User interface customization

## AWS Services Integration

### Expected AWS Services:

- **API Gateway**: REST API endpoints
- **Lambda**: Serverless business logic
- **Cognito**: User authentication and authorization
- **DynamoDB**: NoSQL data storage
- **S3**: File storage and static content
- **SES**: Email notifications
- **Transcribe**: Speech-to-text conversion
- **Polly**: Text-to-speech for AI avatar
- **CloudFront**: Content delivery
- **EventBridge**: Event-driven architecture

## Contract Testing Strategy

### Consumer Tests (Frontend)

- Verify API request formats
- Validate response handling
- Test error scenarios
- Ensure proper authentication headers

### Provider Tests (Backend)

- Validate API endpoint implementations
- Test business logic compliance
- Verify data persistence
- Ensure proper error responses

## Usage Guidelines

### For Frontend Developers:

1. Use these contracts to mock backend responses during development
2. Ensure all API calls match the defined request formats
3. Handle all specified response scenarios
4. Implement proper error handling for each contract

### For Backend Developers:

1. Implement APIs that satisfy these contract specifications
2. Ensure response formats match exactly
3. Handle all specified provider states
4. Maintain backward compatibility when updating contracts

### For QA/Testing:

1. Use contracts for integration testing
2. Verify both happy path and error scenarios
3. Test authentication and authorization flows
4. Validate data consistency across services

## Contract Versioning

- All contracts use PACT Specification version 2.0.0
- Provider states define the required backend conditions
- Request/response formats are strictly defined
- Breaking changes require new contract versions

## Security Considerations

- All authenticated endpoints require Bearer tokens
- Sensitive data is properly masked in examples
- File uploads include security validations
- Admin endpoints have proper permission checks

## Next Steps

1. **Implementation**: Use these contracts to guide API development
2. **Testing**: Set up PACT broker for contract testing
3. **CI/CD**: Integrate contract tests into deployment pipeline
4. **Monitoring**: Track contract compliance in production
5. **Documentation**: Keep contracts updated with API changes
