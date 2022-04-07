
const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '1093932265107-93qqq4et78dr36k3rv4ghlq7fp54r92u.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async ( token ) => {

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '1093932265107-hhqsrgatm9bocn2k8bplfgcrm9f9m9de.apps.googleusercontent.com',
                '1093932265107-hahv4mos4sei7gad9cnj74gfi50cppqi.apps.googleusercontent.com'
            ],  
        });
        const payload = ticket.getPayload();

        console.log('============ PAYLOAD ============= ');
        console.log( payload );
    
        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email'],
        }
    } catch (error) {
        return null;
    }

   
}


module.exports = {
    validarGoogleIdToken
}

