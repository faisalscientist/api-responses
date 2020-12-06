export class AppResponse {
  public success = (message: string = 'Operation Successful', data: any = [], meta: any = []) => {
    return this.response('200', message, data, meta);
  }
  public validationError = (message: string = 'Validation Error', data: any = [], meta: any = []) => {
    return this.response('400', message, data, meta);
  }
  public forbidden = (message: string = 'Forbidden', data: any = [], meta: any = []) => {
    return this.response('403', message, data, meta);
  }
  public unauthorized = (message: string = 'Unauthorized Access', data: any = [], meta: any = []) => {
    return this.response('401', message, data, meta);
  }
  public notFound = ( message: string = 'Data Not Found', data: any = [], meta: any = []) => {
    return this.response('404', message, data, meta);
  }
  public methodNotAllowed = (message: string = 'Method Not Allowed', data: any = [], meta: any = []) => {
    return this.response('405', message, data, meta);
  }
  public tooManyRequest = (message: string = 'Too Many Requests', data: any = [], meta: any = []) => {
    return this.response('429', message, data, meta);
  }
  public serverError = ( message: string = 'Server Error', data: any = [], meta: any = []) => {
    return this.response('500', message, data, meta);
  }
  public unavailable = (message: string = 'Unavailable', data: any = [], meta: any = []) => {
    return this.response('503', message, data, meta);
  }
  public timedOut = (message: string = 'Timed-Out', data: any = [], meta: any = []) => {
    return this.response('504', message, data, meta);
  }
  public badGateway = (message: string = 'Bad Gateway', data: any = [], meta: any = []) => {
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