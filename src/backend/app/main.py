from ultralytics import YOLO
import os
from PIL import Image
import numpy as np
import cv2
from fastapi import FastAPI
from fastapi.responses import FileResponse
import base64
import requests
from dotenv import load_dotenv

app        = FastAPI()
model_path = os.path.join(os.getcwd(), 'models', 'best.pt')
model      = YOLO(model_path)


load_dotenv()
api_key    = os.getenv("NEXT_PUBLIC_GOOGLE_MAPS_KEY")


def predict(image):
    """
    Predicts the results for the given image using the model.

    Parameters:
        image (numpy.ndarray): The input image to be predicted.

    Returns:
        tuple: A tuple containing the predicted results and the input image.

    """
    results = model(image)
    image = np.array(image)
    return results, image


def to_list(results):
    """
    Converts the bounding box coordinates from a PyTorch tensor to a list.

    Args:
        results (Tensor): A PyTorch tensor containing bounding box coordinates.

    Returns:
        list: A list of bounding box coordinates in the format [x, y, width, height].

    """
    return results[0].boxes.cpu().xywh.tolist()


def overlay_rectangles(image, xyxys):
    """
    Overlay rectangles on an image.

    Args:
        image (numpy.ndarray): The input image.
        xyxys (list): List of bounding box coordinates in the format [x1, y1, x2, y2].

    Returns:
        PIL.Image.Image: The image with overlaid rectangles.

    """
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




@app.get("/inference")
async def inference(
    center,
    zoom=17,
):
    """
    Perform inference on a given center location and zoom level.

    Args:
        center (str): The center location for the static map.
        zoom (int, optional): The zoom level for the static map. Defaults to 17.

    Returns:
        dict: A dictionary containing the encoded image and the predicted bounding boxes.
    """
    
    r = requests.get(
        f"https://maps.googleapis.com/maps/api/staticmap?center={center}&zoom={zoom}&scale=1&maptype=satellite&size=1920x1080&key={api_key}",
        "res.png",
    )

    with open("res.png", "wb") as f:
        f.write(r.content)

    img            = Image.open("res.png")
    results, image = predict(img)
    results        = to_list(results)
    overlay_rectangles(image, results).save("overlayed.png")
    with open("res.png", "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
    return {"image": encoded_string, "boxes": results}




@app.get("/")
async def resp():
    """
    Returns a JSON response with a message indicating that the server is up.

    Returns:
        dict: A dictionary containing the message "server up".
    """
    return {"message": "server up"}
