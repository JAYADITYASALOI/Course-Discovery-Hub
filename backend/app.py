from flask import Flask, request, jsonify
from flask_cors import CORS
import re

app = Flask(__name__)
CORS(app)

INDIAN_MOBILE_REGEX = re.compile(r"^[6-9]\d{9}$")


def is_valid_indian_mobile_number(phone_number: str) -> bool:
    return bool(INDIAN_MOBILE_REGEX.fullmatch(phone_number))


@app.post("/api/message")
def api_message():
    data = request.get_json(silent=True)

    if data is None:
        return jsonify(
            success=False,
            message="Request body must be valid JSON.",
            errors={"request": "Invalid or missing JSON body."},
        ), 400

    phone_number = str(data.get("phone_number", "")).strip()
    message = str(data.get("message", "")).strip()

    errors = {}

    if not phone_number:
        errors["phone_number"] = "phone_number is required."
    elif not is_valid_indian_mobile_number(phone_number):
        errors["phone_number"] = "phone_number must be a valid Indian mobile number."

    if not message:
        errors["message"] = "message is required."

    if errors:
        return jsonify(
            success=False,
            message="Validation failed.",
            errors=errors,
        ), 400

    return jsonify(
        success=True,
        message="Message accepted successfully.",
        data={
            "phone_number": phone_number,
            "message": message,
        },
    ), 200


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)