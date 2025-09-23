// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`10001000010101010101040808030101010101010101010102010408080301010101010101010101010104080803010101010101010102010101040808030101010101010101010101010408080301020101010101010102010104080803010101010201010101010101040808030101010101010101020101010408080302010101010101010101010205070706010101010101010101010101010101010102010101010e0e010e0e0e010e010e010e010e010e0f0d0d0d0f0d0d0d0f0d0d0d0d0f0d0d090b090a09090a09090b090909090909090a09090b0909090a0a090909090a09090b09090a0909090b090909090a0b090909090909090a090909090a09090909`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,myTiles.tile1,myTiles.tile3,sprites.castle.tileGrass3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "miMosaico0":
            case "tile2":return tile2;
            case "miMosaico3":
            case "tile5":return tile5;
            case "miMosaico":
            case "tile1":return tile1;
            case "miMosaico1":
            case "tile3":return tile3;
            case "miMosaico2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
