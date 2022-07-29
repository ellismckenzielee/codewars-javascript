/*
Create a REST api! kata
https://www.codewars.com/kata/5f1e3fba8f51e10010cf446a
*/
class TestController {
  constructor(dataSource) {
    this.data = dataSource;
  }
  
  dispatch(obj) {
    const {payload, query, method} = obj;
    let body;
    if(method === 'GET') {
      return this.get(query);
    } else if (method === "POST") {
      return this.post(payload);
    } else if (method === "PUT") {
      return this.put(payload, query);
    } else if (method === 'DELETE') {
      return this.delete(query);
    }
  }
  get (query) {
    console.log('in GET handler')
    if (query !== '') {
      const [key, value] = this.extractQuery(query)
      return {status: 200, body: this.data.filter(item => item[key] == value)}
    } else {
      return {status: 200, body: this.data}
    }
    
  }
  
  post(payload) {
    console.log('in POST handler')
    if (Object.keys(payload).length === 0) return {status: 400, body: []};

    this.data.push(payload);
    return {status: 201, body: [payload]}
  }
  
  put(payload, query) {
    console.log('in PUT handler')
    if (Object.keys(payload).length === 0 || query === '') return {status: 400, body: []};
    let matched = false;
    const [key, value] = this.extractQuery(query);
    this.data = this.data.map(item => {
      if(item[key] == value) {
        matched = true;
        return payload;
      } else{
        return item;
      }
    });
    return matched ? {status: 202, body: [payload]} : {status: 400, body: []};
  }
  delete (query) {
    if (!query) return {status: 400, body: []};
    const [key, value] = this.extractQuery(query)
    let previousLength = this.data.length;
    this.data = this.data.filter(item => item[key] != value)
    return this.data.length !== previousLength ? {status: 200, body: []} : {status: 400, body: []}
  }
  
  extractQuery(query) {
    const key = query.match(/(?<=[?])\w+(?=[=])/g)[0];
    const value = query.match(/(?<=[=])[a-zA-Z0-9]+$/g)[0];
    return [key, value];
  }
}
