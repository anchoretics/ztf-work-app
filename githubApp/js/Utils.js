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

    /**
     * 检查项目更新时间
     * @param longTime 项目更新时间
     * @return {boolean} true 不需要更新,false需要更新
     */
    static checkDate(longTime) {
        // return false;
        let current = new Date().getTime();
        let limit = 1000 * 60 * 60 * 24; // 默认一天
        if(longTime < (current-limit)){
            return false;
        }
        return true;
    }
}