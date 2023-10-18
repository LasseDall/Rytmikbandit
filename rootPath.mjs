import { fileURLToPath } from 'url';
import { dirname } from 'path';

const currentModuleURL = import.meta.url;
const currentModulePath = fileURLToPath(currentModuleURL);
export const rootPath = dirname(currentModulePath);
