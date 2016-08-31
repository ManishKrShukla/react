import React from 'react';


export default class UserDetails extends React.Component {
    render() {
        return (
            <span>
                {this.props.user.name}
            </span>
        );
    }
};