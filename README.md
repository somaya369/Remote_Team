# Remote Team Workspace

A modern and responsive workspace platform built with Next.js for managing remote teams, projects, tasks, and meetings.

## Overview

Remote Team Workspace is designed to help distributed teams stay organized and productive through a clean and user-friendly interface. The application demonstrates modern frontend development practices using Next.js App Router, reusable React components, and responsive design.

## Features

### Dashboard

* Welcome section
* Statistics cards
* Recent activity
* Project overview
* Upcoming meetings

### Projects

* Project listing page
* Reusable project cards
* Project status tracking
* Technology tags
* Responsive layout

### Dynamic Project Details

* Dynamic routing using App Router
* Full project information
* Team assignment
* Deadlines
* Technologies used

### Team Members

* Team member cards
* Roles and responsibilities
* Skills overview
* Avatar placeholders

### Meetings

* Upcoming meetings
* Meeting types
* Participants
* Meeting schedules

### Contact Support

* Contact form
* User-friendly interface
* Responsive design

### Additional Features

* Dark Mode / Light Mode
* Responsive Navigation
* Modern UI Design
* Reusable Components

## Technologies Used

* Next.js
* React
* JavaScript
* Tailwind CSS
* App Router

## Project Structure

```bash
app/
├── dashboard/
├── projects/
│   └── [id]/
├── tasks/
├── team/
├── meetings/
├── contact/

components/
├── Navbar.jsx
├── Footer.jsx
├── ProjectCard.jsx
├── StatCard.jsx
├── MemberCard.jsx
├── MeetingCard.jsx
└── ThemeToggle.jsx

data/
├── projects.js
├── members.js
└── meetings.js
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/remote-team-workspace.git
```

2. Navigate to the project folder

```bash
cd remote-team-workspace
```

3. Install dependencies

```bash
npm install
```

4. Run the development server

```bash
npm run dev
```

5. Open in browser

```bash
http://localhost:3000
```

## Learning Objectives

This project demonstrates:

* Component-based architecture
* Reusable React components
* Props usage
* Dynamic routing
* Responsive design
* Next.js App Router
* Frontend project organization
* Modern UI development

## Author

Somaya Ahmadi

## License

This project was created for educational purposes as part of the Afghan Geeks Frontend Development Program.
