module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            '@/components': './src/components',
            '@/screens': './src/screens',
            '@/store': './src/store',
            '@/utils': './src/utils',
            '@/types': './src/types',
            '@/services': './src/services',
            '@/assets': './src/assets',
          },
        },
      ],
    ],
  };
};
