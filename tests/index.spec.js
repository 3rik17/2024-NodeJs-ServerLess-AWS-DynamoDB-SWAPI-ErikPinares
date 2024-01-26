//const express = require("express");
//const {app} = require("../src/index");
//const {request} = require("supertest");
import getDataPersonas from "../src/controllers/importarPersonas";
import request from "supertest";

describe("GET /getDataPersonas", () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(getDataPersonas).get("/getDataPersonas").send();
        expect(response.statusCode).toBe(200);
    });
});





