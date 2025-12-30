import * as migration_20251230_090605 from './20251230_090605';
import * as migration_20251230_110118 from './20251230_110118';

export const migrations = [
  {
    up: migration_20251230_090605.up,
    down: migration_20251230_090605.down,
    name: '20251230_090605',
  },
  {
    up: migration_20251230_110118.up,
    down: migration_20251230_110118.down,
    name: '20251230_110118'
  },
];
