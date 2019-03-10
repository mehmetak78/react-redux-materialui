

const topMenuData = [
    {
        title: "Debug",
        path: "/Debug",
        icon: "FaceIcon",
        multiSelect: true,
        subMenu: [
            {
                title: "console.log(this.state)",
                path: "/Debug/ShowState",
                icon: "DoneIcon",
                showIcon: true
            }
        ]
    },
    {
        title: "Messages",
        path: "/messageMenu",
        icon: "MailIcon",
    },
    {
        title: "Notifications",
        path: "/notificationsMenu",
        icon: "NotificationsIcon",
    },
    {
        title: "Settings",
        path: "/settingsMenu",
        icon: "SettingsIcon",
        multiSelect: false,
        subMenu: [
            {
                title: "Default Theme",
                path: "/settingsMenu/default",
                icon: "DoneIcon",
                showIcon: true
            },
            {
                title: "Light Theme",
                path: "/settingsMenu/light",
                icon: "DoneIcon",
                showIcon: false
            },
            {
                title: "Dark Theme",
                path: "/settingsMenu/dark",
                icon: "DoneIcon",
                showIcon: false
            },
        ]
    },
    {
        title: "Profile",
        path: "/profileMenu",
        icon: "AccountCircleIcon",
        subMenu: [
            {
                title: "My Account",
                path: "/profileMenu/myAccount",
            },
            {
                title: "Logout",
                path: "/profileMenu/logOut",
            },
        ]
    }
];

export default topMenuData;
