// Service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction.

// When a push event occurs,
//it extracts the notification data from the event and shows a notification using self.registration.showNotification().
self.addEventListener("push", (event) => {

    const notif = event.data.json().notification;

    event.waitUntil(self.registration.showNotification(notif.title , {
        body: notif.body,
        icon: notif.image,
        data: {
            url: notif.click_action
        }
    }));

});

self.addEventListener("notificationclick", (event) => {

    event.waitUntil(clients.openWindow(event.notification.data.url));

});

