# TaskHub: A Project Management Tool

TaskHub is a full-stack application designed to help teams manage their projects and tasks efficiently. It provides a collaborative environment where users can organize their work, track progress, and communicate effectively.

## Key Features

- **User Authentication**: Secure sign-up and sign-in functionality to protect user data. Forgot password, Email Verification, Reset Password functionalities.
- **Workspace Management**:
  - Create dedicated workspaces for different teams or projects.
  - Invite teammates via a unique link or email to collaborate in real-time.
- **Project Tracking**:
  - Create and manage projects within each workspace.
  - Get a clear overview of all your projects in one place.
- **Task Management**:
  - Break down projects into smaller, manageable tasks.
  - Assign tasks to team members and set priorities and statuses.
  - Add detailed descriptions, sub-tasks, and comments for clear communication.
- **Dashboard**:
  - A comprehensive dashboard to visualize project statistics and recent activities.
  - Keep track of upcoming tasks and your personal assignments.
- **User Profiles**:
  - Manage your user profile and settings.
- **Security**:
  - Employs Arcjet for rate limiting ,bot protection and validation of emails to prevent disposable addresses and emails without MX records to secure the application.
- **Email Notifications**:
  - Utilizes SendGrid to send transactional emails for events like email verification and workspace invitations.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Services Used

- **Arcjet**: For security features like rate limiting, bot protection, and validation of emails to prevent disposable addresses and emails without MX records.
- **SendGrid**: For sending transactional emails. 

## Screenshots

| Feature | Screenshot |
| :---: | :---: |
| **Home Page** | <img src="screenshots/01-home-page.png" alt="Home Page" width="400"/> |
| **Working Overview** | <img src="screenshots/02-working-overview.png" alt="Working Overview" width="400"/> |
| **Features Overview** | <img src="screenshots/03-features-overview.png" alt="Features Overview" width="400"/> |
| **Create Project** | <img src="screenshots/04-create-project.png" alt="Create Project" width="400"/> |
| **Project Tracking** | <img src="screenshots/05-tracking-project.png" alt="Project Tracking" width="400"/> |
| **Adding Deadlines** | <img src="screenshots/06-adding-deadlines.png" alt="Adding Deadlines" width="400"/> |
| **Task Details** | <img src="screenshots/07-task-details.png" alt="Task Details" width="400"/> |
| **Task Stats** | <img src="screenshots/08-task-stats.png" alt="Task Stats" width="400"/> |
| **Invite Members** | <img src="screenshots/09-invite-members.png" alt="Invite Members" width="400"/> |
| **Email Invitation** | <img src="screenshots/10-email-invitation.png" alt="Email Invitation" width="400"/> |
| **Workspaces** | <img src="screenshots/11-workspaces-view.png" alt="Workspaces" width="400"/> |
| **Invitation Management** | <img src="screenshots/12-invitation-management.png" alt="Invitation Management" width="400"/> |
| **Workspace Edit** | <img src="screenshots/13-workspace-edit.png" alt="Workspace Edit" width="400"/> |
| **My Tasks** | <img src="screenshots/14-my-tasks.png" alt="My Tasks" width="400"/> |
| **Dashboard** | <img src="screenshots/15-dashboard.png" alt="Dashboard" width="400"/> | 