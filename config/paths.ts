import path from 'path';

const paths = {
  resolveSrc: (relativePath = '') => path.resolve(__dirname, '../src/', relativePath),
  resolveRoot: (relativePath = '') => path.resolve(__dirname, '../', relativePath),
};

export default paths;
