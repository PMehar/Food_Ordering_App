import React from "react";
import reactDOM from "react-dom/client";

const Header = ()=>{
    return(
        <div className= "header">
            <div className="logo_container">
                <img className="logo" alt=" App logo" src="data:image/png;base64,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" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    )
}

const resList =  [
    {
      "info": {
        "id": "690202",
        "name": "FreshMenu",
        "cloudinaryImageId": "6c4de7b481d3614370e5062b2f33e7d6",
        "locality": "CHANDU STUDIO COMPOUND",
        "areaName": "Kalina",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Continental",
          "Chinese",
          "Oriental",
          "Asian",
          "Healthy Food",
          "Fast Food",
          "Indian",
          "Desserts"
        ],
        "avgRating": 4.1,
        "parentId": "398",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "promoted": true,
        "adTrackingId": "cid=16232964~p=1~adgrpid=16232964#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=690202~eid=21dd8bb8-b1d0-4f94-bc5d-f8b212a42795~srvts=1723003521758~collid=45995",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "EVERY ITEM",
          "subHeader": "@ ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=690202",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "20740",
        "name": "Ayyappan Pure Veg",
        "cloudinaryImageId": "e2a1bdc72ad56cf58a802efb303c2a2a",
        "locality": "Chembur",
        "areaName": "Chembur",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "South Indian",
          "Chinese",
          "North Indian",
          "Beverages"
        ],
        "avgRating": 4.5,
        "parentId": "334392",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 4.7,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "1K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=20740",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "208111",
        "name": "Jain Dugdhalay (sneh)",
        "cloudinaryImageId": "apfvuiouttid0a5lpkin",
        "locality": "Ghatkopar Vikhroli",
        "areaName": "Ghatkopar West",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Sweets",
          "Desserts",
          "Bengali",
          "Indian",
          "Ice Cream",
          "Jain",
          "Use code VADAPAV10 to avail this offer!"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "108868",
        "avgRatingString": "4.7",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=208111",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "414109",
        "name": "R S Mani Cafe",
        "cloudinaryImageId": "mrigkdrv0v2obmc2axeo",
        "locality": "Tilak Nagar",
        "areaName": "Chembur",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "253181",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 22:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹40 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=414109",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "328134",
        "name": "Sandwizzaa- Mumbai's Best Sandwich",
        "cloudinaryImageId": "c8b7881c4c04ff816d4e356a106e7132",
        "locality": "Swastik Industrial Estate",
        "areaName": "Santacruz East",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Snacks",
          "Fast Food",
          "Beverages",
          "Jain"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "2484",
        "avgRatingString": "4.6",
        "totalRatingsString": "5K+",
        "promoted": true,
        "adTrackingId": "cid=16417594~p=2~adgrpid=16417594#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=328134~eid=3bc3f081-2ba3-49a2-bdad-0622c5c1b654~srvts=1723003521758~collid=45995",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                    "description": "Delivery!"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹75 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=328134",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "11239",
        "name": "Thambbi",
        "cloudinaryImageId": "t6av3q7weumzdozcmowp",
        "locality": "Kurla West",
        "areaName": "Kurla West",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "South Indian",
          "Punjabi",
          "Snacks",
          "Thalis"
        ],
        "avgRating": 4.5,
        "parentId": "2527",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 23:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "1K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=11239",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "3325",
        "name": "Guru Kripa (Sion West)",
        "cloudinaryImageId": "676c41379dada74a9ceaf9cefd327759",
        "locality": "Sion",
        "areaName": "Sion",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Fast Food",
          "Snacks",
          "Sweets",
          "North Indian"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "92042",
        "avgRatingString": "4.7",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 22:50:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "10K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=3325",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "676001",
        "name": "Third Wave Coffee",
        "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
        "locality": "Equinox Business Park",
        "areaName": "Kurla",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Cafe",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.6,
        "parentId": "274773",
        "avgRatingString": "4.6",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=676001",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "709883",
        "name": "Chaayos Chai+Snacks=Relax",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_709883.JPG",
        "locality": "NEAR WADALA TRUCK TERMINAL",
        "areaName": "WADALA EAST",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Chaat",
          "Desserts",
          "Home Food",
          "Italian",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "Sweets"
        ],
        "avgRating": 4.6,
        "parentId": "281782",
        "avgRatingString": "4.6",
        "totalRatingsString": "500+",
        "promoted": true,
        "adTrackingId": "cid=15958728~p=3~adgrpid=15958728#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=709883~eid=4f37a602-3edb-40a7-a858-df57592cc22d~srvts=1723003521758~collid=45995",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 6.3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "6.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
              "description": "Delivery!"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                    "description": "Delivery!"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹199"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=709883",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "519308",
        "name": "Bhatt Vishranti Gruh",
        "cloudinaryImageId": "bgup6sdx9j1iyd8irdfg",
        "locality": "Chembur",
        "areaName": "Chembur",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Maharashtrian",
          "Snacks"
        ],
        "avgRating": 4.4,
        "parentId": "310191",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 22:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "1K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=519308",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "434898",
        "name": "Mahavir Sweets And Farsan",
        "cloudinaryImageId": "ooszkw0ld43edcs2hyar",
        "locality": "Lbs Road",
        "areaName": "Ghatkopar Vikhroli",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Desserts",
          "Snacks",
          "Sweets"
        ],
        "avgRating": 4.7,
        "parentId": "262508",
        "avgRatingString": "4.7",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 20:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=434898",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "539135",
        "name": "Dosa Attack",
        "cloudinaryImageId": "dfolnuxhhxyw4vhcdkh8",
        "locality": "Kharghar",
        "areaName": "Chembur",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 4.1,
        "parentId": "74182",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹90"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.5",
            "ratingCount": "10+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=539135",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "855090",
        "name": "abCoffee",
        "cloudinaryImageId": "a38ec7d5b2917a63db7f412ecf9ebea0",
        "locality": "Bandra Kurla Complex",
        "areaName": "Scruz Bandra East",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Cafe",
          "Bakery",
          "Beverages",
          "Coffee",
          "Tea",
          "Snacks",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "341177",
        "avgRatingString": "4.5",
        "totalRatingsString": "50+",
        "promoted": true,
        "adTrackingId": "cid=15966879~p=4~adgrpid=15966879#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=855090~eid=d7edb763-4f7d-4845-8796-a92437100db4~srvts=1723003521758~collid=45995",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 19:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                    "description": "Delivery!"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=855090",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "41485",
        "name": "VIG",
        "cloudinaryImageId": "sdrmd8ssgiuruyvxklyo",
        "locality": "Chembur",
        "areaName": "Chembur",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian"
        ],
        "avgRating": 4.5,
        "parentId": "223087",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 5.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "5.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "5K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=41485",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "46487",
        "name": "Maheshwari Dosa",
        "cloudinaryImageId": "vnh4r0a8dmyk2rwjqtct",
        "locality": "Chandivali",
        "areaName": "Marol Sakinaka",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "472342",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "UPTO ₹45"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=46487",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "11952",
        "name": "Maharana Kamath",
        "cloudinaryImageId": "nmqohjbwk1codqydtuwi",
        "locality": "Mumbai CST Area",
        "areaName": "Mumbai CST Area",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Street Food",
          "North Indian",
          "Chinese",
          "Gujarati",
          "South Indian",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "129954",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-07 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "FREE ITEM"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.8",
            "ratingCount": "1K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=11952",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    }
  ]
    
const RestaurantCard = ({resData})=>{
    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    const{deliveryTime}= resData?.info?.sla;

    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <div className="img_container">
                <img className="img_1" alt="restaurant logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>  
            </div>
           
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} Stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    )
}



const Body = ()=>{
    return(
        <div className ="body">
            <div className="search">Search</div>
            <div className="res_Container">
                {/* restaurant cards */}
               {resList.map((restaurant)=>(
                <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
               ))}  
               
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return(
        <div className="app">
            {/* //header
            //body
            //footer */}
            <Header/>
            <Body/>
        </div>
    )
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)