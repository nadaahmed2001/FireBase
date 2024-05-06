# Firebase CRUD & Push Notification
The "Firebase-crud-push-notification" repository showcases a web application integrated with Firebase for performing CRUD operations and sending push notifications. It provides functionalities to add user data (first name, last name, and email) to Firebase Realtime Database and demonstrates sending push notifications using Firebase Cloud Messaging (FCM).

## Usage

1. **CRUD Operations:**
   - Enter the first name, last name, and email in the respective input fields.
   - Click on the "Add" button to add the user data to the Firebase Realtime Database.

2. **Push Notifications:**
   - The application registers a service worker for handling background notifications.
   - It retrieves the FCM token for the device, necessary for sending push notifications.
   - Users can receive foreground notifications while the application is active.
   - The received notifications are also saved to the Firebase Realtime Database.

## Setup

1. **Firebase Configuration:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Obtain your Firebase project's configuration object (apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId, and measurementId).

2. **Set Up Firebase:**
   - Replace the placeholder values in the Firebase configuration object (`firebaseConfig`) in the HTML file (`index.html`) with your Firebase project's configuration.

3. **Running the Application:**
   - Open `index.html` in a web browser.
   - Use the provided input fields and buttons to interact with the application.

## Repository Structure

- `index.html`: Contains the HTML structure of the web application with input fields and buttons for CRUD operations and push notifications.
- `ServiceWorker.js`: Service worker file for handling background notifications.
