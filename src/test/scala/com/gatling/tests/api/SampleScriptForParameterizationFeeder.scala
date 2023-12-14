package com.gatling.tests.api

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef.Simulation
import io.gatling.http.Predef._
import io.gatling.core.Predef._


class SampleScriptForParameterizationFeeder extends Simulation {
  // All Gatling script has 3 parts,
  // 1. Protocol
  // 2. Scenario
  // 3. Setup

  val feederVar = csv("Data/TestData1.csv").circular

  val httpProtocol = http
    .baseUrl("https://computer-database.gatling.io")
    .inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.9")
    .upgradeInsecureRequestsHeader("1")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36")


  val scnParaRead = scenario("Feeder Scenario Parameterization")
    .repeat(1) {
      feed(feederVar)
        .exec { session =>
          println("Name: " + session("Name").as[String])
          println("Job: " + session("Job").as[String])
          println("ComputerName: " + session("ComputerName").as[String])
          session
        }.pause(2)
        .exec(http("TC01_Keyword_Search")
          .get("/computers?f=${ComputerName}")
        )
    }


  //Scenario

  setUp(scnParaRead.inject(atOnceUsers(1))).protocols(httpProtocol)


}
