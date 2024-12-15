Task Manager App

A simple and intuitive task manager application built with React, TypeScript, Zustand, and React Router. This app allows users to manage tasks efficiently, featuring login functionality, task categorization, and the ability to add, edit, delete, and mark tasks as complete.
Features

    User Authentication: Login functionality with session persistence.
    Task Management: Add, edit, delete, and toggle tasks between "Pending" and "Completed."
    Task Filtering: Filter tasks by categories such as "All," "Completed," and "Pending."
    Responsive UI: Works seamlessly on both desktop and mobile devices.
    Persistent Storage: Tasks and user session are saved using local storage.

Tech Stack

    React: Frontend framework.
    Zustand: State management for authentication and tasks.
    React Router: Navigation between pages.
    Tailwind CSS: For styling and responsive design.
    React Icons: Icon library for visual enhancements.

Authentication Flow

    On the login page, users enter their username and password.
    The session is persisted using Zustand with localStorage.
    Upon successful login, users are redirected to the Task Page.

Task Page Features

    Sidebar to filter tasks by category:
        All tasks
        Completed tasks
        Pending tasks
    Task List displaying tasks with options to:
        Add new tasks.
        Edit existing tasks.
        Delete tasks.
        Toggle tasks between "Completed" and "Pending."
    Responsive Design ensures usability on mobile and desktop devices.

State Management

    Authentication Store (authStore): Manages user login/logout states.
    Task Store (taskStore): Manages tasks and persists them per user.
