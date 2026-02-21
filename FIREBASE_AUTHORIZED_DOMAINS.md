# Firebase Authorized Domains

## Current Authorized Domains

The following domains should be added to Firebase Authentication > Settings > Authorized domains:

1. `localhost` (automatically included)
2. `am-tutoring-n4ps0krym-legolord007s-projects.vercel.app`
3. Your production domain (if different)

## How to Add Authorized Domains

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Authentication** > **Settings**
4. Scroll down to **Authorized domains**
5. Click **Add domain**
6. Enter the domain (without `https://` or trailing slash)
7. Click **Add**

## Important Notes

- Authorized domains are required for Firebase Authentication to work on your deployed sites
- Each Vercel preview deployment creates a new URL - you may need to add preview URLs as needed
- Production domains should always be added
- Localhost is automatically included for development

