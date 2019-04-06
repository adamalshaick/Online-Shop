import React from "react";
import PropTypes from "prop-types";
import AddReview from "../reviews/AddReview";
import { connect } from "react-redux";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const ProfileContent = ({ user, auth }) => {
  return (
    <>
      <div className="text-center">
        <div className="mt-3">
          <TableRow>
            <TableCell>
              <strong>User's Name</strong>
            </TableCell>
            <TableCell align="center">{user.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>User's Location</strong>
            </TableCell>
            <TableCell align="center">{user.location}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>User's Bio</strong>
            </TableCell>
            <TableCell align="center">{user.bio}</TableCell>
          </TableRow>
        </div>
      </div>
      {user._id === auth.user.id ? null : <AddReview user={user} />}
    </>
  );
};

ProfileContent.propTypes = {
  user: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(ProfileContent);
