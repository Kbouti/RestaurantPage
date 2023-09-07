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
// When accessed through dist/index.html my site works fine and has css and images, bundled with webpack. 

// When accessed through github the images do not load. The "alt" text appears instead of the image.  
// I have the necessary css and image loaders in my webpack.config.js file and I believe I have the images linked right as they work when I open dist/index.html. 
// 
// The instructions on how to deploy to github first ask to remove the dist directory from the .gitignore file, but i never made a .gitignore file. So I moved on, committed changes, then ran 
//
//npm run build
//
//git subtree push --prefix dist origin gh-pages

//After giving it a few minutes, I can view my project at  https://kbouti.github.io/RestaurantPage/ but the images aren't there. How do I get my images to load? 
//I looked back to see where I missed the part about a gitignore file. In step 2 of the assignment there's a hint that says "It is customary to add a .gitignore file" but didn't provide much more instruction, so I moved on to the next step. 
//Did my lack of understanding of the .fitignore file somehow cause issues with my images? Or is there something else I'm missing? Please and thank you in advance for any suggestions
