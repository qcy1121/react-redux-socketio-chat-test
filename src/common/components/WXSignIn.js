import React from 'react';
import { Button } from 'react-bootstrap';

const WXSignIn = (props) => {
    return (
        <section style={{justifyContent: 'center', display: 'flex'}}>
            <a style={{margin: 'auto', width: '20em', height: '3.5em'}} href="/api/auth/wechat">
                <Button
                    bsStyle="primary"
                    style={{margin: 'auto', width: '20em', height: '3.5em'}}
                >
                    <p style={{margin: '0', padding: '0', fontSize: '1.5em'}}>
                        <i className="fa fa-wechat" style={{marginRight: '1em'}}></i>
                        Sign In With weChat</p>
                </Button>
            </a>
        </section>
    );
}

export default WXSignIn;
