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
      "by_date":{
         "date_histogram":{
            "field":"vt",
            "format":"yyyy-MM-dd",
            "time_zone":"Asia/Seoul",
            "interval":"1d",
            "offset":0,
            "order":{
               "_key":"asc"
            },
            "keyed":false,
            "min_doc_count":0
         },
         "aggregations":{
            "cartin":{
               "sum":{
                  "script":{
                     "source":"doc['pi'].size() != 0 && doc['pi'].value == 'OCI' ? 1 : 0",
                     "lang":"painless"
                  }
               }
            },
            "buy":{
               "sum":{
                  "script":{
                     "source":"doc['pi'].size() != 0 && doc['pi'].value == 'ODR' ? 1 : 0",
                     "lang":"painless"
                  }
               }
            },
            "revenue":{
               "sum":{
                  "field":"rvn.oa",
                  "missing":0
               }
            },
            "register":{
               "sum":{
                  "script":{
                     "source":"doc['pi'].size() != 0 && doc['pi'].value == 'RGR' ? 1 : 0",
                     "lang":"painless"
                  }
               }
            },
            "solditem":{
               "sum":{
                  "field":"rvn.op",
                  "missing":0
               }
            }
         }
      }
   }
}