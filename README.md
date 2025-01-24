
# Knife Detection Web Application

This project is a web application that detects whether an uploaded image contains a knife or not. The app uses TensorFlow.js and a pretrained MobileNet model. It is hosted on Render.



## Features
1. Upload an Image: Users can upload an image for analysis.
2. Knife Detection: The app classifies the image as "Knife" or "Not a Knife."
3. Web Hosting: The app is deployed on Render for online access.

---

## Directory Structure
```
project/
├── public/
│   ├── index.html        # Main HTML file
│   ├── script.js         # TensorFlow.js integration
│   ├── style.css         # Styling for the app
│   └── model/            # TensorFlow.js model files
│       ├── model.json
│       └── weights.bin
├── server.js             # Node.js server script
├── package.json          # Project metadata and dependencies
└── README.md             # Project instructions
```

---

## Prerequisites
1. Node.js (>=14.x)
2. Yarn or npm
3. GitHub account (for deploying on Render)

---

## Local Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd project
```

### 2. Install Dependencies
Using Yarn:
```bash
yarn install
```
Using npm:
```bash
npm install
```

### 3. Start the Server
Using Yarn:
```bash
yarn start
```
Using npm:
```bash
npm start
```

The app will be available at `http://localhost:3000`.

---

## Deploying on Render

### 1. Create a Render Account
Go to [Render.com](https://render.com) and create an account.

### 2. Link Your Repository
1. Push your project to GitHub.
2. Log in to Render, and click **New > Web Service**.
3. Select your repository.

### 3. Configure Render Settings
- **Build Command:**
  ```bash
  yarn install
  ```
  or
  ```bash
  npm install
  ```

- **Start Command:**
  ```bash
  yarn start
  ```
  or
  ```bash
  npm start
  ```

- Instance Type: Free Tier.

### 4. Deploy
Click Create Web Service. Render will automatically deploy your app and provide a URL.

---

## TensorFlow.js Model

### 1. Using Pretrained MobileNet
The app uses the MobileNet pretrained model hosted on TensorFlow.js. Update the `script.js` file if using the hosted model:
```javascript
const modelURL = 'https://tfhub.dev/google/tfjs-model/mobilenet_v1_1.0_224/1/default/1/model.json';
```

### 2. Hosting Locally
Download `model.json` and `weights.bin` files from [MobileNet GitHub](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) and place them in the `public/model/` directory.



## Acknowledgements
- TensorFlow.js
- Render Hosting Platform


## Troubleshooting
1. **Render Deployment Fails**:
   - Ensure `package.json` has correct `start` script.
   - Check Node.js version compatibility.

2. **TensorFlow.js Errors**:
   - Verify the `model.json` and `weights.bin` paths.
   - Use the hosted model URL if local hosting fails.





