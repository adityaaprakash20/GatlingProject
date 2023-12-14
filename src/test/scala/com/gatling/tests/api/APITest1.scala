package com.gatling.tests.api

import io.gatling.core.Predef.Simulation
import io.gatling.http.Predef._
import io.gatling.core.Predef._

class APITest1 extends Simulation {

  // All Gatling script has 3 parts,
  // 1. Protocol
  // 2. Scenario
  // 3. Setup

  val httpProtocol = http
    .baseUrl("https://reqres.in/api/")
    .acceptHeader("text/html,application/json,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7")

  val URL = "https://reqres.in/api/"

  val scn_SingleUserAPI = scenario("RESTAPI_GET_SingleUser")
   .exec(http("RESTAPI_GET_SingleUser")
        .get("/users/10")
        .check(status.is(202), jsonPath("$.data.first_name").exists)
    ).pause(2)

  setUp(
    scn_SingleUserAPI.inject(
      rampUsers(5).during(5)
      ).protocols(httpProtocol)
  )
}
