


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
        title: "Charts",
        path: "/Charts",
        icon: "BarChartIcon",
        subMenu: [
            {
                title: "Bar Charts",
                path: "/Charts/BarCharts",
                icon: "BarChartIcon"
            },
            {
                title: "Pie Charts",
                path: "/Charts/PieCharts",
                icon: "PieChartIcon"
            },
            {
                title: "Reports3",
                path: "/Charts/Reports3",
                icon: "BarChartIcon",
                subMenu: [
                    {
                        title: "Reports4",
                        path: "/Charts/Reports3/Reports4",
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
