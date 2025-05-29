from flask import Flask, request, jsonify, session
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = 'modtech'
CORS(app)

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    if data['username'] == 'admin' and data['password'] == 'modtech123':
        session['user'] = 'admin'
        return jsonify({"status": "success", "role": "admin"})
    return jsonify({"status": "fail"})

if __name__ == '__main__':
    app.run(debug=True)
