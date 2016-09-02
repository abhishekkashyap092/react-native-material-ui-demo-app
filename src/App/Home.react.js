import React, { Component, PropTypes } from 'react';

import routes from '../routes';

import Container from '../Container';
// components
import { ListItem, Divider } from '../react-native-material-ui/src';

const propTypes = {
    navigator: PropTypes.object.isRequired,
};

class Home extends Component {
    render() {
        return (
            <Container>
                <ListItem
                    centerElement="Avatars"
                    onPress={() => this.props.navigator.push(routes.avatar)}
                />
                <Divider />
                <ListItem
                    centerElement="List items"
                    onPress={() => this.props.navigator.push(routes.list)}
                />
                <Divider />
            </Container>
        );
    }
}

Home.propTypes = propTypes;

export default Home;