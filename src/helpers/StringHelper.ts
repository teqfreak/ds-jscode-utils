export class StringHelper {

    static stripStart( stringSubject : string , stringStrip : string , replace : string = '') {
        const start = stringSubject.substr(0, stringStrip.length );

        if( start == stringStrip ) {
            return stringSubject.substring(stringStrip.length);
        }
        return stringSubject;

        const regExp = new RegExp(`/^(${stringStrip})/`)
        return stringSubject.replace( regExp, replace );
    }


    static trimSlashes( string : string ) {
        return string.replace(/^\s*\/*\s*|\s*\/*\s*$/gm, '');
    }


    static prepend( string : string, characters : string, trimIfPresent : boolean = true ) {
        while( string.startsWith(characters) ) {
            string = string.slice(characters.length);
        }
        return characters + string;
    }

}