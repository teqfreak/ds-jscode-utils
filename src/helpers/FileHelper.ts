import * as FS from 'fs';
import * as Path from 'path';

export class FileHelper {

    static readFileLinesSync( filePath : string , filter : boolean = false ) {
        let fileLines : string[] = FS    
            .readFileSync(filePath)
            .toString('utf-8')
            .split('\n');
    
        return filter 
            ? fileLines
                .map( line => line.trim() )
                .filter( line => line ) 
            : fileLines;
    }


    static writeJsonFileSync( filePath : string, jsonData : any, optionList : object = {} ) {
        const options = Object.assign({
            encoding: 'utf8',
            flag: 'w',
            mode: 0o666,
            replacer : null, 
            space : '\t',
            recursive: true
        }, optionList );

        // Make sure the directory exists, create it if it doesn't
        const dirPath = Path.dirname(filePath);

        if( !FS.existsSync(dirPath) ) {
            FS.mkdirSync(dirPath, { recursive: options.recursive });
        }

        const data = JSON.stringify( jsonData, options.replacer, options.space );

        return FS.writeFileSync( filePath, data, {
            encoding: <BufferEncoding> options.encoding,
            mode: options.mode,
            flag: options.flag
        } );
    }

}