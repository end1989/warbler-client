import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComponentTobeRendered) {
    class Authenticate extends Component {
        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.props.history.push("/signin");
            }
        }
        componentWillUpdate() {
            if (!this.props.isAuthenticated) {
                this.props.history.push("/signin");
            }
        }
        render() {
            return <ComponentTobeRendered {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.currentUser.isAuthenticated
        };
    }
    return connect(mapStateToProps)(Authenticate);
}
