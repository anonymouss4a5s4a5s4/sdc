# 🛥️ Boat Detection with YOLOv8 + MongoDB

This project detects boats in images using YOLOv8 and stores results in MongoDB.

## Features
- Upload image
- Detect boat types
- Store detection results (confidence, count, image URL) in MongoDB

## Setup
1. Clone repo
2. Install requirements:
    ```bash
    pip install -r requirements.txt
    ```

3. Run:
    ```bash
    python run.py
    ```

## Directory Structure
📁 notebooks/ - YOLO training & validation  
📁 scripts/ - Detection + DB scripts  
📁 config/ - MongoDB connection  
