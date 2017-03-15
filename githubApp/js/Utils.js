/**
 * Created by lingfengliang on 2017/3/15.
 */

export default class Utils{
    static get(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Accept-Encoding': 'gzip',
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then( response => response.json() )
            .then( result => resolve(result) )
            .catch( error => reject(error) );
        });
    }
    static post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Accept-Encoding': 'gzip',
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(data)
            })
            .then( response => response.json() )
            .then( result => resolve(result) )
            .catch( error => reject(error) );
        });
    }
}