/**
 * Represents an error handled while processing the request on the server-side.
 * @class ServerError
 * @module errors/ServerError
 * @extends Error
 */
class ServerError extends Error {

    constructor( message ) {

        super(
            'An error was encountered on the server side. ' +
            `More Details: ${ message }`
        );

    }

}

module.exports = ServerError;
