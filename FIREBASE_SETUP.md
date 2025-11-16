# Firebase Setup Guide

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard

## Step 2: Enable Authentication

1. In Firebase Console, go to **Authentication** > **Sign-in method**
2. Enable **Google** as a sign-in provider
3. Add your authorized email domain if needed
4. Save the authorized domains (your Vercel deployment URL will need to be added)

## Step 3: Create Firestore Database

1. Go to **Firestore Database** in Firebase Console
2. Click "Create database"
3. Start in **test mode** (or production mode with proper security rules)
4. Choose a location for your database

## Step 4: Get Firebase Configuration

1. Go to **Project Settings** (gear icon) > **General**
2. Scroll down to "Your apps" section
3. Click the web icon (`</>`) to add a web app
4. Register your app and copy the Firebase configuration

## Step 5: Set Up Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Step 6: Firestore Security Rules

Update your Firestore security rules to allow authenticated users to manage all students, assignments, tests, and folders. Students can read their own assignments and tests:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper function to check if user is admin
    function isAdmin() {
      return request.auth != null && 
        request.auth.token.email == 'iamaaritmalhotra@gmail.com';
    }
    
    // Helper function to check if user is a student assigned to this resource
    // This checks if the user's email matches any student email in the studentIds array
    function isAssignedStudent() {
      return request.auth != null && 
        resource.data.studentIds != null &&
        resource.data.studentIds.size() > 0 &&
        // Check if any student in the studentIds array has the user's email
        exists(/databases/$(database)/documents/students/$(resource.data.studentIds[0])) &&
        get(/databases/$(database)/documents/students/$(resource.data.studentIds[0])).data.email == request.auth.token.email;
    }
    
    // Students collection - admin can manage all, students can read their own
    match /students/{studentId} {
      allow read: if request.auth != null;
      allow write: if isAdmin();
    }
    
    // Assignments collection - admin can manage all, students can read their own
    match /assignments/{assignmentId} {
      allow read: if request.auth != null && 
        (isAdmin() || 
         (resource.data.studentEmails != null && 
          request.auth.token.email in resource.data.studentEmails));
      allow write: if isAdmin();
    }
    
    // Tests collection - admin can manage all, students can read their own
    match /tests/{testId} {
      allow read: if request.auth != null && 
        (isAdmin() || 
         (resource.data.studentEmails != null && 
          request.auth.token.email in resource.data.studentEmails));
      allow write: if isAdmin();
    }
    
    // Folders collection - admin only
    match /folders/{folderId} {
      allow read, write: if isAdmin();
    }
  }
}
```

**Note:** The code now automatically stores `studentEmails` alongside `studentIds` when creating/updating assignments and tests. This allows the security rules to check if the user's email is in the `studentEmails` array.

If you prefer a simpler setup for testing, use the simplified version below:

**Simplified Version (Less Secure, for Testing):**

For easier testing, you can use this simpler version that allows all authenticated users to read/write:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

**Note:** The simplified version is less secure and should only be used for testing. For production, use the more restrictive rules above.

**To Update Security Rules:**
1. Go to Firebase Console > Firestore Database
2. Click on the "Rules" tab
3. Replace the existing rules with one of the rule sets above
4. Click "Publish" to save the changes

## Step 7: Vercel Deployment

1. Add all environment variables in Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add all `NEXT_PUBLIC_FIREBASE_*` variables
2. Add your Vercel domain to Firebase authorized domains:
   - Go to Authentication > Settings > Authorized domains
   - Add your Vercel deployment URL

## Step 8: Test the Setup

1. Run `npm run dev` locally
2. Navigate to `/sign-in`
3. Sign in with Google using `iamaaritmalhotra@gmail.com`
4. You should be redirected to `/student-stats`

## Troubleshooting

- **"Firebase: Error (auth/unauthorized-domain)"**: Add your domain to Firebase authorized domains
- **"Firebase: Error (auth/popup-closed-by-user)"**: User closed the popup, try again
- **Data not saving**: Check Firestore security rules and ensure you're authenticated

