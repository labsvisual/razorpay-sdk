const { CaseConverter } = require( '../utils' );

/**
 * Defines the base class for all the entities.
 * @virtual
 * @requires module:utils/CaseConverter
 */
class EntityBase {

    /**
     * Initializes a new instance of the EntityBase class.
     * @param {String} entityName the name of the entity extended from this class
     */
    constructor( entityName ) {

        if ( !( this instanceof EntityBase ) ) {

            return new EntityBase( entityName );

        }

        this.properties = {
            id: '',
            entity: entityName,
            notes: {},
            createdAt: 0
        };

    }

    /**
     * Sets a property for the instance.
     * @param {String} key   the key; if given in snake_case, automatically converted to camelCase
     * @param {String} value the value
     * @return {Object} returns the instance to allow chaining
     */
    setProperty( key, value ) {

        this.properties[ CaseConverter.convertToCamelCase( key ) ] = value;
        return this;

    }

    /**
     * Gets a property from the instance.
     * @param  {String}  key                 the key
     * @param  {Boolean} [convertCase=false] if set to true, converts the key argument
     * from snake_case to camelCase
     * @return {Object}                      the stored value
     */
    getProperty( key, convertCase = false ) {

        return this.properties[ ( convertCase ) ? CaseConverter.convertToCamelCase( key ) : key ];

    }

}

module.exports = EntityBase;
