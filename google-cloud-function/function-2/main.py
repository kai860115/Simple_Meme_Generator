import requests
import pymongo
import json
import random


def gen(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
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

    URL = 'https://api.imgflip.com/caption_image'
    params = {
        'username': <username>,
        'password': <password>,
        'template_id': request_json['id'],
        'text0': request_json['text0'],
        'text1': request_json['text1']
    }


    try:
        response = requests.request('POST', URL, params=params).json()

        if response["success"] == True:
            x = mycol.insert_one({"url": response['data']['url']})

    except: 
        pass

    return (response, 200, headers)
