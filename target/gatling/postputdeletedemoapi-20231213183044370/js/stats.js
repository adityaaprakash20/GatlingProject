var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "378",
        "ok": "378",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "777",
        "ok": "777",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "282",
        "ok": "282",
        "ko": "-"
    },
    "percentiles1": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "percentiles2": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "percentiles3": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "percentiles4": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 33
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 67
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.75",
        "ok": "0.75",
        "ko": "-"
    }
},
contents: {
"req_restapi-put-upd-b98bb": {
        type: "REQUEST",
        name: "RESTAPI_PUT_UpdateUser",
path: "RESTAPI_PUT_UpdateUser",
pathFormatted: "req_restapi-put-upd-b98bb",
stats: {
    "name": "RESTAPI_PUT_UpdateUser",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "378",
        "ok": "378",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "677",
        "ok": "677",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "299",
        "ok": "299",
        "ko": "-"
    },
    "percentiles1": {
        "total": "677",
        "ok": "677",
        "ko": "-"
    },
    "percentiles2": {
        "total": "827",
        "ok": "827",
        "ko": "-"
    },
    "percentiles3": {
        "total": "946",
        "ok": "946",
        "ko": "-"
    },
    "percentiles4": {
        "total": "970",
        "ok": "970",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 50
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
        "ko": "-"
    }
}
    },"req_restapi-post-cr-8d391": {
        type: "REQUEST",
        name: "RESTAPI_POST_CreateUser",
path: "RESTAPI_POST_CreateUser",
pathFormatted: "req_restapi-post-cr-8d391",
stats: {
    "name": "RESTAPI_POST_CreateUser",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "percentiles2": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "percentiles3": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "percentiles4": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 100
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.25",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
