/**
 * Represents an error handled while Razorpay is trying to communicate with the gateway.
 * @class GatewayError
 * @module errors/GatewayError
 * @extends Error
 */
class GatewayError extends Error {

    constructor( message ) {

        super(
            'An error occurred while communicating with the gateway. ' +
            `Details: ${ message }`
        );

    }

}

module.exports = GatewayError;
