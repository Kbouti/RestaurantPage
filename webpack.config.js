const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    `style-loader`,
                    `css-loader`,
                ],
            },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
    },
};



// I'm working on the restaurant page project and I'm struggling to publish my project on github. 
// When accessed through dist/index.html my site works fine and has css and images. 

// When accessing from github the images do not load. The "alt" text appears instead of the image.  I have the necessary css and image loaders in my webpack.config.js file.
// 

