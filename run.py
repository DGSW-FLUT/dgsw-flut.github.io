from flask import Flask, Response

app = Flask(__name__)

@app.route('/', defaults={'u_path': ''})
@app.route('/<path:u_path>')
def map(u_path: str):
    print(repr(u_path))
    if u_path == '': 
        u_path = 'index.html'

    with open(u_path, 'rb') as file:
        if u_path.endswith('.css'):
            return Response(file.read(), mimetype='text/css')
        elif u_path.endswith('.js'): 
            return Response(file.read(), mimetype='text/plain')
        else:
            return file.read()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
