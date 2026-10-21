# To-do List Mini Project

A small to-do list app to practice React and REST API concepts from Full Stack Open, Part 2. This is a learning project: build the basic version first, and consider bigger ideas only after it works.

## First version

The app should let a user:

- Create categories for organizing tasks, such as School, Workout, Hobbies, or Responsibilities.
- Select a category and see its tasks.
- Filter the visible tasks by text.
- Add a task with a name, priority, category, and optional comments.
- Mark a task as finished.
- Archive a task.
- Remove a task.
- Keep categories and tasks after refreshing the page using JSON Server.

Keep the interface simple for now: a centered app area, basic sections, and bordered boxes for categories and tasks. Focus on making the features work before spending time on styling.

## Main screen

The page can be organized into:

1. A title.
2. A text input for filtering tasks.
3. A category section with an option to add a category.
4. The selected category’s task list and an option to add a task.
5. A small form for creating a category or task when requested.

The task form should have:

- **Name**
- **Priority**
- **Category**
- **Comments** (optional)
- **Add** and **Cancel** buttons

Each task should show its name and priority, with controls to finish, archive, or remove it. Keep the archive experience basic at first; for example, provide a way to show archived tasks separately from active ones.

## Data shape

JSON Server will provide an `id` for each record.

### Category

- `name` — the category name.

### Task

- `name` — the task name.
- `priority` — for example, Low, Medium, or High.
- `categoryId` — the category this task belongs to.
- `comments` — optional notes.
- `completed` — whether the task is finished.
- `archived` — whether the task is archived.

## React state and effects

### App-level state

- `categories` — categories loaded from the API.
- `tasks` — tasks loaded from the API.
- `selectedCategoryId` — the currently selected category.
- `searchText` — the current filter input.
- `showArchived` — whether the list should show archived tasks.

Keep form visibility and field values inside the relevant form component unless they need to be shared elsewhere.

The visible tasks should be derived from `tasks`, `selectedCategoryId`, `searchText`, and `showArchived`. Do not store a separate filtered-task list in state.

### Effects and API requests

- Use an effect when the app first loads to fetch categories and tasks from JSON Server.
- Show a loading state while the initial request is in progress and an error message if it fails.
- Send create, finish, archive, and remove requests in response to user actions.
- Update the UI after each request succeeds, and give the user feedback if a request fails.

## Components to build

- **App** — owns shared data and state; arranges the main page.
- **SearchBar** — filter input.
- **CategoryList** — displays categories and the add-category control.
- **CategoryForm** — collects a new category name.
- **TaskList** — displays the selected category’s matching tasks.
- **TaskItem** — displays one task and its finish, archive, and remove controls.
- **TaskForm** — collects the name, priority, category, and comments for a task.

Start with the simplest component structure that feels clear. Components can be split further later if they become difficult to manage.

## Build steps

### 1. Sketch the interface

- [ ] Create the centered app area and title.
- [ ] Add placeholder sections for filtering, categories, and tasks.
- [ ] Use simple borders or boxes to distinguish the sections.

**Checkpoint:** The basic layout is visible, even though the controls do not work.

### 2. Add categories with React state

- [ ] Add a few temporary categories.
- [ ] Display the categories.
- [ ] Select a category and show which one is selected.
- [ ] Add a simple form to create a category.

**Checkpoint:** A category can be selected, and a new category appears in the list.

### 3. Add and display tasks with React state

- [ ] Add temporary tasks connected to categories by `categoryId`.
- [ ] Show only tasks for the selected category.
- [ ] Build the task form with name, priority, category, and comments.
- [ ] Add new tasks to state and display them in the right category.

**Checkpoint:** A task can be added and appears in its category.

### 4. Add filtering and task controls

- [ ] Filter the selected category’s tasks by the text input.
- [ ] Add a control to mark a task finished or unfinished.
- [ ] Add an archive control and a way to show archived tasks.
- [ ] Add a remove control.
- [ ] Show a useful message when the category has no tasks or the filter has no matches.

**Checkpoint:** The main features work using temporary in-memory data.

### 5. Set up JSON Server

- [ ] Add a JSON Server data file with `categories` and `tasks` collections.
- [ ] Start JSON Server and confirm its endpoints respond.
- [ ] Replace temporary category and task data with data fetched from the API.
- [ ] Add loading and error messages for the initial fetch.

**Checkpoint:** Categories and tasks load from JSON Server and remain after a page refresh.

### 6. Connect user actions to the API

- [ ] POST newly created categories and tasks.
- [ ] Update a task when it is finished or archived.
- [ ] DELETE a task when it is removed.
- [ ] Update the displayed data after successful requests.
- [ ] Handle request failures visibly.

**Checkpoint:** The core app works end to end with JSON Server.

## Scope for now

Leave accounts, multiple users, deadlines, drag-and-drop, and advanced styling for later. Once the basic version works, decide whether there is anything you want to add.