/**
 * Represents a class to serialize and deserialize objects as `multipart/formdata`.
 * @class
 * @module utils/MultipartEncoder
 * @tutorial multipart-encoder-tutorial
 * @see {@link https://tools.ietf.org/html/rfc7578}
 */
class MultipartEncoder {

    /**
     * Initializes a new instance of the class.
     * @constructor
     */
    constructor() {

        this.segmentIdentifier = (
            Math.round(
                Math.random() * 1e16
            ) +
            Math.round(
                Math.random() * 1e16
            )
        ).toString();

    }

    /**
     * Decodes the provided string and returns an unserialized version of the object with which
     * the multipart content was created.
     * @param  {string} str the multipart chunk
     * @return {object}     an object with the properties as serialized in the multipart chunk
     * @throws {Error} if the provided parameter is undefined or null
     * @throws {TypeError} if the provided parameter is not a String
     */
    decode( str ) {

        if ( typeof str === 'undefined' || !str ) {

            throw new Error( 'The first argument is required.' );

        }

        if ( typeof str !== 'string' ) {

            throw new TypeError( `"str": was expecting a string; got ${ typeof str }` );

        }

        const dataParts = str.trim().split( '\r\n' ).filter(
            d => Boolean( d ) && d.substring( 0, 2 ) !== '--'
        );

        let index = 1;
        let lastKey = '';
        return dataParts.reduce( ( acc, current ) => {

            if ( index % 3 === 0 ) {

                acc[ lastKey ] = current;

            } else if ( index % 2 === 1 ) {

                lastKey = current.split( ';' )[ 1 ].split( '=' )[ 1 ];

            }

            index = ( index + 1 ) % 3;

            return acc;

        }, {} );

    }

    /**
     * Serializes the provided object as a multipart/form-data chunk.
     * @param  {object} obj the object which is to be encoded/serialized
     * @return {string}     a string representing the serialized object
     * @throws {Error} if the provided parameter is undefined or null
     * @throws {TypeError} if the provided parameter is not an Object
     */
    encode( obj ) {

        if ( typeof obj === 'undefined' || !obj ) {

            throw new Error( 'The first argument is required.' );

        }

        if ( typeof obj !== 'object' ) {

            throw new TypeError( `"obj": was expecting an object; got ${ typeof obj }` );

        }

        const dataArr = [];

        for ( const key in obj ) {

            /* istanbul ignore else */
            if ( Object.prototype.hasOwnProperty.call( obj, key ) ) {

                dataArr.push( `--${ this.segmentIdentifier }` );

                dataArr.push( `Content-Disposition: form-data; name=${ key }` );
                dataArr.push( 'Content-Type: text/plain; charset=utf8' );
                dataArr.push( '' );

                dataArr.push( obj[ key ] );

            }

        }

        dataArr.push( `--${ this.segmentIdentifier }--` );

        return dataArr.join( '\r\n' ).trim();

    }

}

module.exports = MultipartEncoder;
