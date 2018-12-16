/**
 * @module utils/CaseConverter
 */

/**
 * Converts the given string from snake_case to camelCase.
 * @param  {string} str the string which is to be converted
 * @return {string}     the input string, formatted as camelCase
 */
module.exports.convertToCamelCase = str => {

    const retVal = str.split( '_' )
        .map( k => `${ k.substring( 0, 1 ).toUpperCase() }${ k.substring( 1 ) }` )
        .join( '' );

    return retVal.substring( 0, 1 ).toLowerCase() + retVal.substring( 1 );

};

/**
 * Converts the given string from camelCase to snake_case.
 * @param  {string} str the string which is to be converted
 * @return {string}     the input string, formatted as snake_case
 */
module.exports.convertToSnakeCase = str => {

    let index = 0;
    const strParts = str.split( '' );

    return strParts.reduce( ( acc, current ) => {

        const currentCharCode = current.charCodeAt( 0 );
        if ( currentCharCode >= 65 && currentCharCode <= 90 ) {

            if ( index !== 0 && str[ index - 1 ] !== '_' ) {

                acc += '_';

            }

            acc += String.fromCharCode( currentCharCode + 32 );

        } else {

            acc += String.fromCharCode( currentCharCode );

        }

        index++;
        return acc;

    }, '' );

};
