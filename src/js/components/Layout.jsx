import React from 'react';
import {connect} from 'react-redux';
import Header from './Header'
import Footer from './Footer'
import  {fetchUsers} from '../actions/users';
import  UserDetails from '../UserDetails';

@connect((store) => {
    return {
        users: store.users
    }
})

export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchUsers())
    }
  
    render() {
        const userList = this.props.users.map((user) => <li key={user.id}>{user.name} -- {user.address}</li>);

        return ( 
            <div>
                <Header />
                    <h2> Here is a list of our users </h2>
                    <ul>
                        {}
                    </ul>
                <Footer />
            </div>
        );
    }
}