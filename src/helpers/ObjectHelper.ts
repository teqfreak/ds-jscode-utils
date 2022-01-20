export class ObjectHelper {

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
}