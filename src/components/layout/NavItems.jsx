/** @format */

import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {signOut} from "../../actions/authActions";

const NavItems = ({signOut, uid}) => {
	if (uid) {
		return (
			<Link to="/login" className="nav-link" onClick={signOut}>
				Logout
			</Link>
		);
	} else {
		return (
			<>
				<Link to="/register" className="nav-link">
					Register
				</Link>
				<Link to="/login" className="nav-link">
					Login
				</Link>
			</>
		);
	}
};

const mapStateToProps = (state) => {
	const uid = state.firebase.auth.uid;
	return {
		uid: uid,
	};
};

const mapDistpatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut()),
	};
};

export default connect(mapStateToProps, mapDistpatchToProps)(NavItems);
