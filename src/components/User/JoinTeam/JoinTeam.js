import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './JoinTeam.css';
import Logo from '../../../images/PW-hor-logo.png';
// import placeholder image
import Placeholder from '../../../images/placeholder-square.png';
// import material ui
import { Button, Typography, InputLabel, MenuItem, Select, FormControl } from '@material-ui/core';
// import sweetalert
import swal from 'sweetalert';


class JoinTeam extends Component {
  state = {
    selected_team_id: '',
  };

  // Need on load after register to send users contest id to server
  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () => {
    await this.props.dispatch({type: 'FETCH_CAPTAINS_FOR_JOIN'});
    await this.props.dispatch({type: 'FETCH_TEAMS_FOR_JOIN'});
  }

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  // Function sends team id to server to update users teams_id in database a.k.a adds user to a team
  // with sweet alert validation. 
  joinTeam = () => {
    if(this.state.selected_team_id === ''){
      swal(`Please select a team to join`)
    }
    else{
      swal({
        title: "Is the selected team correct?",
        icon: "info",
        buttons: {
          cancel: "No",
          yes: true,
        }
      }).then(isCorrect => {
        if(isCorrect){
          this.props.dispatch({
            type: 'JOIN_TEAM',
            payload: {
              selected_team_id: this.state.selected_team_id,
              user_id: this.props.store.user.id
            }
          });
          swal({
            title: "You've successfully joined a team!'",
            icon: "success"
          }).then(() => {
            this.props.history.push('/home');
          })
        };
      });
    };
  };

  render() {
    return (
      <div>
        <div className='createPageLogoDiv'>
          <img className='createPageLogo' src= {Logo}/>
        </div>

        <div className='teamForm'>
        <center>
          <Typography variant='h5'>Join a Team</Typography>
          
            <div className='createTeamName'>
              <FormControl>
                <InputLabel style={{paddingLeft:14}}>
                  Select team by name or captain
                </InputLabel> 
                <Select value={this.state.selected_team_id} 
                  variant='outlined' 
                  style={{width:300}} 
                  onChange={this.handleInputChangeFor('selected_team_id')}>
                  {this.props.store.teams.map((team, i) => 
                  <MenuItem key={i} value={team.teams_id}>{team.name}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </div>
          <div className='joinTeamImageDiv'>
            <img className='joinTeamImage' src= { Placeholder } />
          </div>
            <Button variant='contained' 
              color='primary'
              style={{marginTop: '2rem'}} 
              size= 'large'
              onClick={this.joinTeam}>
              Join Team
            </Button>
          </center>
        </div>
        <div className='createTeamfooter'>
            <button
              type="button"
              className="btn btn_asLink"
              onClick={() => {this.props.history.push('/createorjointeam')}}>
              Go Back
            </button>
            <button
              type="button"
              className="btn btn_asLink"
              onClick={() => {this.props.history.push('/createteam')}}>
              Create Team
            </button>
            <button
              type="button"
              className="btn btn_asLink"
              onClick={() => this.props.dispatch({ type: 'LOGOUT' })}>
              Log Out
            </button>
          </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(JoinTeam);