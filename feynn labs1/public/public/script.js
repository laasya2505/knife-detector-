const modelURL = 'https://tfhub.dev/google/tfjs-model/mobilenet_v1_1.0_224/1/default/1/model.json';

let model;
(async () => {
    console.log('Loading model...');
    model = await tf.loadGraphModel(modelURL);
    console.log('Model loaded!');
})();


document.getElementById('predictButton').addEventListener('click', async () => {
    const imageUpload = document.getElementById('imageUpload');
    if (!imageUpload.files.length) {
        alert('Please upload an image!');
        return;
    }

    const file = imageUpload.files[0];
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = async () => {
        const tensor = tf.browser.fromPixels(img)
            .resizeNearestNeighbor([224, 224])
            .toFloat()
            .expandDims()
            .div(255.0);

        const predictions = await model.predict(tensor).data();
        const classes = await fetch('https://storage.googleapis.com/download.tensorflow.org/data/imagenet_class_index.json').then(res => res.json());

        const knifeClass = Object.entries(classes).find(([_, value]) => value[1].toLowerCase().includes('knife'));
        const isKnife = predictions[knifeClass[0]] > 0.5;

        document.getElementById('result').innerText = isKnife ? "It's a Knife" : "It's Not a Knife";
    };
});
