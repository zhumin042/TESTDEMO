const request = require('supertest');
const app = require('../../app.js');

describe('接口文档测试', function(){
	it('首页返回值测试', function(done){
		//asset.equal([1,2,3].indexof(4), -1);
			request(app)
				.get('/')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err,res){
					if (res.body.data == "World!") {
						done();
					} else {
						console.log('API 输出',res.body.data);
						done(new Error('返回的值与预期不符合！'));
					}
				});
	});
	
});