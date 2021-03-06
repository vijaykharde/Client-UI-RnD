import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/core/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { PropTypes } from 'prop-types';

const drawerWidth = 200;
const styles = theme => ({
    search: {
        position: 'relative',
        marginLeft: 0,
        width: '100%',
        borderRadius: 2,
        border: 2
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    }
});

export class AppBarDrawer extends Component {
    /*static propTypes = {
        ibCurve: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };*/

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            currList: { USD: false, CAD: false, EUR: false, AUD: false, JPY: false, CNY: false, CHF: false }
        };
    }

    toggleDrawer = ope => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'shift')) {
            return;
        }
        this.setState({ open: ope })
    };

    searchData = selectedItems => {
        selectedItems.forEach(cur => {
            //this.props.actions.getCurrencyData({ currency: cur });
        });
    }

    handleChange = event => {
        let obj = { ...this.state.currList };
        obj[event.target.name] = event.target.checked;
        this.setState({ currList: obj });
        if (!(event.target.name in this.props.ibcurve.data) && event.target.checked) {
            this.props.actions.getCurrencyData({ currency: event.target.name });
        }
        this.props.actions.updateCurrencyList(obj);
    };

    render() {
        const { classes } = this.props;
        //console.log(classes);
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="open drawer" onClick={this.toggleDrawer(true)} edge="start"><MenuIcon/></IconButton>
                        <Typography variant="h6" noWrap>UBS WIP</Typography>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.open} onClose={this.toggleDrawer(false)}>
                    <FormGroup>
                        <List>
                            {
                                Object.keys(this.state.currList).map(item => {
                                    return (
                                        <ListItem key={item}>
                                            <FormControlLabel control={
                                                <Checkbox checked={this.state.currList[item]} onChange={this.handleChange} name={item} color="primary"></Checkbox>
                                            } label={item}>
                                            </FormControlLabel>
                                        </ListItem>
                                        );
                                })
                            }
                        </List>
                    </FormGroup>
                </Drawer>
            </div>
            );
    };
}

function mapStateToProps(state) {
    return {
        ibcurve: state.ibcurve
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...actions }, dispatch)
    };
}
AppBarDrawer.propTypes = {
    classes: PropTypes.object.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AppBarDrawer));