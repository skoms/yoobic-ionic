# Yoobic Ionic

## Description

This Project was made as a hiring test for Yoobic, it is a cross platform application made with Ionic and Angular. This was both my first Angular and my first Ionic application ever, but definitely wont be the last. It has been a great learning experience, and I am happy I was introduced to these technologies. Both Ionic and Angular is way more equipped than technologies of my main stack(P.E.R.N.), and I definitely understand why both of these technologies are so popular.

## Base Technologies

- Ionic
- Angular
- HTML
- SCSS

## Getting the app started

1.  Clone the repo and open the folder

```
git clone https://github.com/skoms/yoobic-ionic.git && cd yoobic-ionic
```

2. Install dependencies

```
npm install
```

3. Run the application:
   - Web:
   ```
   npx ionic serve
   ```
   - Android: Make sure you have [Android Studio](https://developer.android.com/studio) configured and then run:
   ```
   npx ionic cap open android
   ```
   - Ios: **Has to be done on a Mac**: Make sure you have [Xcode](https://developer.apple.com/xcode/) configured and then run:
   ```
   npx ionic cap open ios
   ```

## Functional Parts:

### Pages:

- active-chats: List of active chats
- chat: A specific chat
- dashboard: The main 'home' page with tabs
- login: A simple login page, uses simple login regex and alphanumerical, 8+ regex: `/^[A-Za-z0-9]{8,}$/` for password
- mission-details: Details of a specific mission opened from the mission cards in the main missions feed
- missions: main tab of the dashboard and main feed for mission cards
- photos: Photo gallery with function to take pictures

### Components

- chat-preview: Component used in 'active-chats' to show the active chats in a list
- mission: mission card component

### Empty Placeholders

- notes (tab/page)
- request (tab/page)

### Services

- auth: Authentication Management (very basic)
- chat: Chat Related
- geo-location: Geo Location to get position and distance to a different position
- mission: Mission(s) Related
- photo: Camera and Photo Related
- storage: Storage related for saving and fetching from local storages
