export class BaseResponse<T> {

    status: number;

    message: string;

    data: T;



    constructor(status: number, message: string, data: T) {

        this.status = status;

        this.message = message;

        this.data = data;

    }

}



// let BaseResponse = new BaseResponse<string>(200, "Success", person);