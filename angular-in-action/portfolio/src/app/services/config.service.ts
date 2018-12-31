export class ConfigService {
    private _api: string;
    static set(property: string, value: string) {
        this['_' + property] = value;
    }
    static get(property: string) {
        return this['_' + property];
    }
}
