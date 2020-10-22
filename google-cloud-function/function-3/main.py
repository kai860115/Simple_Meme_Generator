import requests
import pymongo
import json


def history(request):

    request_json = request.get_json()
    
    client = pymongo.MongoClient("mongodb+srv://<user>:<password>@cluster0.pee1e.mongodb.net/<dbname>?retryWrites=true&w=majority")
    mydb = client.test
    mycol = mydb.history

    if request.method == 'OPTIONS':
        # Allows GET requests from any origin with the Content-Type
        # header and caches preflight response for an 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)

    # Set CORS headers for the main request
    headers = {
        'Access-Control-Allow-Origin': '*'
    }

    try:
        data=dict()
        data['history'] = []
        for x in mycol.find():
            data['history'].append(x['url'])

    except Exception as e:
        return (e, 200, headers)

    return (json.dumps(data), 200, headers)