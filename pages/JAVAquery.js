{
   "size":0,
   "query":{
      "bool":{
         "must":[
            {
               "terms":{
                  "pfno":[
                     "12845",
                     "23884"
                  ],
                  "boost":1.0
               }
            }
         ],
         "filter":[
            {
               "range":{
                  "vt":{
                     "from":"2020-03-01T00:00:00+0900",
                     "to":"2020-05-01T23:59:59+0900",
                     "include_lower":true,
                     "include_upper":true,
                     "boost":1.0
                  }
               }
            }
         ],
         "must_not":[
            {
               "term":{
                  "du_dp.full":{
                     "value":"",
                     "boost":1.0
                  }
               }
            }
         ],
         "adjust_pure_negative":true,
         "boost":1.0
      }
   },
   "_source":{
      "includes":[
         "dpuid",
         "vt",
         "pfno"
      ],
      "excludes":[

      ]
   },
   "aggregations":{
      "by_dimension":{
         "terms":{
            "field":"du_dp.full",
            "size":200,
            "min_doc_count":1,
            "shard_min_doc_count":0,
            "show_term_doc_count_error":false,
            "order":[
               {
                  "pageviews":"desc"
               },
               {
                  "_key":"asc"
               }
            ]
         },
         "aggregations":{
            "pageviews":{
               "value_count":{
                  "field":"_id"
               }
            },
            "visits":{
               "cardinality":{
                  "field":"sid"
               }
            },
            "visitors":{
               "cardinality":{
                  "field":"uid"
               }
            },
            "duration":{
               "sum":{
                  "field":"duration"
               }
            }
         }
      }
   }
}