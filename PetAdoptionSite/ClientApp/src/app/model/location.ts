export interface IRegion {
    name: string,
    long: string,
    key: string
}

export interface IProvinces {
    name: string,
    region: string,
    key: string
}

export interface ICities {
    name: string,
    province: string,
    city: boolean
}

