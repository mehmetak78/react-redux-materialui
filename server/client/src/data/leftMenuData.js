


const leftMenuData = [
    {
        title: "Dashboard",
        path: "/Dashboard",
        icon: "DashboardIcon",
    },
    {
        title: "Orders",
        path: "/Orders",
        icon: "ShoppingCartIcon"
    },
    {
        title: "Products",
        path: "/Products",
        icon: "LibraryBooksIcon"
    },
    {
        title: "Reports",
        path: "/Reports",
        icon: "BarChartIcon",
        subMenu: [
            {
                title: "Reports1",
                path: "/Reports/Reports1",
                icon: "BarChartIcon"
            },
            {
                title: "Reports2",
                path: "/Reports/Reports2",
                icon: "BarChartIcon"
            },
            {
                title: "Reports3",
                path: "/Reports/Reports3",
                icon: "BarChartIcon",
                subMenu: [
                    {
                        title: "Reports4",
                        path: "/Reports/Reports3/Reports4",
                        icon: "BarChartIcon"
                    }
                ]
            }
        ]
    },
    {
        title: "Integrations",
        path: "/Integrations",
        icon: "LayersIcon"
    },
    {
        title: "Customers",
        path: "/Customers",
        icon: "PeopleIcon"
    },
    {
        title: "Drafts",
        path: "/Drafts",
        icon: "DraftsIcon",
        subMenu: [
            {
                title: "Drafts1",
                path: "/Drafts/Drafts1",
                icon: "DraftsIcon"
            }
            ]
    }
];

export default leftMenuData;
