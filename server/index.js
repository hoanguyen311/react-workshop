import data from './data.json';
import request from 'superagent';
import jsonp from 'superagent-jsonp';

export default function(timeout = 1000) {

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(data.metadata);
        }, timeout);
    });
}

function ABC(err, res) {
	console.log(res);
}
