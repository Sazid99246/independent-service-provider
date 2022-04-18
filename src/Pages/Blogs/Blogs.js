import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>
            <h2 className='text-center mt-2'>Blogs</h2>
            <div className='border border-primary p-2 mb-4'>
                <h3>Q1. Difference between `authorization` and `authentication`</h3>
                <p>Answer:
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sl. No.</th>
                                <th>Authentication</th>
                                <th>Authorization</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>'Authentication' is the process of verifying about someone's identity.</td>
                                <td>'Authorization' is the process of verifying about the applications, files and data of a user has access to.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>'Authentication' is worked through the password, email and any other login information the user gave.</td>
                                <td>'Authorization' is worked through the settings a organization provides to the user.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>'Authentication' is visible and may be changeable for the user.</td>
                                <td>Authorization is always unvisible and unchangable for the user.</td>
                            </tr>
                        </tbody>
                    </Table>
                </p>
            </div>
            <div className='border border-primary p-2 mb-4'>
                <h3>Why are you using `firebase`? What other options do you have to implement authentication?</h3>
                <p>I use firebase because it provides backened services, easy to use SDKs and ready made ui libraries to authenticate users. It has many powerful authentication systems like email verification, gmail, facebook, twitter, apple, microsoft etc. Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with custom backend.</p>
                <p>Some other options to implement authentication are: "Auth0", "Okta", "Amazon Cognito", "MongoDB", "Keycloak" etc.</p>
            </div>
            <div className='border border-primary p-2 mb-4'>
                <h3>What other services does `firebase` provide other than authentication?</h3>
                <p>The other services firebase provides are below:</p>
                <li>Cloud Firestore</li>
                <li>Cloud Functions</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Google Analytics</li>
                <li>Predictions</li>
                <li>Cloud Messagings</li>
                <li>Dynamic links</li>
                <li>Remote Config</li>
            </div>
        </Container>
    );
};

export default Blogs;