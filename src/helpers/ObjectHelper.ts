export class ObjectHelper {

  static clone( object : object ) {
    return JSON.parse(JSON.stringify(object));
  }

  static isObject( item : any ) : boolean {
    return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
  }

  static mergeDeep( target : any , ...sources : any ) : any {
      if (!sources.length) return target;
      const source = sources.shift();

      if (this.isObject(target) && this.isObject(source)) {
        for (const key in source) {
          if (this.isObject(source[key])) {
            if (!target[key]) Object.assign(target, { [key]: {} });
            this.mergeDeep(target[key], source[key]);
          } else {
            Object.assign(target, { [key]: source[key] });
          }
        }
      }
      return this.mergeDeep(target, ...sources);
  }

  /**
   * Filters an object en builds a new object containing only those entries that passed the filter test.
   * @param object
   * @param filterCallback
   * @param clone
   * @returns
   */
  static filter( object : object , filterCallback : CallableFunction ) {
    let collection : any = {};

    Object.entries(object).forEach( ( [ propertyName, propertyValue] ) => {
        if( filterCallback(propertyValue, propertyName) ) {
            collection[propertyName] = propertyValue;
        }
    });

    return collection;
  }
}