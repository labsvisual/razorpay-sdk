const { test } = require( 'tap' );
const { CaseConverter } = require( '../../lib/utils' );

const harness = ( testCase, t, fn ) => {

    t.equal( fn( testCase.input ), testCase.output );

};

test( 'snake case to camel case', t => {

    const testCases = [
        {
            input: 'hello_world',
            output: 'helloWorld'
        },
        {
            input: 'hello_world_how_are_you',
            output: 'helloWorldHowAreYou'
        },
        {
            input: '__this_is_a_test',
            output: 'thisIsATest'
        },
        {
            input: '',
            output: ''
        }
    ];

    testCases.forEach( testCase => harness( testCase, t, CaseConverter.convertToCamelCase ) );
    t.end();

} );

test( 'camel case to snake case', t => {

    const testCases = [
        {
            input: 'helloWorld',
            output: 'hello_world'
        },

        {
            input: 'hello_world_NewWorld',
            output: 'hello_world_new_world'
        },

        {
            input: '_hello_world_',
            output: '_hello_world_'
        },

        {
            input: '____________hello_______',
            output: '____________hello_______'
        },

        {
            input: '    ',
            output: '    '
        },

        {
            input: '_ _____ ! _____ testNew __',
            output: '_ _____ ! _____ test_new __'
        },

        {
            input: 'Test',
            output: 'test'
        },

        {
            input: 'TNewWoRlD',
            output: 't_new_wo_rl_d'
        }
    ];

    testCases.forEach( testCase => harness( testCase, t, CaseConverter.convertToSnakeCase ) );
    t.end();

} );
