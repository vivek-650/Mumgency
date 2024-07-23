function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4000)
}

loaderAnimation()
window.botpressWebChat.init({
    "composerPlaceholder": "Do you have any quries",
    "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
    "botId": "634c1a16-aa17-4eee-a177-9ebddbb5821b",
    "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
    "messagingUrl": "https://messaging.botpress.cloud",
    "clientId": "634c1a16-aa17-4eee-a177-9ebddbb5821b",
    "webhookId": "6551d009-e866-45d6-81e1-3f6ef686ace3",
    "lazySocket": true,
    "themeName": "prism",
    "stylesheet": "https://webchat-styler-css.botpress.app/prod/49378f4f-46c1-4af1-91b7-609ca699d9a7/v45655/style.css",
    "frontendVersion": "v1",
    "showPoweredBy": false,
    "theme": "prism",
    "themeColor": "#2563eb",
    "allowedOrigins": []
});