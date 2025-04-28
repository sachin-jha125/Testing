import { describe,expect,it } from "vitest";
import { app } from "..";
import request from "supertest";
//import resetDb from "./helpers/reset-db";
describe('POST /sum', () => { 
    //If we want to clean up your database for each test cases use beforeEach//
    // beforeEach(async()=>{
    //     console.log("clear db");
    //     await resetDb();
    // })

    //If we want to clean up database only one time when all tests ran.For this use beforeALl.//
    // beforeAll(async()=>{
    //     console.log("clear db");
    //     await resetDb();
    // })
   it("should sum add 2 numbers",async()=>{
    const {status,body} = await request(app).post("/sum").send({
        a:1,
        b:7
    });

expect(status).toBe(200);
expect(body).toEqual({answer: 3, id: expect.any(Number)});

   })
 })
