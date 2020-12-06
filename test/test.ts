import { expect } from 'chai';
import {AppResponse} from '../src';

const response = new AppResponse();
describe('Api Response Tests', () => {
  describe('Success Response', () => {
    it('should return default response information when no params are passed to success', () => {
      const {code, data, meta, message} = response.success();
      expect(code).to.equal('200');
      expect(data.length).to.equal(0);
      expect(meta.length).to.equal(0);
      expect(message).to.equal('Operation Successful');
    });
    it('should return correct response information when params are passed to success', () => {
      const {code, data, meta, message} = response.success({data: 'data'}, {meta: 'meta'}, 'Success');
      expect(code).to.equal('200');
      expect(data).to.have.property('data').with.to.equal('data');
      expect(meta).to.have.property('meta').with.to.equal('meta');
      expect(message).to.equal('Success');
    });
  })
  describe('Validation Error Response', () => {
    it('should return default response information when no params are passed to validationError', () => {
      const {code, data, meta, message} = response.validationError();
      expect(code).to.equal('400');
      expect(data.length).to.equal(0);
      expect(meta.length).to.equal(0);
      expect(message).to.equal('Validation Error');
    });
    it('should return correct response information when params are passed to validationError', () => {
      const {code, data, meta, message} = response.validationError({data: 'data'}, {meta: 'meta'}, 'Validation');
      expect(code).to.equal('400');
      expect(data).to.have.property('data').with.to.equal('data');
      expect(meta).to.have.property('meta').with.to.equal('meta');
      expect(message).to.equal('Validation');
    });
  })
  describe('Forbidden Error Response', () => {
    it('should return default response information when no params are passed to forbidden', () => {
      const {code, data, meta, message} = response.forbidden();
      expect(code).to.equal('403');
      expect(data.length).to.equal(0);
      expect(meta.length).to.equal(0);
      expect(message).to.equal('Forbidden');
    });
    it('should return correct response information when params are passed to forbidden', () => {
      const {code, data, meta, message} = response.forbidden({data: 'data'}, {meta: 'meta'}, 'Forbidden Response');
      expect(code).to.equal('403');
      expect(data).to.have.property('data').with.to.equal('data');
      expect(meta).to.have.property('meta').with.to.equal('meta');
      expect(message).to.equal('Forbidden Response');
    });
  })
  describe('Unauthorized Error Response', () => {
    it('should return default response information when no params are passed to unauthorized', () => {
      const {code, data, meta, message} = response.unauthorized();
      expect(code).to.equal('401');
      expect(data.length).to.equal(0);
      expect(meta.length).to.equal(0);
      expect(message).to.equal('Unauthorized Access');
    });
    it('should return correct response information when params are passed to unauthorized', () => {
      const {code, data, meta, message} = response.unauthorized({data: 'data'}, {meta: 'meta'}, 'Unauthorized Response');
      expect(code).to.equal('401');
      expect(data).to.have.property('data').with.to.equal('data');
      expect(meta).to.have.property('meta').with.to.equal('meta');
      expect(message).to.equal('Unauthorized Response');
    });
  })
  describe('Not Found Error Response', () => {
    it('should return default response information when no params are passed to notFound', () => {
      const {code, data, meta, message} = response.notFound();
      expect(code).to.equal('404');
      expect(data.length).to.equal(0);
      expect(meta.length).to.equal(0);
      expect(message).to.equal('Data Not Found');
    });
    it('should return correct response information when params are passed to notFound', () => {
      const {code, data, meta, message} = response.notFound({data: 'data'}, {meta: 'meta'}, 'Not Found Response');
      expect(code).to.equal('404');
      expect(data).to.have.property('data').with.to.equal('data');
      expect(meta).to.have.property('meta').with.to.equal('meta');
      expect(message).to.equal('Not Found Response');
    });
  })
  describe('Method Not Allowed Error Response', () => {
    it('should return default response information when no params are passed to methodNotAllowed', () => {
      const {code, data, meta, message} = response.methodNotAllowed();
      expect(code).to.equal('405');
      expect(data.length).to.equal(0);
      expect(meta.length).to.equal(0);
      expect(message).to.equal('Method Not Allowed');
    });
    it('should return correct response information when params are passed to methodNotAllowed', () => {
      const {code, data, meta, message} = response.methodNotAllowed({data: 'data'}, {meta: 'meta'}, 'Method Not Allowed Response');
      expect(code).to.equal('405');
      expect(data).to.have.property('data').with.to.equal('data');
      expect(meta).to.have.property('meta').with.to.equal('meta');
      expect(message).to.equal('Method Not Allowed Response');
    });
  })
  describe('Too Many Request Error Response', () => {
    it('should return default response information when no params are passed to tooManyRequest', () => {
      const {code, data, meta, message} = response.tooManyRequest();
      expect(code).to.equal('429');
      expect(data.length).to.equal(0);
      expect(meta.length).to.equal(0);
      expect(message).to.equal('Too Many Requests');
    });
    it('should return correct response information when params are passed to tooManyRequest', () => {
      const {code, data, meta, message} = response.tooManyRequest({data: 'data'}, {meta: 'meta'}, 'Too Many Request Response');
      expect(code).to.equal('429');
      expect(data).to.have.property('data').with.to.equal('data');
      expect(meta).to.have.property('meta').with.to.equal('meta');
      expect(message).to.equal('Too Many Request Response');
    });
  })
  describe('Server Error Response', () => {
    it('should return default response information when no params are passed to serverError', () => {
      const {code, data, meta, message} = response.serverError();
      expect(code).to.equal('500');
      expect(data.length).to.equal(0);
      expect(meta.length).to.equal(0);
      expect(message).to.equal('Server Error');
    });
    it('should return correct response information when params are passed to serverError', () => {
      const {code, data, meta, message} = response.serverError({data: 'data'}, {meta: 'meta'}, 'Server Error Response');
      expect(code).to.equal('500');
      expect(data).to.have.property('data').with.to.equal('data');
      expect(meta).to.have.property('meta').with.to.equal('meta');
      expect(message).to.equal('Server Error Response');
    });
  })
  describe('Unavailable Error Response', () => {
    it('should return default response information when no params are passed to unavailable', () => {
      const {code, data, meta, message} = response.unavailable();
      expect(code).to.equal('503');
      expect(data.length).to.equal(0);
      expect(meta.length).to.equal(0);
      expect(message).to.equal('Unavailable');
    });
    it('should return correct response information when params are passed to unavailable', () => {
      const {code, data, meta, message} = response.unavailable({data: 'data'}, {meta: 'meta'}, 'Unavailable Response');
      expect(code).to.equal('503');
      expect(data).to.have.property('data').with.to.equal('data');
      expect(meta).to.have.property('meta').with.to.equal('meta');
      expect(message).to.equal('Unavailable Response');
    });
  })
  describe('Timed-Out Error Response', () => {
    it('should return default response information when no params are passed to timedOut', () => {
      const {code, data, meta, message} = response.timedOut();
      expect(code).to.equal('504');
      expect(data.length).to.equal(0);
      expect(meta.length).to.equal(0);
      expect(message).to.equal('Timed-Out');
    });
    it('should return correct response information when params are passed to timedOut', () => {
      const {code, data, meta, message} = response.timedOut({data: 'data'}, {meta: 'meta'}, 'Timed-Out Response');
      expect(code).to.equal('504');
      expect(data).to.have.property('data').with.to.equal('data');
      expect(meta).to.have.property('meta').with.to.equal('meta');
      expect(message).to.equal('Timed-Out Response');
    });
  })
  describe('Bad Gateway Error Response', () => {
    it('should return default response information when no params are passed to tooManyRequest', () => {
      const {code, data, meta, message} = response.badGateway();
      expect(code).to.equal('502');
      expect(data.length).to.equal(0);
      expect(meta.length).to.equal(0);
      expect(message).to.equal('Bad Gateway');
    });
    it('should return correct response information when params are passed to tooManyRequest', () => {
      const {code, data, meta, message} = response.badGateway({data: 'data'}, {meta: 'meta'}, 'Bad Gateway Response');
      expect(code).to.equal('502');
      expect(data).to.have.property('data').with.to.equal('data');
      expect(meta).to.have.property('meta').with.to.equal('meta');
      expect(message).to.equal('Bad Gateway Response');
    });
  })
});
