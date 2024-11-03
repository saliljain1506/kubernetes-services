from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/api/price', methods=['GET'])
def get_bitcoin_price():
    response = requests.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
    data = response.json()
    price = data.get('bpi', {}).get('USD', {}).get('rate', 'N/A')
    return jsonify({'price': price})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

