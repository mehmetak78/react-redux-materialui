
/*
    Menu Data : Coming From topMenuData
    Menu Item Id :
        Each menu item has ".path" data which are used as unique identifier
        Each subMenu item's ".path" must start with the parent item's ".path".
    Icons :
        import all icons included in the menu data
        map from string to these imported components in "const menuIcons" in this file.
    Actions :
        implement actions in this.handleMenuClick
        ".path" is used for identifying the item clicked.
 */


import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import { withRouter } from 'react-router';

import {AppBar, Toolbar, IconButton, InputBase, Badge,
    MenuItem, Menu} from '@material-ui/core';


import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import MoreIcon from '@material-ui/icons/MoreVert';

import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from '@material-ui/icons/Settings';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

import topMenuData from "../data/TopMenuData";

import {setBagetContent, openMenu, closeMenu, setShowSubmenuItemsIcons} from "../redux/actions/actions.js";

import {connect} from "react-redux";
import styles from "../styles/TopMenuStyles";

const menuIcons = {
    "MailIcon": MailIcon,
    "NotificationsIcon": NotificationsIcon,
    "AccountCircleIcon": AccountCircleIcon,
    "SettingsIcon": SettingsIcon,
    "FaceIcon": FaceIcon,
    "DoneIcon": DoneIcon
};



class TopMenu extends React.Component {
    state = {
        anchorEl: null,
        isMobileMenuOpen: null,
    };

    componentWillMount = () => {
        const {history} = this.props;
        history.push("/Dashboard");
    };

    handleMenuOpen = (path,e) => {
        e.preventDefault();
        this.setState({ anchorEl: e.currentTarget });
        this.props.openMenu({menusOpen:{[path]: true}});
    };

    handleCloseMenu = () => {
        this.setState({ anchorEl: null, mobileMoreAnchorEl: null, isMobileMenuOpen:false });
        let tmpMenusOpen = {};
        topMenuData.forEach(item => {
            tmpMenusOpen[item.path] = false;
        });
        this.props.closeMenu(tmpMenusOpen);
        
        
    };

    handleMobileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget, isMobileMenuOpen:true });
    };

    handleDefaultClicked = (path, e) => {
        e.preventDefault();
        let messageCount = 1;
        const {badgetContent} = this.props.topMenu;

        if (badgetContent[path] !== "") {
            messageCount = parseInt(badgetContent[path])+1;
        }
        this.props.setBagetContent({[path]: messageCount.toString()});
    };

    setStateShowSubMenuItemsIcon = (path) => {
        const parentPath = path.substring(0,path.lastIndexOf("/"));
        const {showSubMenuItemsIcon} = this.props.topMenu;
        topMenuData.forEach(item => {
            if (item.path.startsWith(parentPath)) {
                    item.subMenu.forEach(subItem => {
                        if (item.multiSelect) {
                            if (subItem.path === path) {
                                showSubMenuItemsIcon[subItem.path] = !showSubMenuItemsIcon[subItem.path];
                            }
                        }
                        else {

                            showSubMenuItemsIcon[subItem.path] = subItem.path === path;
                        }
                    });

            }
        });
        this.props.setShowSubmenuItemsIcons(showSubMenuItemsIcon);
    };



    handleMenuClick = (item, e) => {
        e.preventDefault();
        const {handleToggleTheme, handleLogOut} = this.props;

        const {path} = item;
        if (item.subMenu) {
            this.handleMenuOpen(path, e);
        }
        else {
            switch (item.path) {
                case "/profileMenu/myAccount":
                    break;
                case "/Debug/ShowState":
                    this.setStateShowSubMenuItemsIcon(item.path);
                    console.log(this.state);
                    break;
                case "/profileMenu/logOut":
                    handleLogOut();
                    break;
                case "/settingsMenu/default":
                    this.setStateShowSubMenuItemsIcon(item.path);
                    handleToggleTheme("default");
                    break;
                case "/settingsMenu/light":
                    this.setStateShowSubMenuItemsIcon(item.path);
                    handleToggleTheme("light");
                    break;
                case "/settingsMenu/dark":
                    this.setStateShowSubMenuItemsIcon(item.path);
                    handleToggleTheme("dark");
                    break;
                default:
                    this.handleDefaultClicked(path, e);
                    break;
            }
            this.handleCloseMenu();
        }
    };

    renderSubMenu = (item) => {
        const { anchorEl } = this.state;
        const { classes } = this.props;
        const {showSubMenuItemsIcon} = this.props.topMenu;
        const menuOpen = this.props.topMenu.menusOpen[item.path];

        return (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                transformOrigin={{vertical: 'top', horizontal: 'center'}}
                open={menuOpen}
                onClose={this.handleCloseMenu}
            >
                {item.subMenu.map((subItem, index) => (
                    <MenuItem title={subItem.path} key={index} onClick={(e)=> this.handleMenuClick(subItem,e)}>
                        {showSubMenuItemsIcon[subItem.path]?subItem.icon?React.createElement(menuIcons[subItem.icon]):"":""}
                        <p className={classes.subMenuTitle}>{subItem.title}</p>
                    </MenuItem>))
                }
                </Menu>

        )
    };

    renderMobileMenu = () => {
        const {  anchorEl, isMobileMenuOpen } = this.state;
        const {badgetContent} = this.props.topMenu;

        const isMobileMenuOpenBool = Boolean(isMobileMenuOpen);
        return (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={isMobileMenuOpenBool}
                onClose={this.handleCloseMenu}
            >

                {topMenuData.map(item => (
                    <MenuItem key={item.path} onClick={(e)=> this.handleMenuClick(item,e)}>
                        <IconButton color="inherit" >
                            <Badge badgeContent={badgetContent[item.path]} color="secondary">
                                {React.createElement(menuIcons[item.icon])}
                            </Badge>
                        </IconButton>
                        <p>{item.title}</p>
                    </MenuItem>
                ))}
            </Menu>
        )
    };

    render() {
        const { classes, toggleDrawer } = this.props;
        const {badgetContent} = this.props.topMenu;

        return (
            <div className={classes.root}>
                <AppBar position="absolute" className={classNames(classes.appBar)}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" onClick={toggleDrawer}>
                            <MenuIcon />
                        </IconButton>

                       {/* <IconMehmet />*/}

                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>

                        <div className={classes.sectionDesktop}>
                            {topMenuData.map(item => (
                                <Fragment key={item.path}>
                                    <IconButton color="inherit" onClick={(e)=> this.handleMenuClick(item,e)}>
                                        <Badge badgeContent={badgetContent[item.path]} color="secondary">
                                            {React.createElement(menuIcons[item.icon])}
                                        </Badge>
                                    </IconButton>
                                    {item.subMenu? this.renderSubMenu(item): ""}
                                </Fragment>
                            ))}

                        </div>

                        <div className={classes.sectionMobile}>
                            <IconButton  onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreIcon />
                            </IconButton>
                            {this.renderMobileMenu()}
                        </div>


                    </Toolbar>
                </AppBar>


            </div>
        );
    }
}

TopMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(reduxState) {
    return {
        topMenu: reduxState.layout.topMenu
    }
}

function mapDispatchToProps() {
    return {setBagetContent, openMenu, closeMenu, setShowSubmenuItemsIcons}
}

export default connect(mapStateToProps, mapDispatchToProps())(withRouter(withStyles(styles)(TopMenu)));

