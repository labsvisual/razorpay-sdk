const { test } = require( 'tap' );
const { MultipartEncoder } = require( '../../lib/utils' );

test( 'initializes correctly', t => {

    const encoder = new MultipartEncoder();

    t.equal( typeof encoder.segmentIdentifier, 'string' );
    t.end();

} );

test( 'throw an error if the argument is not an object', t => {

    const encoder = new MultipartEncoder();

    t.throws( encoder.encode, Error );
    t.throws( () => encoder.encode( null ), Error );
    t.throws( () => encoder.encode( 123 ), TypeError );

    t.throws( encoder.decode, Error );
    t.throws( () => encoder.decode( null ), Error );
    t.throws( () => encoder.decode( 123 ), TypeError );

    t.end();

} );

test( 'encodes an object correctly', t => {

    const encoder = new MultipartEncoder();

    let obj = {
        foo: 'bar'
    };

    let data = encoder.encode( obj );
    let decoded = encoder.decode( data );

    t.deepEqual( decoded, obj );

    obj = {
        foo: 'bar',
        baz: 'faz',
        hello: 'world'
    };

    data = encoder.encode( obj );
    decoded = encoder.decode( data );

    t.deepEqual( decoded, obj );

    t.end();

} );
