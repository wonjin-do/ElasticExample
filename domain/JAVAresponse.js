{
    "took":10,
    "timed_out":false,
    "_shards":{
       "total":45,
       "successful":45,
       "skipped":0,
       "failed":0
    },
    "hits":{
       "total":0,
       "max_score":null,
       "hits":[
 
       ]
    },
    "aggregations":{
       "sterms#by_dimension":{
          "doc_count_error_upper_bound":0,
          "sum_other_doc_count":0,
          "buckets":[
             {
                "key":"http://demo.logger.co.kr",
                "doc_count":367,
                "sum#duration":{
                   "value":7293.0
                },
                "cardinality#visitors":{
                   "value":17
                },
                "cardinality#visits":{
                   "value":30
                },
                "value_count#pageviews":{
                   "value":367
                }
             },
             {
                "key":"http://bizspring.co.kr",
                "doc_count":9,
                "sum#duration":{
                   "value":71.0
                },
                "cardinality#visitors":{
                   "value":2
                },
                "cardinality#visits":{
                   "value":4
                },
                "value_count#pageviews":{
                   "value":9
                }
             },
             {
                "key":"http://demo11.logger.co.kr",
                "doc_count":1,
                "sum#duration":{
                   "value":0.0
                },
                "cardinality#visitors":{
                   "value":1
                },
                "cardinality#visits":{
                   "value":1
                },
                "value_count#pageviews":{
                   "value":1
                }
             }
          ]
       }
    }
 }