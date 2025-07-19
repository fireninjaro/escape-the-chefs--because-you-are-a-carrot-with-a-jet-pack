// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100004050402040402040204020402040504040504010404030403040304030405040405040604040304060403040604050404050404040403040404030404040504040604010404060403040604030406040404040104040404030404040304040404050401040403040304030403040504040504010404030403040304030405040405040604040304060403040604050404050404040403040404030404040504040704010404060403040604030406040404040104040404030404040304040404050401040402040304020403040504040504010404020403040204030405040405040104040204030402040304050404050404040402040404020404040504`, img`
. 2 . 2 . . 2 . 2 . 2 . 2 . 2 . 
. 2 . 2 . . 2 . 2 . 2 . 2 . 2 . 
. 2 . 2 . . 2 . 2 . 2 . 2 . 2 . 
. 2 . . . . 2 . . . 2 . . . 2 . 
. 2 . 2 . . 2 . 2 . 2 . 2 . 2 . 
. . . 2 . . . . 2 . . . 2 . . . 
. 2 . 2 . . 2 . 2 . 2 . 2 . 2 . 
. 2 . 2 . . 2 . 2 . 2 . 2 . 2 . 
. 2 . 2 . . 2 . 2 . 2 . 2 . 2 . 
. 2 . . . . 2 . . . 2 . . . 2 . 
. 2 . 2 . . 2 . 2 . 2 . 2 . 2 . 
. . . 2 . . . . 2 . . . 2 . . . 
. 2 . 2 . . 2 . 2 . 2 . 2 . 2 . 
. 2 . 2 . . 2 . 2 . 2 . 2 . 2 . 
. 2 . 2 . . 2 . 2 . 2 . 2 . 2 . 
. 2 . . . . 2 . . . 2 . . . 2 . 
`, [myTiles.transparency16,sprites.builtin.forestTiles24,sprites.builtin.forestTiles23,sprites.builtin.forestTiles25,sprites.swamp.swampTile1,sprites.builtin.forestTiles3,sprites.builtin.forestTiles8,sprites.builtin.forestTiles12], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
