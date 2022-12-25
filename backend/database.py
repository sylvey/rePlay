import pymongo
from bson.objectid import ObjectId
import re

def connect():
    client = pymongo.MongoClient("mongodb+srv://mongodb:mongodb@cluster0.rcmouet.mongodb.net/?retryWrites=true&w=majority")
    db = client.rePlay
    return db

def getSearchApps(keyword):
    db = connect()
    appCl = db.App
    data = list(appCl.find({'name':{'$regex':keyword}}))

    returnData = [{
        "app_id": str(x["_id"]),
        "app_name": x["name"],
        "app_image": x["image"], 
        "app_category": x['category'], 
        "app_rating": x['rating'],
        "advantage": [ keyword.find_one({"_id": ObjectId(y)})["text"] for y in x["advantage"] ],
        "disadvantage": [ keyword.find_one({"_id": ObjectId(y)})["text"] for y in x["disadvantage"] ]
    } for x in data]

    
    return returnData



def getApps():
    db = connect()
    app = db.App
    keyword = db.Keyword

    data = list(app.find({}))

    returnData = [{
        "app_id": str(x["_id"]),
        "app_name": x["name"],
        "app_image": x["image"],
        "app_category": x['category'],
        "app_rating": x['rating'],
        "advantage": [ keyword.find_one({"_id": ObjectId(y)})["text"] for y in x["advantage"] ],
        "disadvantage": [ keyword.find_one({"_id": ObjectId(y)})["text"] for y in x["disadvantage"] ]
    } for x in data]

    print(returnData[10])
    return returnData

def getAppsContent(app_id):
    db = connect()
    app = db.App
    keyword = db.Keyword
    app_id = ObjectId(app_id)

    data = app.find_one({ '_id': app_id })

    returnData = {
        'app_id': str(data['_id']),
        'app_name': data['name'],
        'app_image': data['image'], 
        'app_category': data['category'], 
        'rating': data['rating'],
        'keywords': [ keyword.find_one({"_id": ObjectId(y)})["text"] for y in data["keyword"] ],
    },

    return returnData

def getAppAspect(app_id, aspect):
    db = connect()
    appCl = db.App
    reviewCl = db.Review
    app_id = ObjectId(app_id)
    

    appData = appCl.find_one({ '_id': app_id })
    print(appData["aspect_review"][aspect])
    reviewData = list(reviewCl.find({"_id": {"$in": [ObjectId(x) for x in appData["aspect_review"][aspect]]}}))
    print(reviewData)
    returnData = [{
        "review_id": str(x["_id"]),
        "text": x["text"],
        "sentiment": x["sentiment"]
    } for x in reviewData]


    return returnData