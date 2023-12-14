var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7",
        "ok": "7",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "325",
        "ok": "325",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1284",
        "ok": "1284",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "628",
        "ok": "628",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "349",
        "ok": "349",
        "ko": "-"
    },
    "percentiles1": {
        "total": "399",
        "ok": "399",
        "ko": "-"
    },
    "percentiles2": {
        "total": "839",
        "ok": "839",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1193",
        "ok": "1193",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1266",
        "ok": "1266",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 71
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.4",
        "ok": "1.4",
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
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "325",
        "ok": "325",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "982",
        "ok": "982",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "483",
        "ok": "483",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "251",
        "ok": "251",
        "ko": "-"
    },
    "percentiles1": {
        "total": "365",
        "ok": "365",
        "ko": "-"
    },
    "percentiles2": {
        "total": "399",
        "ok": "399",
        "ko": "-"
    },
    "percentiles3": {
        "total": "865",
        "ok": "865",
        "ko": "-"
    },
    "percentiles4": {
        "total": "959",
        "ok": "959",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 20
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
        "total": "1",
        "ok": "1",
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
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "696",
        "ok": "696",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1284",
        "ok": "1284",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "990",
        "ok": "990",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "294",
        "ok": "294",
        "ko": "-"
    },
    "percentiles1": {
        "total": "990",
        "ok": "990",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1137",
        "ok": "1137",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1255",
        "ok": "1255",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1278",
        "ok": "1278",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.4",
        "ok": "0.4",
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
