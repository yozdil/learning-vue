import { createApp } from "vue";

import App from "./App";
import ActiveUser from "./components/ActiveUser";
import UserData from "./components/UserData";

const app = createApp(App);

app.component(ActiveUser);
app.component(UserData);
app.mount("#app");

// Task 1: Add two components to the app:



// Task 2: Output both components side-by-side in your main App template

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component
