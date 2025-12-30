import * as migration_20251230_090605 from './20251230_090605';

export const migrations = [
  {
    up: migration_20251230_090605.up,
    down: migration_20251230_090605.down,
    name: '20251230_090605'
  },
];
