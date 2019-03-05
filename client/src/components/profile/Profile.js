import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfileByHandle } from "../../actions/profileActions";
import Loading from "../common/Loading";
import ProfileContent from "./ProfileContent";
import Navbar from "../layout/Navbar";
import { Header } from "../common/styles/Header";
import Reviews from "../reviews/Reviews";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push("/not-found");
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Loading />;
    } else {
      profileContent = (
        <div className="container">
          <div className="row">
            <Header>{profile.handle}'s Profile</Header>
            <div className="col-md-6">
              <ProfileContent profile={profile} auth={this.props.auth} />
            </div>
            <div className="col-md-6">
              <Reviews currentProfile={profile} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <>
        <Navbar />
        <div className="entry">{profileContent}</div>
      </>
    );
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
