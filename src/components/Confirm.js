import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        // submit the form here to backend and continue to success page
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
    const  { values } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Enter User Details" />
            <List>
                <ListItem 
                 primaryText="First Name"
                 secondaryText={values.firstName}
                />
                <ListItem 
                 primaryText="Last Name"
                 secondaryText={values.lastName}
                />
                <ListItem 
                 primaryText="Email"
                 secondaryText={values.email}
                />
                <ListItem 
                 primaryText="Occupation"
                 secondaryText={values.occupation}
                />
                <ListItem 
                 primaryText="City"
                 secondaryText={values.city}
                />
                <ListItem 
                 primaryText="Bio"
                 secondaryText={values.bio}
                />
            </List>
                <br />
                <RaisedButton 
                label="Confirm & Continue" 
                primary={true}
                style={styles.button}
                onClick={this.continue}
                />
                <RaisedButton 
                label="Back" 
                primary={false}
                style={styles.button}
                onClick={this.back}
                />
        </React.Fragment>
      </MuiThemeProvider>
    )
    }
}

const styles = {
    button: {
        margin : 15
    }
}

export default FormUserDetails
