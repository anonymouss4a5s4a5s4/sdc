import os

MONGODB_URI = os.getenv("MONGODB_URI", "mongodb+srv://<username>:<password>@<cluster>.mongodb.net")
DB_NAME = "boat_detection"
COLLECTION_NAME = "detections"


from scripts.detect_and_store import detect_and_store

# Run prediction and store result
detect_and_store("test_images/test.jpg")
