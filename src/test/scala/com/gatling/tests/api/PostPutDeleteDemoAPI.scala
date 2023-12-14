package com.gatling.tests.api

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef.Simulation
import io.gatling.http.Predef._
import io.gatling.core.Predef._

class PostPutDeleteDemoAPI extends Simulation {

  val httpProtocol = http
    .baseUrl("https://reqres.in/api/")
    .acceptHeader("text/html,application/json,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7")
    .contentTypeHeader("application/json")

  val scn_PostCreateAPI = scenario("RESTAPI_POST_CreateUser")
    .exec(http("RESTAPI_POST_CreateUser")
      .post("/users")
      .body(RawFileBody("Data/User.json")).asJson
      /*.body(StringBody(
        """
          |{
          |    "name": "morpheus",
          |    "job": "leader"
          |}
          |""".stripMargin)).asJson */
      .check(
        status is 201,
        jsonPath("$.name") is "Aditya"
      )
    ).pause(2)

  val scn_PUTUpdateUserAPI = scenario("RESTAPI_PUT_UpdateUser")
    .exec(http("RESTAPI_PUT_UpdateUser")
      .put("/users/2")
      .body(RawFileBody("Data/User.json")).asJson
      /*.body(StringBody(
        """
          |{
          |    "name": "morpheus",
          |    "job": "leader"
          |}
          |""".stripMargin)).asJson */
      .check(
        status is 200,
        jsonPath("$.name") is "Aditya"
      )
    ).pause(2)


  setUp(
    scn_PostCreateAPI.inject(rampUsers(2).during(5)),
    scn_PUTUpdateUserAPI.inject(rampUsers(5).during(5))
  ).protocols(httpProtocol).maxDuration(5)
}

