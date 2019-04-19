const Vec3 = require( 'vec3' );

module.exports = function( xz ) {

    var chunk = { },
        XZ = xz;

    this.set = function( x, y, z, name, value ) {
        chunk[ new Vec3( x, y, z ) ] = { name: name, value: value };
        // console.log( chunk[ new Vec3( x, y, z ) ] );
    };

    this.get = function( x, y, z ) {
        var getBlock = chunk[ new Vec3 ( x, y, z ) ];

        if ( getBlock === undefined )
        {
            return { name: 'minecraft:air', value: 0 };
        } else {
            return getBlock;
        };
    };

    this.getXZ = function() {
        return XZ;
    };

    this.list = function( ) {
        return chunk;
    };

    // return chunkLayer;
};