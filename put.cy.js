describe('HTTPBin API Tests', () => {

    
    it('GET request without parameters', () => {
      cy.request('https://httpbin.org/get')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('url');
        });
    });
  
    
    it('GET request with parameters', () => {
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/get',
        qs: {
          param1: 'value1',
          param2: 'value2'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.args).to.deep.equal({ param1: 'value1', param2: 'value2' });
      });
    });
  
    
    it('POST request with JSON body', () => {
      cy.request({
        method: 'POST',
        url: 'https://httpbin.org/post',
        body: {
          key1: 'value1',
          key2: 'value2'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.json).to.deep.equal({ key1: 'value1', key2: 'value2' });
      });
    });
  
    
    it('POST request with form data', () => {
      cy.request({
        method: 'POST',
        url: 'https://httpbin.org/post',
        form: true,
        body: {
          key1: 'value1',
          key2: 'value2'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.form).to.deep.equal({ key1: 'value1', key2: 'value2' });
      });
    });
  
    
    it('PUT request', () => {
      cy.request({
        method: 'PUT',
        url: 'https://httpbin.org/put',
        body: {
          key1: 'value1'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.json).to.deep.equal({ key1: 'value1' });
      });
    });
  
    
    it('DELETE request', () => {
      cy.request('DELETE', 'https://httpbin.org/delete')
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  
    
    it('Sending standard headers (User-Agent)', () => {
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
          'User-Agent': 'MyTestAgent'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.headers['User-Agent']).to.eq('MyTestAgent');
      });
    });
  
    
    it('Sending custom headers', () => {
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
          'X-Custom-Header': 'CustomValue'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.headers['X-Custom-Header']).to.eq('CustomValue');
      });
    });
  
    
    it('Sending random query parameters', () => {
      const randomParams = {
        randomKey1: Math.random().toString(36).substring(7),
        randomKey2: Math.random().toString(36).substring(7)
      };
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/get',
        qs: randomParams
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.args).to.deep.equal(randomParams);
      });
    });
  
    
    it('Checking response time', () => {
      const startTime = new Date().getTime();
      cy.request('https://httpbin.org/get')
        .then((response) => {
          const endTime = new Date().getTime();
          expect(response.status).to.eq(200);
          expect(endTime - startTime).to.be.lessThan(2000); 
        });
    });
  
  });
  