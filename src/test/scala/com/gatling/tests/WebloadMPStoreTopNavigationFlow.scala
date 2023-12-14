package com.gatling.tests

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class WebloadMPStoreTopNavigationFlow extends Simulation {

	val httpProtocol = http
		.baseUrl("http://www.webloadmpstore.com")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.9")
		.upgradeInsecureRequestsHeader("1")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36")

		val headers_2 = Map(
		"Cache-Control" -> "max-age=0",
		"Origin" -> "http://www.webloadmpstore.com",
		"Proxy-Connection" -> "keep-alive")

	val uri1 = "http://webloadmpstore.com"

	val openHP = exec(http("WLMPS_OpenHP")
		.get(uri1 + "/"))
		.pause(1)

		// ClickLogin
		val clickLogin = exec(http("WLMPS_ClickLogin")
			.get("/login.php")
			.check(regex("""sessionID" type="hidden" value="(.*)" /><input""").exists.saveAs("WLSessionID"))
			.check(substring("Login Page")))
			.exec { session =>
				println("---WL Session ID :---")
				println(session("WLSessionID").as[String])
				println("---WL Session ID :---")
				session
			}
			.pause(1)

	val login = exec(http("WLMPS_EnterLoginCredentialsClickLogin")
		.post("/login.php")
		.headers(headers_2)
		.formParam("login", "demo")
		.formParam("password", "demo")
		.formParam("sessionID", "${WLSessionID}")
		.formParam("event", "login")
		.formParam("Submit", "Login"))
		.exec(http("WLMPS_LoginRedirect")
			.get("/index.php")
			.check(substring("Our Latest Products").exists))
		.exec { session =>
			println("*********CheckPT1**************")
			session
		}
		.pause(1)

	//---------------------------


	val topMenuDemos = exec(http("WLMPS_ClickTopMenuDemos")
		.get("/category.php?category_id=1"))
		.pause(1)

	val topMenuWhitePaper = exec(http("WLMPS_ClickTopMenuWhitePaper")
		.get("/category.php?category_id=2"))
		.pause(1)

	val topMenuManuals = exec(http("WLMPS_ClickTopMenuManuals")
		.get("/category.php?category_id=3"))
		.pause(1)

	val topMenuWebinars = exec(http("WLMPS_ClickTopMenuWebinar")
		.get("/category.php?category_id=4"))
		.pause(1)

	val logout = exec(http("WLMPS_Logout")
		.get("/login.php?event=logout"))

//-------------------- Scenario ------------------------------------------
	val scn = scenario("WebloadMPStoreTopNavigationFlow")
		.exec(openHP, clickLogin, login,topMenuDemos, topMenuManuals,topMenuWebinars,topMenuWhitePaper, logout)
		.pause(1)

	val scn_WLMP_HP_Top_Navigation = scenario("scn_WLMP_HP_Top_Navigation")
		.exec(openHP, clickLogin, login, topMenuDemos, topMenuManuals, topMenuWebinars, topMenuWhitePaper, logout)
		.pause(1)

	val scn_WLMP_LoginLogout = scenario("scn_WLMP_LoginLogout")
		.exec(openHP, clickLogin, login, logout)
		.pause(1)

	//-------------------- Scenario ------------------------------------------
	/*setUp(
		scn_WLMP_HP_Top_Navigation.inject(rampUsers(10).during(20)),
		scn_WLMP_LoginLogout.inject(rampUsers(8).during(16))).protocols(httpProtocol)

	  setUp(
    scn_WLMP_LoginLogout.inject(atOnceUsers(1))).protocols(httpProtocol)

	 */
	setUp(
		scn_WLMP_LoginLogout.inject(rampUsers(5).during(5))).maxDuration(300).protocols(httpProtocol)

}