const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

config = {

  context: path.resolve(__dirname, '.'),

   entry: './src/main.js',
	
   output: {
      path:'/Users/hyalamat/learn-and-dev/ui/react/react-base-app',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 3000
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015','react']
            }
         },
         
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader?minimize=1&modules=true&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]&camelCase',
                    'postcss-loader?sourceMap=inline'
                ]
            })
        }


      ]
   },


   plugins: [
        new ExtractTextPlugin('bundle.css'),
    ]

}

module.exports = config;
