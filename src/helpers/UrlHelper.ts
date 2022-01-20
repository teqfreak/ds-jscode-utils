export class UrlHelper {

    static appendUri( baseUrl : string, uri : string ) {
        return `${baseUrl}${uri}`;
    }


    static buildUri( path : string , params : object = {}, queryParams : object = {} ) {
        let queryString = '';
        let queryStringParts = [];

        for( const [paramName, paramValue] of Object.entries(params) ) {
            path = path.replace(`:${paramName}`, paramValue );
        }

        for( const [queryParamName, queryParamValue] of Object.entries(queryParams) ) {
            queryStringParts.push(`${queryParamName}=${queryParamValue}`);
        }

        if( queryStringParts.length > 0 ) {
            queryString = `?${queryStringParts.join('&')}`;
        }

        return path.concat(queryString);
    }


    static build( baseUrl : string, path : string, params : object = {} , queryParams : object = {} ) {
        return this.appendUri(
            baseUrl,
            this.buildUri(
                path,
                params,
                queryParams
            )
        );
    }
}