import { Amplify, Auth } from 'aws-amplify';



//first userpool => active-tv-web
// Amplify.configure({

//     Auth: {
//         // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
//         identityPoolId:"activetvwebapp16baf347_identitypool_16baf347__dev" ,//"us-east-2:8d0c89ea-1ab0-43b5-aaa8-0882c055a031", //'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
        
//         // REQUIRED - Amazon Cognito Region
//         region: 'us-east-2',

//         // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
//         // Required only if it's different from Amazon Cognito Region
//         identityPoolRegion:  'us-east-2',

//         // OPTIONAL - Amazon Cognito User Pool ID
//         userPoolId:    'us-east-2_jGv4x7t1b',                //'XX-XXXX-X_abcd1234',

//         // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
//         userPoolWebClientId: '5srg77q19ue9ails59lnkkert7', //'active38fde85b_app_clientWeb', //'4g2oc7praeobt637599bqdm6hh' 

//         // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
//         mandatorySignIn: false,

//         // OPTIONAL - Configuration for cookie storage
//         // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
//         cookieStorage: {
//         // REQUIRED - Cookie domain (only required if cookieStorage is provided)
//             domain:  'https://activetvwebapp16baf347-16baf347-dev.auth.us-east-2.amazoncognito.com',//'.yourdomain.com',
//         // OPTIONAL - Cookie path
//             path: '/',
//         // OPTIONAL - Cookie expiration in days
//             expires: 365,
//         // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
//             // sameSite: "strict" | "lax",
//         // OPTIONAL - Cookie secure flag
//         // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
//             secure: true
//         },

//         // OPTIONAL - customized storage object
//         // storage: MyStorage,
        
//         // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
//         authenticationFlowType: 'USER_PASSWORD_AUTH',

//         // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
//         clientMetadata: { myCustomKey: 'myCustomValue' },

//          // OPTIONAL - Hosted UI configuration
//         oauth: {
//             domain: 'https://activetvwebapp16baf347-16baf347-dev.auth.us-east-2.amazoncognito.com', //'your_cognito_domain',
//             scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
//             redirectSignIn: 'https://www.activetvonline.co.za/',          //'http://localhost:3000/',
//             redirectSignOut: 'https://www.activetvonline.co.za/signout/',    //'http://localhost:3000/signup',
//             responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
//         }
//     }
// });

// You can get the current config object
//  const currentConfig = Auth.configure();

const BREAKPOINT = 'this is a line break' //this is a test

//second userpool=> test-Conformation-userpool

Amplify.configure({

    Auth: {
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId:"testConformationIdentity" ,//"us-east-2:8d0c89ea-1ab0-43b5-aaa8-0882c055a031", //'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
        
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion:  'us-east-2',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId:    'us-east-2_6fQqxSGz2',                //'XX-XXXX-X_abcd1234',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '650esl4iojh06phthb12etgtlh', //'active38fde85b_app_clientWeb', //'4g2oc7praeobt637599bqdm6hh' 

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,

        // OPTIONAL - Configuration for cookie storage
        // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
        cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            domain: 'https://testconformationapi.auth.us-east-2.amazoncognito.com',//'.yourdomain.com',
        // OPTIONAL - Cookie path
            path: '/',
        // OPTIONAL - Cookie expiration in days
            expires: 365,
        // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
            // sameSite: "strict" | "lax",
        // OPTIONAL - Cookie secure flag
        // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
            secure: true
        },

        // OPTIONAL - customized storage object
        // storage: MyStorage,
        
        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        authenticationFlowType: 'USER_PASSWORD_AUTH',

        // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
        clientMetadata: { myCustomKey: 'myCustomValue' },

         // OPTIONAL - Hosted UI configuration
        oauth: {
            domain: 'https://testconformationapi.auth.us-east-2.amazoncognito.com', //'your_cognito_domain',
            scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'https://www.activetvonline.co.za/',          //'http://localhost:3000/',
            redirectSignOut: 'https://www.activetvonline.co.za/signout/',    //'http://localhost:3000/signup',
            responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
    }
});


const currentConfig = Auth.configure();