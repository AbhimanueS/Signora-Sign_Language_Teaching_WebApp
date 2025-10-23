import cv2
import os
import mediapipe as mp

capture = cv2.imread("/Users/abhinava/Downloads/archive (3)/asl_dataset/asl_dataset/z/hand5_z_dif_seg_5_cropped.jpeg")
img = cv2.cvtColor(capture,cv2.COLOR_BGR2RGB)

mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles

hands = mp_hands.Hands(static_image_mode=True,min_detection_confidence=0.3)

mp_drawing.draw_landmarks(
    capture,
    hands.process(img).multi_hand_landmarks[0],
    mp_hands.HAND_CONNECTIONS,
    mp_drawing_styles.get_default_hand_landmarks_style(),
    mp_drawing_styles.get_default_hand_connections_style()
)
cv2.imshow("Frame",capture)
cv2.waitKey(0)