
export interface IPetPost {
    id: number,
    name: string,
    petTypeId: number,
    petSubTypeId: number,
    description: string,
    provinceKey: string,
    cityName: string,
    userId: number,
    createdOn: Date,
    updatedOn: Date,
}

export interface IPetPostImage {
    id: number,
    postId: string,
    img: string,
    isMain: boolean
}



