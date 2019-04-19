import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextFelid from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
    const  { values,handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Enter Personal Details" />
            <TextFelid
             hintText = "Enter Your Occupation"
             floatingLabelText = "Occupation"
             onChange={handleChange('occupation')}
              defaultValue={values.occupation}
            />
            <br />
            <TextFelid
             hintText = "Enter Your City"
             floatingLabelText = "City"
             onChange={handleChange('city')}
             defaultValue={values.city}
            />
            <br />
            <TextFelid
             hintText = "Enter Your Bio"
             floatingLabelText = "Bio"
             onChange={handleChange('bio')}
             defaultValue={values.bio}
            />
            <br />
            <RaisedButton 
             label="Continue" 
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

export default FormPersonalDetails
