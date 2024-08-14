
---

# Comment System Application

## Description

This is a modern, sleek comment system application built with React and Redux. It allows users to add comments, edit existing comments, reply to comments, and delete comments. The application features data persistence using local storage, ensuring that comments are not lost on page refresh. Comments and replies are sortable by date and time, and the UI has been designed to look similar to YouTube comments.

## Features

- Add new comments with name and text.
- Edit existing comments (name cannot be edited).
- Reply to comments with validation for name and text.
- Delete comments and replies.
- Sort comments by date and time.
- Persist data using local storage.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **Local Storage**: For data persistence.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   This will start the development server and open the application in your default web browser.

## Usage

1. **Add a Comment:**
   - Enter your name and comment text in the input fields.
   - Click the "Post Comment" button to add the comment.

2. **Edit a Comment:**
   - Click the "Edit" button on a comment to enable editing.
   - Update the comment text and click "Save" to apply changes.

3. **Reply to a Comment:**
   - Click the "Reply" button on a comment.
   - Enter your name and reply text, then click "Post Reply."

4. **Delete a Comment or Reply:**
   - Click the "Delete" button located on the border of the comment or reply.

5. **Sort Comments:**
   - Click the "Sort by Date" button to sort comments and replies by date and time.

## Data Persistence

Data is saved in local storage to ensure that comments are not lost on page refresh. The application uses the `localStorage` API to save and retrieve comments.

## Testing

- **Manual Testing**: Check all functionalities, including adding comments, editing, deleting, replying, and sorting.
- **Automated Testing**: Unit tests are recommended using Jest and React Testing Library.

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact:

- **Your Name**: Vinay Reddy
- **GitHub**: [Your GitHub Profile](https://github.com/VinnuReddy18)

---
