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
        "positive_keywords": [], 
        "negative_keywords": [],
    } for x in data]

    
    return returnData



def getApps():
    db = connect()
    app = db.App

    data = list(app.find({}))

    returnData = [{
        "app_id": str(x["_id"]),
        "app_name": x["name"],
        "app_image": x["image"],
        "app_category": x['category'],
        "app_rating": x['rating'],
        # positive_keywords
        # negative_keywords
    } for x in data]

    return returnData

# def getAppsByKeyword(keyword):
#     db = connect()
#     app = db.App

#     data = list(app.find({}))

#     returnData = [{
#         "app_id": str(x["_id"]),
#         "app_name": x["name"],
#         "app_image": x["image"],
#         "app_category": x['category'],
#         "app_rating": x['rating'],
#         # positive_keywords
#         # negative_keywords
#     } for x in data]

#     print(keyword)
#     print(returnData[0])

def getAppsContent(app_id):
    db = connect()
    app = db.App
    app_id = ObjectId(app_id)

    data = app.find_one({ '_id': app_id })

    returnData = {
        'app_id': str(data['_id']),
        'app_name': data['name'],
        'app_image': data['image'], 
        'app_category': data['category'], 
        'rating': data['rating'],
        # 'keywords': string[],
    },

    return returnData