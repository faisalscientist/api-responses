# Api Responses

api-responses is a javascript package that returns you responses in a readable format when building RESTApis.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/api-responses) to install api-responses.

```bash
npm i api-responses
```

## Usage

### Import

```python
const AppResponse = require('api-responses').AppResponse;
## Typescript
import { AppResponse } from 'api-responses'

## Initialization
const response = new AppResponse();

```

```python
# success(data: optional, meta: optional, message: optional)
response.success();
# {code: '200', message: 'Operation Successful', data: [}, meta: [] }

# validationError(data: optional, meta: optional, message: optional)
response.validationError();
# {code: '400', message: 'Validation Error', data: [}, meta: [] }

# forbidden(data: optional, meta: optional, message: optional)
response.forbidden();
# {code: '403', message: 'Forbidden', data: [}, meta: [] }

# unauthorized(data: optional, meta: optional, message: optional)
response.unauthorized();
# {code: '401', message: 'Unauthorized Access', data: [}, meta: [] }

# notFound(data: optional, meta: optional, message: optional)
response.notFound();
# {code: '404', message: 'Not Found', data: [}, meta: [] }

# methodNotAllowed(data: optional, meta: optional, message: optional)
response.methodNotAllowed();
# {code: '405', message: 'Method Not Allowed', data: [}, meta: [] }

# tooManyRequest(data: optional, meta: optional, message: optional)
response.tooManyRequest();
# {code: '429', message: 'Too Many Requests', data: [}, meta: [] }

# serverError(data: optional, meta: optional, message: optional)
response.serverError();
# {code: '500', message: 'Server Error', data: [}, meta: [] }

# unavailable(data: optional, meta: optional, message: optional)
response.unavailable();
# {code: '503', message: 'Unavailable', data: [}, meta: [] }

# timedOut(data: optional, meta: optional, message: optional)
response.timedOut();
# {code: '504', message: 'Timed-Out', data: [}, meta: [] }

# badGateway(data: optional, meta: optional, message: optional)
response.badGateway();
# {code: '502', message: 'Bad Gateway', data: [}, meta: [] }

# other(code: required, data: optional, meta: optional, message: optional)
response.other('212');
# {code: '212', message: 'Other Response', data: [}, meta: [] }

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://opensource.org/licenses/MIT)
