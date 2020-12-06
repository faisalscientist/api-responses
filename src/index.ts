export class AppResponse {
  public success = (data: any = [], meta: any = [], message: string = 'Operation Successful') => {
    return this.response('200', message, data, meta);
  }
  public validationError = (data: any = [], meta: any = [], message: string = 'Validation Error') => {
    return this.response('400', message, data, meta);
  }
  public forbidden = (data: any = [], meta: any = [], message: string = 'Forbidden') => {
    return this.response('403', message, data, meta);
  }
  public unauthorized = (data: any = [], meta: any = [], message: string = 'Unauthorized Access') => {
    return this.response('401', message, data, meta);
  }
  public notFound = (data: any = [], meta: any = [], message: string = 'Data Not Found') => {
    return this.response('404', message, data, meta);
  }
  public methodNotAllowed = (data: any = [], meta: any = [], message: string = 'Method Not Allowed') => {
    return this.response('405', message, data, meta);
  }
  public tooManyRequest = (data: any = [], meta: any = [], message: string = 'Too Many Requests') => {
    return this.response('429', message, data, meta);
  }
  public serverError = (data: any = [], meta: any = [], message: string = 'Server Error') => {
    return this.response('500', message, data, meta);
  }
  public unavailable = (data: any = [], meta: any = [], message: string = 'Unavailable') => {
    return this.response('503', message, data, meta);
  }
  public timedOut = (data: any = [], meta: any = [], message: string = 'Timed-Out') => {
    return this.response('504', message, data, meta);
  }
  public badGateway = (data: any = [], meta: any = [], message: string = 'Bad Gateway') => {
    return this.response('502', message, data, meta);
  }

  public other = (code: string, data: any = [], meta: any = [], message: string = 'Bad Gateway') => {
    return this.response(code, message, data, meta);
  }

  private response(code: string, message: string, data: any = [], meta: any = []){
    const responseJson = {code, message, data, meta};
    if(meta.length <= 0){
      delete responseJson['meta'];
    }
    return responseJson;
  }
}