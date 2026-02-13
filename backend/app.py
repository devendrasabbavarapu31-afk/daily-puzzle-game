from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import date

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
db = SQLAlchemy(app)

# -------------------- Database Model --------------------
class Puzzle(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(200), nullable=False)
    answer = db.Column(db.String(50), nullable=False)
    hint = db.Column(db.String(100))
    puzzle_date = db.Column(db.String(20), unique=True)

with app.app_context():
    db.create_all()

# -------------------- Routes --------------------

@app.route("/")
def home():
    return "Backend running successfully 🚀"

@app.route("/daily-puzzle", methods=["GET"])
def daily_puzzle():
    today = str(date.today())
    puzzle = Puzzle.query.filter_by(puzzle_date=today).first()

    if not puzzle:
        puzzle = Puzzle(
            question="Find the next number: 2, 6, 12, 20, ?",
            answer="30",
            hint="Multiply n × (n+1)",
            puzzle_date=today
        )
        db.session.add(puzzle)
        db.session.commit()

    return jsonify({
        "id": puzzle.id,
        "question": puzzle.question,
        "hint": puzzle.hint
    })

@app.route("/check-answer", methods=["POST"])
def check_answer():
    data = request.json
    puzzle = Puzzle.query.get(data["puzzle_id"])

    if puzzle and puzzle.answer == data["answer"]:
        return jsonify({"result": "correct"})
    return jsonify({"result": "wrong"})

if __name__ == "__main__":
    app.run(debug=True)
