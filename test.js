var supertest = require("supertest");
var should = require("should");
var mongoose = require("mongoose");

var server = supertest.agent("http://localhost:3004");




describe("GET ALL TOUR",function(){
  it("danh sach tour",function(done){
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      
      done();
    });
  });

  it("GET TOUR BY NAME",function(done){
    server
    .get("/name/?tourName=dalat")
    .send()
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
        res.status.should.equal(200);
      done();
    });
  });
  it("POST NEW TOUR",function(done){
    server
    .post("/post/")
    .send({tourID: "4452",tourName:'nhatrang',price:2000000,days:"2",nights: "3"})
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      
      res.body.tourID.should.equal("4452");
      done();
    });
  });
 it("ERROR 404",function(done){
    server
    .post("/error")    
    .expect(404)
    .end(function(err,res){
      res.status.should.equal(404);
      done();
    });
  });

});
