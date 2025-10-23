import cv2
import mediapipe as mp
import os
from tqdm import tqdm 
import numpy as np 
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, classification_report
import joblib
DATA_DIR = '/Users/abhinava/Downloads/dataset/asl_alphabet_train/asl_alphabet_train'

data = []
labels = []

# initialize mediapipe hands
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=True, 
                       max_num_hands=1, 
                       min_detection_confidence=0.3)


for class_label in os.listdir(DATA_DIR):
    folder_path = os.path.join(DATA_DIR, class_label)
    for img_file in tqdm(os.listdir(folder_path), desc=f"Processing {class_label}"):
        img_path = os.path.join(folder_path, img_file)
        image = cv2.imread(img_path)
        if image is None:
            continue  # skip
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        results = hands.process(image_rgb)

        if results.multi_hand_landmarks:
            landmark_list = []
            for lm in results.multi_hand_landmarks[0].landmark:
                landmark_list.extend([lm.x, lm.y, lm.z])
            data.append(landmark_list)
            labels.append(class_label)

X = np.array(data)
y = np.array(labels)

encoder = LabelEncoder()
y_encoded = encoder.fit_transform(y)

X_train, X_test, y_train, y_test = train_test_split(X,y_encoded,test_size=0.2, random_state=42,stratify=y_encoded)

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train,y_train)

y_pred = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred))

model = joblib.dump(model,'asl_model.pkl')
encoder = joblib.dump(encoder,'label_encoder.pkl')