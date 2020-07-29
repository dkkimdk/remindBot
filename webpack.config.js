const path = require('path');const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

module.exports = {  //This property defines where the application starts  

    
    entry:'./src/client/index.tsx',
  //This property defines the file path and the file name which will be used for deploying the bundled file  
    output:{    path: path.join(__dirname, '/dist'),    filename: 'bundle.js'  },
    resolve: {
        extensions: ['.js','.ts', '.tsx']
    },
  //Setup loaders  
    module: {    
        rules: [      
            {        
                test: /\.tsx$/,         
                exclude: /node_modules/,        
                use: {          
                    loader: 'ts-loader'        
                }      
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
        ]  
    },
    
// Setup plugin to use a HTML file for serving bundled js files 
    plugins: [    
        new HtmlWebpackPlugin(
            {      
                template: './src/client/index.html'    
            }
            )  
        ]
    }