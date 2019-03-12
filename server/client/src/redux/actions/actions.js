import {OPEN_LOGIN_PAGE,CLOSE_LOGIN_PAGE,LOGIN_USER, LOGOUT_USER} from "./actionTypes";
import {TOGGLE_DRAWER, TOGGLE_THEME} from "./actionTypes";
import {INIT_TOP_MENU, SET_BADGET_CONTENT, OPEN_MENU, CLOSE_MENU, SET_SHOW_SUBMENU_ITEMSICONS} from "./actionTypes";
import {SET_LEFT_MENU} from "./actionTypes";
import leftMenuData from "../../data/leftMenuData";
import topMenuData from "../../data/topMenuData";


let leftMenuCollapsed = {};
let topMenuState = {};

const appInitTopMenu = () => {
    let tmpBadgetContent = {};
    let tmpMenusOpen = {};
    let tmpShowSubMenuItemsIcon = {};
    topMenuData.forEach(item => {
        tmpBadgetContent[item.path] = "";
        tmpMenusOpen[item.path] = false;
        if (item.subMenu) {
            item.subMenu.forEach(subItem => {
                tmpShowSubMenuItemsIcon[subItem.path] = subItem.showIcon;
            })
        }
    });
    topMenuState = {badgetContent:tmpBadgetContent, menusOpen:tmpMenusOpen, showSubMenuItemsIcon:tmpShowSubMenuItemsIcon}
};

const appInitLeftMenu = () => {
    initCollapsedRcrsv(leftMenuData);
};

const initCollapsedRcrsv = (menuItems) => {
    menuItems.forEach(item => {
        if (Array.isArray(item.subMenu)) {
            leftMenuCollapsed = {...leftMenuCollapsed,[item.path]:false};
            initCollapsedRcrsv(item.subMenu);
        }
    })
};

export const initApp = () => dispatch =>
{
    //const res = await axios.get("/api/current_user");

};


// User Actions
export const openLoginPage = () =>dispatch => {
    dispatch({type: OPEN_LOGIN_PAGE, payload: ""});
};
export const closeLoginPage = () =>dispatch => {
    dispatch({type: CLOSE_LOGIN_PAGE, payload: ""});
};

export const logoutUser = (history) =>dispatch => {
        //localStorage.removeItem("jwtToken");
        //setAuthorizationToken(false);
        dispatch({type: LOGOUT_USER, payload: ""});
};
export const loginUser = (history) =>dispatch => {
    appInitTopMenu();
    appInitLeftMenu();
    dispatch({type: SET_LEFT_MENU, payload: leftMenuCollapsed});
    dispatch({type: INIT_TOP_MENU, payload: topMenuState});
    //localStorage.removeItem("jwtToken");
    const userData = {
        isAuthenticatied: true,
        userId: 1,
        userName: "Mehmet Ak"
    };
    //setAuthorizationToken(false);
    dispatch({type: LOGIN_USER, payload: userData});

};


// Layout Actions

// MAIN PAGE
export const toggleDrawer = () =>dispatch => {
    dispatch({type: TOGGLE_DRAWER, payload: ""});
};
export const toggleTheme = (theme) =>dispatch => {
    dispatch({type: TOGGLE_THEME, payload: theme});
};

//TOP MENU
export const setBagetContent = (badgetContent) =>dispatch => {
    dispatch({type: SET_BADGET_CONTENT, payload: badgetContent});
};
export const openMenu = (menusOpen) =>dispatch => {
    dispatch({type: OPEN_MENU, payload: menusOpen});
};
export const closeMenu = (menusOpen) =>dispatch => {
    dispatch({type: CLOSE_MENU, payload: menusOpen});
};
export const setShowSubmenuItemsIcons = (showSubMenuIcons) =>dispatch => {
    dispatch({type: SET_SHOW_SUBMENU_ITEMSICONS, payload: showSubMenuIcons});
};

//LEFT_MENU
export const setLeftMenu = (leftMenuCollapsed) =>dispatch => {
    dispatch({type: SET_LEFT_MENU, payload: leftMenuCollapsed});
};

