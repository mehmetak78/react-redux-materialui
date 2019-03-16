
/*
    Menu Data : Coming From leftMenuData
    Menu Item Id :
        Each menu item has ".path" data which are used as unique identifier
        Each subMenu item's ".path" must start with the parent item's ".path".
    Icons :
        import all icons included in the menu data
        map from string to these imported components in "const menuIcons" in this file.
    Actions :
        implement actions in "MiddlePage.js" by routing according to the item's "path"
 */




import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {List, ListItem, ListItemText, Collapse, Drawer} from '@material-ui/core';


import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';



import { NavLink } from "react-router-dom";

import leftMenuData from "../data/leftMenuData";
import classNames from "classnames";


import DashboardIcon from "@material-ui/icons/Dashboard";
import DraftsIcon from "@material-ui/icons/Drafts";
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
import BarChartIcon from "@material-ui/icons/BarChart";
import PieChartIcon from "@material-ui/icons/PieChart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import {connect} from "react-redux";
import {setLeftMenu} from "../redux/actions/actions.js";

import styles from "../styles/LeftMenuStyles";


const menuIcons = {
    "DashboardIcon": DashboardIcon,
    "DraftsIcon": DraftsIcon,
    "PeopleIcon": PeopleIcon,
    "LayersIcon": LayersIcon,
    "BarChartIcon": BarChartIcon,
    "PieChartIcon": PieChartIcon,
    "ShoppingCartIcon": ShoppingCartIcon,
    "LibraryBooksIcon": LibraryBooksIcon
};



class LeftMenu extends React.Component {

    nestedStyle = (depth) => {
        depth = depth ? depth*15 : 15;
        return {
            paddingLeft: `${depth}px`
        }
    };

    handleClick = (item,e) => {
        e.preventDefault();
           this.props.setLeftMenu({...this.props.leftMenu.collapsed,[item.path]:!this.props.leftMenu.collapsed[item.path]});
    };

    renderMenuItem = (item, depth) => {
        const {classes, menuOpened} = this.props;

        let path = item.path;
        let prevCollapsed = true;

        let isCollapsed = this.props.leftMenu.collapsed[path];

        depth = depth * menuOpened;

        Object.keys(this.props.leftMenu.collapsed).forEach(key => {
            if (item.path.startsWith(key+"/")) {
                prevCollapsed = prevCollapsed && this.props.leftMenu.collapsed[key]
            }
        });

        if (item.subMenu) {
            return (
                <Collapse in={prevCollapsed} timeout="auto" unmountOnExit key={item.path} >
                    <NavLink to={"#"} className={classes.navlink} onClick={(e) => this.handleClick(item,e)} >
                        <ListItem button style={this.nestedStyle(depth)}>
                            {React.createElement(menuIcons[item.icon],{color:"primary"})}
                            <ListItemText  inset primary={item.title}/>
                            {isCollapsed ? <ExpandLess color={"primary"}/> : <ExpandMore color={"primary"}/>}
                        </ListItem>
                    </NavLink>
                </Collapse>
            )
        }
        else {
            return (
                <Collapse in={prevCollapsed} timeout="auto" unmountOnExit key={item.path}>
                    <NavLink to={item.path} className={classes.navlink}>
                        <ListItem button style={this.nestedStyle(depth)}>
                            {React.createElement(menuIcons[item.icon],{color:"primary"})}
                            <ListItemText inset primary={item.title}/>
                        </ListItem>
                    </NavLink>
                </Collapse>
            )
        }
    };

    renderMenuRcrsv = (menuItems, depth) => {
        menuItems.forEach(item => {
            if (Array.isArray(item.subMenu)) {
                this.leftMenuData.push(
                    this.renderMenuItem(item, depth)
                );

                this.renderMenuRcrsv(item.subMenu, depth + 1);
            }
            else {
                this.leftMenuData.push(
                    this.renderMenuItem(item, depth)
                );
            }
        })
    };

    renderMenu = (menuItems) => {
        this.leftMenuData= [];
        this.renderMenuRcrsv(menuItems, 1);
        return this.leftMenuData;
    };

    render() {
        const { classes, menuOpened } = this.props;
        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !menuOpened && classes.drawerPaperClose),
                }}
                open={menuOpened}
            >
                <List component="nav">
                    <div className={classes.appBarSpacer} />
                    {this.renderMenu(leftMenuData)}
                </List>
            </Drawer>
        );
    }
}

LeftMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(reduxState) {
    return {
        leftMenu: reduxState.layout.leftMenu
    }
}

function mapDispatchToProps() {
    return {setLeftMenu}
}

export default connect(mapStateToProps, mapDispatchToProps())(withStyles(styles)(LeftMenu));

