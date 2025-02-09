const path = require('path');

module.exports = {
  entry: './src/index.js',  // Point d'entrée de ton application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // Fichier de sortie pour ton code JavaScript
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Utiliser Babel pour les fichiers JavaScript
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,  // Traiter les fichiers CSS avec les loaders nécessaires
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',  // Utilisation de PostCSS (pour Tailwind)
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Extensions de fichiers à résoudre
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,  // Le port sur lequel le serveur sera lancé
  },
};
