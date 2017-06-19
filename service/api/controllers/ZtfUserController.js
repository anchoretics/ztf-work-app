/**
 * ZtfUserController
 *
 * @description :: Server-side logic for managing Ztfusers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: (req, res, next)=>{
		console.log(req.session);
		res.end("ok");
	},
	login: (req, res, next)=>{
		console.log(req.method);
		res.end();
	}
};

