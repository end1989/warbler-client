import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";
// import message from "../store/reducers/messages";

class MessageList extends Component {
    componentWillMount() {
        this.props.fetchMessages();
    }
    render() {
        const { messages } = this.props;
        let messageList = messages.map(m => (
            <MessageItem
                key={m._id}
                date={m.createdAt}
                text={m.text}
                username={m.user.username}
                profileImage={m.user.profileImage}
            />
        ));
        return messageList;
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}

export default connect(
    mapStateToProps,
    { fetchMessages }
)(MessageList);
