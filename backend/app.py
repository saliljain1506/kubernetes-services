from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route("/api/price")
def bitcoin_price():
    # Fetch Bitcoin price from an external API (CoinGecko)
    response = requests.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
    data = response.json()
    return jsonify(data)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

