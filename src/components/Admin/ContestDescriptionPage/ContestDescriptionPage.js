import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import AllChallengePhotos from '../../User/AllChallengePhotos/AllChallengePhotos';

class ContestDescriptionPage extends Component {
  state = {
    images: [
      {
        avatar: 'https://avatars1.githubusercontent.com/u/65906860?s=460&u=40b78eaf27468b6e20afc655a916e2b651bf1cfe&v=4',
        image:'https://www.abc.net.au/cm/rimage/12172884-3x4-xlarge.jpg?v=4', 
        teamName: 'Kickin Chickens',
        name: 'Kermit',
        challengeTitle: 'Sloths'
      },
      {
        avatar: 'https://avatars1.githubusercontent.com/u/67034482?s=400&u=1623bbf91704fc5fc444fb013324a0ab9faf0ed3&v=4',
        image: 'https://news.uchicago.edu/sites/default/files/images/2019-06/sloth_family_tree.jpg', 
        name: 'Deadly',
        teamName: 'Kickin Chickens',
        challengeTitle: 'Things that are cute'
      },
      {
        avatar: 'https://avatars3.githubusercontent.com/u/65255337?s=400&u=813c5093318f0235870d08ecbd15ccb61a3aa5f7&v=4',
        image: 'https://static01.nyt.com/images/2014/01/28/science/28SLOT_SPAN/28SLOT-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
        name: 'Gonzo',
        teamName: 'Kickin Chickens',
        challengeTitle: 'Things that are slow'
      }
    ]
  };

  render() {
    return (
      <div>
        <h2>Contest Name</h2>
          <table style={{width: "300px"}}>
            <tr>
              <th>Team Name</th>
              <th>Team Captain</th>
            </tr>
            <tr>
              <td>Team Name</td>
              <td>Name</td>
            </tr>
            <tr>
              <td>Team Name</td>
              <td>Name</td>
            </tr>
            <tr>
              <td>Team Name</td>
              <td>Name</td>
            </tr>
            <tr>
              <td>Team Name</td>
              <td>Name</td>
            </tr>
            <tr>
              <td>Team Name</td>
              <td>Name</td>
            </tr>
            <tr>
              <td>Team Name</td>
              <td>Name</td>
            </tr>
            <tr>
              <td>Team Name</td>
              <td>Name</td>
            </tr>
            <tr>
              <td>Team Name</td>
              <td>Name</td>
            </tr>
          </table>
            <a href="/csv">Export Contest To CSV</a>
            <button>Close Contest</button>
          <br></br>
        <h2>Contest Images</h2>
          <ul style={{ listStyleType: "none", display: "inline-flex", flexDirection: "row", overflow: "scroll"}}>
            {this.state.images.map(sloths => 
              <li><img style={{height: "10em", width: "auto"}} src={sloths.image}/><p><img style={{height: "50px"}} src={sloths.avatar}/></p><div style={{display: "flex", flexDirection: "column"}}><p>{sloths.name}</p><p>{sloths.teamName}</p><p>{sloths.challengeTitle}</p></div><button>Delete</button></li>
            )}
          </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ContestDescriptionPage);