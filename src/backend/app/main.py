from ultralytics import YOLO
import os
from PIL import Image
import numpy as np
import cv2
from fastapi import FastAPI
from fastapi.responses import FileResponse
import base64
import requests
import os

app = FastAPI()
model_path = os.path.join(os.getcwd(), 'models', 'best.pt')
model = YOLO(model_path)


def predict(image):
    results = model(image)
    image = np.array(image)
    return results, image


def to_list(results):
    return results[0].boxes.cpu().xywh.tolist()


def overlay_rectangles(image, xyxys):
    for xyxy in xyxys:
        cv2.rectangle(
            image,
            (
                int(xyxy[0]),
                int(xyxy[1]),
                int(xyxy[2]),
                int(xyxy[3]),
            ),
            (0, 255, 0),
            3,
        )

    img = Image.fromarray(cv2.cvtColor(image, cv2.COLOR_GRAY2RGB))
    return img


# results, image = predict(Image.open("test2.jpg"))
# results = to_list(results)
# print("done")

# print("rec")


@app.get("/inference")
async def inference(
    center,
    zoom=17,
):
    print(center)
    r = requests.get(
        f"https://maps.googleapis.com/maps/api/staticmap?center={center}&zoom={zoom}&scale=1&maptype=satellite&size=1920x1080&key={os.environ['NEXT_PUBLIC_GOOGLE_MAPS_KEY']}",
        "res.png",
    )

    with open("res.png", "wb") as f:
        f.write(r.content)

    img = Image.open("res.png")
    # return FileResponse("res.png")
    results, image = predict(img)
    results = to_list(results)
    overlay_rectangles(image, results).save("overlayed.png")
    with open("res.png", "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
    return {"image": encoded_string, "boxes": results}


@app.get("/")
async def resp():
    return {"message": "server up"}
