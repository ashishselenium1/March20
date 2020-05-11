$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/zoho/features/lead.feature");
formatter.feature({
  "name": "Create and Delete Leads",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Lead"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the runmode is Y",
  "keyword": "Given "
});
formatter.match({
  "location": "GenericSteps.checkRunmode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "open browser chrome",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.openBrowser(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:26038\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-V123S32\u0027, ip: \u0027192.168.42.205\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat com.zoho.web.GenericConnector.openBrowser(GenericConnector.java:28)\r\n\tat com.zoho.steps.GenericSteps.openBrowser(GenericSteps.java:53)\r\n\tat ✽.open browser chrome(src/test/resources/com/zoho/features/lead.feature:7)\r\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:26038\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\r\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\r\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\r\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\r\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat com.zoho.web.GenericConnector.openBrowser(GenericConnector.java:28)\r\n\tat com.zoho.steps.GenericSteps.openBrowser(GenericSteps.java:53)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:56)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:77)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:110)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:106)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:606)\r\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\r\n\t... 75 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "navigate to url",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.navigate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "title should be home_page_title",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.validateTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on login_link_xpath",
  "keyword": "When "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I type username_field_id as se.leniumtraining10@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "element password_field_id should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.validateElementPresent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I type password_field_id as Whizdom@2020",
  "keyword": "When "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on crm_xpath",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Creation of Lead",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Lead"
    },
    {
      "name": "@CreateLead"
    }
  ]
});
formatter.step({
  "name": "I click on leads_xpath",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on create_lead_id",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on submenu_leads_xpath",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I type company_id as Microsoft",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I type lead_lastname_id as Gates",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on lead_save_id",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on back_icon_xpath",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "lead with name Gates should be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.validateLeadCreation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/com/zoho/features/login.feature");
formatter.feature({
  "name": "Login to Zoho",
  "description": "  I want to use this to Login",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login to Zoho",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "the runmode is \u003crunmode\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "open browser \u003cbrowser\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "navigate to url",
  "keyword": "And "
});
formatter.step({
  "name": "title should be home_page_title",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on login_link_xpath",
  "keyword": "When "
});
formatter.step({
  "name": "I type username_field_id as \u003cusername\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.step({
  "name": "element password_field_id should be present",
  "keyword": "Then "
});
formatter.step({
  "name": "I type password_field_id as \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.step({
  "name": "login should be \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "runmode",
        "browser",
        "username",
        "password",
        "result"
      ]
    },
    {
      "cells": [
        "Y",
        "chrome",
        "se.leniumtraining10@gmail.com",
        "Whizdom@2020",
        "success"
      ]
    },
    {
      "cells": [
        "N",
        "mozilla",
        "se.len.iumtraining10@gmail.com",
        "Whizdom@2020",
        "failure"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login to Zoho",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the runmode is Y",
  "keyword": "Given "
});
formatter.match({
  "location": "GenericSteps.checkRunmode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "open browser chrome",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.openBrowser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to url",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.navigate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title should be home_page_title",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.validateTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login_link_xpath",
  "keyword": "When "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username_field_id as se.leniumtraining10@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element password_field_id should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.validateElementPresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type password_field_id as Whizdom@2020",
  "keyword": "When "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login should be success",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationSteps.validateLogin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to Zoho",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the runmode is N",
  "keyword": "Given "
});
formatter.match({
  "location": "GenericSteps.checkRunmode(String)"
});
formatter.result({
  "error_message": "org.testng.SkipException: Runmode is N\r\n\tat com.zoho.web.UtilityConnector.skipScenario(UtilityConnector.java:111)\r\n\tat com.zoho.steps.GenericSteps.checkRunmode(GenericSteps.java:46)\r\n\tat ✽.the runmode is N(src/test/resources/com/zoho/features/login.feature:7)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "open browser mozilla",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.openBrowser(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "navigate to url",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.navigate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "title should be home_page_title",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.validateTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on login_link_xpath",
  "keyword": "When "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I type username_field_id as se.len.iumtraining10@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "element password_field_id should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.validateElementPresent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I type password_field_id as Whizdom@2020",
  "keyword": "When "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "login should be failure",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationSteps.validateLogin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});