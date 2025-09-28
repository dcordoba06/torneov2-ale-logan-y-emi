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
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel0":
            case "level1":return tiles.createTilemap(hex`100010000f1101010101040808030101010101011010010102010408080301010101010101010101010104080803010101010101010102010101040808030101010101010101010101010408080301020101010101010102010104080803010101010201010101010101040813030101010101010101020101010408080302010101010101010101010205070706010101010101010101010101010101010102010101010d0d010d0d0d010d010d010d010d010d0e0c0c0c0e0c0c0c0e0c0c0c0c0e0c0c090b090a09090a09090b090909090909090a09090b0909090a0a090909090a09090b09090a0909090b090909090a0b0912121212121212121212121212121212`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,myTiles.tile3,sprites.castle.tileGrass3,myTiles.tile4,myTiles.tile6,myTiles.tile8,myTiles.tile9,myTiles.tile12,myTiles.tile16], TileScale.Sixteen);
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`10001000010101010101040808030101010101010101010102010408080301010101010101010101010104080803010101010101010102010101040808030101010101010101010101010408080301020101010101010102010104080803010101010201010101010101040808030101010101010101020101010408080302010101010101010101010205070706010101010101010101010101010101010102010101010d0d010d0d0d010d010d010d010d010d0e0c0c0c0e0c0c0c0e0c0c0c0c0e0c0c090b090a09090a09090b090909090909090a09090b0909090a0a090909090a09090b09090a0909090b090909090a0b090909090909090a090909090a09090909`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,myTiles.tile3,sprites.castle.tileGrass3,myTiles.tile4], TileScale.Sixteen);
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
            case "myTile":
            case "tile6":return tile6;
            case "myTile0":
            case "tile7":return tile7;
            case "myTile1":
            case "tile8":return tile8;
            case "myTile2":
            case "tile9":return tile9;
            case "myTile5":
            case "tile12":return tile12;
            case "myTile6":
            case "tile13":return tile13;
            case "myTile7":
            case "tile14":return tile14;
            case "myTile8":
            case "tile15":return tile15;
            case "myTile9":
            case "tile16":return tile16;
            case "myTile3":
            case "tile10":return tile10;
            case "myTile4":
            case "tile11":return tile11;
            case "myTile10":
            case "tile17":return tile17;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
