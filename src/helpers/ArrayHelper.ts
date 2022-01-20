export class ArrayHelper {

    static split( sourceArray : Array<any>, splitConditionCallback : CallableFunction) : Array<any> {
        return sourceArray.reduce( ([pass, fail] , entry : any ) => {
            return splitConditionCallback(entry) ? [[...pass, entry], fail] : [pass, [...fail, entry]]
        }, [[], []] );
    }

    static first( array : any, number : number = 1 ) {
        return array.slice(0, number )
    }


    static chunk( array : any, chunkSize : number, preserveKeys : boolean = false ) {
        let chunkedArray : Array<Array<any>> = [[]];
        let currentChunk : number = 0;

        array.forEach( (element : any, index : number ) => {
            if( chunkedArray[currentChunk].length == chunkSize ) {
                currentChunk = currentChunk + 1;
                chunkedArray[currentChunk] = [];
            }
            if( !preserveKeys ) {
                chunkedArray[currentChunk].push( element );
            } else {
                chunkedArray[currentChunk][index] = element;
            }
        });

        return chunkedArray;
    }
}