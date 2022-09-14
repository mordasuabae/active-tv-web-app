import { Amplify, Auth } from 'aws-amplify';



//first userpool => active-tv-web
Amplify.configure({

    Auth: {
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: "us-east-2:8d0c89ea-1ab0-43b5-aaa8-0882c055a031",//"us-east-2:8d0c89ea-1ab0-43b5-aaa8-0882c055a031", //'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
        //  indentityPoolId:'us-east-2:066ceeec-734d-4b62-bfa5-80b9019a96c',
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'us-east-2',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-2_jGv4x7t1b',                //'XX-XXXX-X_abcd1234',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '5srg77q19ue9ails59lnkkert7', //'active38fde85b_app_clientWeb', //'4g2oc7praeobt637599bqdm6hh' 

        // OPTIONAL - Hosted UI configuration
        oauth: {
            domain: 'activetvwebapp16baf347-16baf347-dev.auth.us-east-2.amazoncognito.com', //'your_cognito_domain',
            scope: [
                // 'phone',
                'email',
                'profile',
                'openid'
            ],
            redirectSignIn: 'http://localhost:3000/', //'https://www.activetvonline.co.za/',   //        'http://localhost:3000/',
            redirectSignOut: 'http://localhost:3000/signup', //'https://www.activetvonline.co.za/signout/',//'http://localhost:3000/signup', //'https://www.activetvonline.co.za/signout/',    //'http://localhost:3000/signup',
            responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
            // responseType:'code'
        }
    }
});

// You can get the current config object
//  const currentConfig = Auth.configure();



//second userpool=> test-Conformation-userpool

// Amplify.configure({

//     Auth: {
//         // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
//         // identityPoolId:"testConformationIdentity" ,//"us-east-2:8d0c89ea-1ab0-43b5-aaa8-0882c055a031", //'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
//         identityPoolId:'us-east-2:066ceeec-734d-4b62-bfa5-80b9019a96c4',
//         // identityPoolId:'us-east-2:939de7f6-03e1-4a73-bca6-c3c9b6cded14',

//         // REQUIRED - Amazon Cognito Region
//         region: 'us-east-2',

//         // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
//         // Required only if it's different from Amazon Cognito Region
//         identityPoolRegion:  'us-east-2',

//         // OPTIONAL - Amazon Cognito User Pool ID
//         userPoolId:'us-east-2_6fQqxSGz2',                //'XX-XXXX-X_abcd1234',

//         // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
//         userPoolWebClientId: '3lnsq8isbvv88sq665mgl2u9la', //'active38fde85b_app_clientWeb', //'4g2oc7praeobt637599bqdm6hh' 
//         // userPoolWebClientId:'650esl4iojh06phthb12etgtlh',
//         // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
//         mandatorySignIn: false,

//         // OPTIONAL - Configuration for cookie storage
//         // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
//         cookieStorage: {
//         // REQUIRED - Cookie domain (only required if cookieStorage is provided)
//             domain: 'https://testconformationapi.auth.us-east-2.amazoncognito.com',//'.yourdomain.com',
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
//             domain: 'https://testconformationapi.auth.us-east-2.amazoncognito.com', //'your_cognito_domain',
//             scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
//             // redirectSignIn: 'https://www.activetvonline.co.za/',
//             redirectSignIn:  'http://localhost:3000/',
//             redirectSignOut: 'http://localhost:3000/login', 
//             // redirectSignOut: 'https://www.activetvonline.co.za/signout/', 
//             responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
//         }
//     }
// });


export const CurrentConfig = Auth.configure()

// const AmplifyLoggertest = "logger test"
console.log('current config')

// Amplify.Logger.LOG_LEVEL = "DEBUG"; //for debugging purposes

