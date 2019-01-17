import React, { Component } from "react";
import { connect } from "react-redux";
import HostProfile from "./HostProfile";
import AnimalList from "../AnimalList";
import { Header, Container } from "semantic-ui-react";
import { getAnimals, updateHost } from "../../ActionCreators";

class HostProfileView extends Component {
  componentWillMount = () => {
    this.props.getAnimals();
  };

  render() {
    return (
      <Container style={{backgroundColor:"pink"}}>
        <div style={{}}>
          {this.props.canEdit && (
            <Header textAlign="center">Welcome {this.props.host.name}</Header>
            )}
        </div>
        <div style={{ float: "left", width: "fit-content" }}>
          <HostProfile
            host={this.props.host}
            shelter={this.props.shelter}
            canEdit={this.props.canEdit}
            canApproveNewHost={this.props.canApproveNewHost}
            updateHost={this.props.updateHost}
            />
        </div>
        <div style={{ float: "left" }}>
          <Header>{this.props.host.name}'s current foster animals</Header>
          <AnimalList animals={ this.props.hostAnimals } />
          {this.props.canEdit && (
            <div>
              <Header>Animals in need of a foster home</Header>
              <AnimalList animals={this.props.animals} filter={{ status: "need-foster" }} />
            </div>
          )}
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state, props) => {
  const loggedInUser = state.auth.user;
  const hostId = props.match.params.id;
  let host = {};
  let shelter = {};
  if (loggedInUser.type === "shelter") {
    host = state.hosts.find(host => host._id === hostId);
    shelter = state.shelters.find(
      shelter => shelter._id === (host.shelterId && host.shelterId._id)
    );
  }
  if (loggedInUser.type === "host") {
    host = state.hosts.find(host => host._id === hostId) || loggedInUser.data;
    shelter = host.shelterId;
  }
  const animals = state.animals;
  const hostAnimals = state.animals.filter(animal => (animal.hostId && animal.hostId._id) === host._id)
  const canEdit = loggedInUser.data._id === hostId;
  const canApproveNewHost =
    !host.approved && shelter && loggedInUser.data._id === shelter._id
      ? true
      : false;

  return {
    host: host,
    shelter: shelter,
    canEdit: canEdit,
    canApproveNewHost,
    animals,
    hostAnimals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateHost: hostData => dispatch(updateHost(hostData)),
    getAnimals: () => dispatch(getAnimals())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostProfileView);
