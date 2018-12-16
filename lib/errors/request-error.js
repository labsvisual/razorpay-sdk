/**
 * Represents an error handled because of invalid request parameters supplied by the user.
 * @class RequestError
 * @module errors/RequestError
 * @extends Error
 */
class RequestError extends Error {

    constructor( { field, description } ) {

        super(
            'One or more of the options provided for this request were invalid. ' +
            `Field: ${ field }, Message: ${ description }`
        );

    }

}

module.exports = RequestError;
