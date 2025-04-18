import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';  // 必须加上后缀 .js，否则引用此库的 vitest 会报错
import customParseFormat from 'dayjs/plugin/customParseFormat.js'; // 必须加上后缀 .js，否则引用此库的 vitest 会报错

dayjs.extend(utc);
dayjs.extend(customParseFormat);

export default dayjs;
