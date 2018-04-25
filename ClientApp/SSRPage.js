import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SSRPage extends Component {

    componentDidMount() {
        console.log("SSRPage:ComponentDidMount");
    }


    render() {
        return (
            <span><b>This is my SSR Page!</b></span>
        );
    }
}

SSRPage.propTypes = {};
SSRPage.defaultProps = {};

export default SSRPage;
