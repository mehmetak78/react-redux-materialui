import { TOGGLE_DRAWER, TOGGLE_THEME} from "../actions/actionTypes";
import {INIT_TOP_MENU,SET_BADGET_CONTENT,OPEN_MENU, CLOSE_MENU, SET_SHOW_SUBMENU_ITEMSICONS} from "../actions/actionTypes";
import {SET_LEFT_MENU} from "../actions/actionTypes";

const initialState = {
    mainPage: {
        menuOpened: true,
        themeSettings: {
            appTheme: "default",
            appFontSize: 12,
            appPrimary: {
                main: '#2e7d32',
            },
            appSecondary: {
                main: '#388e3c',
            },
        }
    },
    topMenu: {
        badgetContent: {},
        menusOpen: {},
        showSubMenuItemsIcon: {}
    },
    leftMenu: {
        collapsed: {},
    }
};

export default function(state=initialState, action) {
    switch(action.type) {
        case TOGGLE_DRAWER:
            return {...state,mainPage:{...state.mainPage,menuOpened: !state.mainPage.menuOpened}};
        case TOGGLE_THEME:
            return {...state,mainPage:{...state.mainPage,themeSettings:{...state.mainPage.themeSettings, appTheme: action.payload}}};
        case INIT_TOP_MENU:
            return {...state,topMenu:{...state.topMenu,
                    badgetContent:action.payload.badgetContent,
                    menusOpen:action.payload.menusOpen,
                    showSubMenuItemsIcon:action.payload.showSubMenuItemsIcon
            }};
        case SET_BADGET_CONTENT:
            return {...state,topMenu:{...state.topMenu,badgetContent:{...state.topMenu.badgetContent,...action.payload}}};
        case OPEN_MENU:
            return {...state,topMenu:{...state.topMenu,
                    menusOpen:{...state.topMenu.menusOpen,...action.payload.menusOpen}}
            };
        case CLOSE_MENU:
            return {...state,topMenu:{...state.topMenu,
                    menusOpen:{...state.topMenu.menusOpen,...action.payload}}
            };
        case SET_SHOW_SUBMENU_ITEMSICONS:
            return {...state,topMenu:{...state.topMenu,showSubMenuItemsIcon:{...state.topMenu.showSubMenuItemsIcon,...action.payload}}};
        case SET_LEFT_MENU:
            return {...state,leftMenu:{...state.leftMenu,collapsed:{...state.collapsed,...action.payload}}};
        default:
            return state;
    }
}