import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ActuatorBeans} from './actuatorbeans';
import 'rxjs/add/operator/map';
@Injectable()
export class BeansService {

  private baseUrl: string = 'http://localhost:8090';

  constructor(private http: Http) {
  }

  //  get(id: number): Observable<Person> {
  //    let person$ = this.http
  //      .get(`${this.baseUrl}/Person/${id}`, {headers: this.getHeaders()})
  //      .map(mapPerson);
  //      return perso$;
  //  }

  getAll(): Observable<ActuatorBeans[]> {
    let beans$ = this.http
      .get(`${this.baseUrl}/beans`, {headers: this.getHeaders()})
      .map(mapBeans);
    return beans$;
  }

  //  save(person: Person): Observable<Response> {
  //    console.log('Saving person ' + JSON.stringify(person));
  //    return this.http.put(`${this.baseUrl}/Person`, JSON.stringify(person), {headers: this.getHeaders()});
  //  }
  // 
  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}

function mapBeans(response: Response): ActuatorBeans[] {
  return response.json().map(toBean);
}
// 
//function mapPerson(response: Response): Person {
//  return toPerson(response.json());
//}
// 
function toBean(r: any): ActuatorBeans {
  return r;
}
