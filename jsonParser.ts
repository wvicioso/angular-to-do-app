@Injectable()
export class AppServices{

    constructor(private http: Http) {
         var obj;
         this.getJSON().subscribe(data => obj=data, error => console.log(error));
    }

    public getJSON(): Observable<any> {
         return this.http.get("./file.json")
                         .map((res:any) => res.json())
                         .catch((error:any) => console.log(error));

     }
}
