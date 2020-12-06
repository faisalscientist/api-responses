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
# success(message: optional, data: optional, meta: optional)
response.success();
# {code: '200', message: 'Operation Successful', data: [}, meta: [] }

# validationError(message: optional, data: optional, meta: optional)
response.validationError();
# {code: '400', message: 'Validation Error', data: [}, meta: [] }

# forbidden(message: optional, data: optional, meta: optional)
response.forbidden();
# {code: '403', message: 'Forbidden', data: [}, meta: [] }

# unauthorized(message: optional, data: optional, meta: optional)
response.unauthorized();
# {code: '401', message: 'Unauthorized Access', data: [}, meta: [] }

# notFound(message: optional, data: optional, meta: optional)
response.notFound();
# {code: '404', message: 'Not Found', data: [}, meta: [] }

# methodNotAllowed(message: optional, data: optional, meta: optional)
response.methodNotAllowed();
# {code: '405', message: 'Method Not Allowed', data: [}, meta: [] }

# tooManyRequest(message: optional, data: optional, meta: optional)
response.tooManyRequest();
# {code: '429', message: 'Too Many Requests', data: [}, meta: [] }

# serverError(message: optional, data: optional, meta: optional)
response.serverError();
# {code: '500', message: 'Server Error', data: [}, meta: [] }

# unavailable(message: optional, data: optional, meta: optional)
response.unavailable();
# {code: '503', message: 'Unavailable', data: [}, meta: [] }

# timedOut(message: optional, data: optional, meta: optional)
response.timedOut();
# {code: '504', message: 'Timed-Out', data: [}, meta: [] }

# badGateway(message: optional, data: optional, meta: optional)
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
